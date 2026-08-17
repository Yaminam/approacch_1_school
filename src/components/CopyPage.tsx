import PageHero from "./PageHero";
import Reveal from "./Reveal";
import { cta } from "@/lib/cta";
import { imagesFor } from "@/lib/images";
import {
  PAD,
  Paras,
  OpeningStatement,
  Movement,
  DarkMovement,
  SplitBleed,
  IconRow,
  PairMovement,
  ClosingStatement,
  ClosingCta,
  type Variant,
} from "./sections";
import type { PageCopy, PullSlot, Block } from "@/lib/copy/types";

/* Composes an inner page as ONE art-directed editorial story.

   The previous version allocated vessels: a card grid here, a tile row there.
   That is why the page read as heading / paragraph / card, repeated. This one
   composes a RHYTHM. Six compositions cycle, so no two consecutive movements
   are built the same way, carry the same image proportion, or place the
   picture on the same side:

     portrait -> offset -> pair -> cinematic -> dark -> bleed -> repeat

   A dark maroon movement lands roughly every sixth section and acts as the
   transition. A text-only movement gives the run of photography somewhere to
   breathe. The bleeding split breaks the container, so the page is never a
   column of centred two-column rows.

   NOTHING IS DROPPED. Every block, paragraph, proof line and call to action
   in the deck still renders. */

/* Short parallel items are a genuine set; an argument needs a column. */
const HEAVY = 200;
const weight = (b: Block) => b.p.reduce((n, t) => n + t.length, 0);

/* The deck numbers some headings itself ("1. Dalhousie Competitive Edge"). */
const stripNum = (h: string) => h.replace(/^\s*\d+\.\s*/, "");
const clean = (b: Block): Block => ({ ...b, h: stripNum(b.h) });

type Kind = Variant | "dark" | "bleed" | "pair";

/* Six compositions, consuming seven blocks a cycle: the pair takes two. */
const RHYTHM: Kind[] = ["portrait", "offset", "pair", "cinematic", "dark", "bleed"];

type Part =
  | { t: "move"; kind: Kind; block: Block; n: number }
  | { t: "pair"; blocks: [Block, Block]; ns: [number, number] }
  | { t: "set"; blocks: Block[] };

function planParts(middle: Block[]): Part[] {
  /* Segment by shape first, so sibling content is never torn across two
     different treatments. */
  const segs: { heavy: boolean; blocks: Block[] }[] = [];
  for (const b of middle) {
    const heavy = weight(b) >= HEAVY;
    const last = segs[segs.length - 1];
    if (last && last.heavy === heavy) last.blocks.push(b);
    else segs.push({ heavy, blocks: [b] });
  }
  /* A lone short block between two arguments is not a set; it joins the prose
     around it rather than becoming a marooned tile. */
  for (let i = segs.length - 1; i >= 0; i--) {
    const s = segs[i];
    if (s.heavy || s.blocks.length > 1) continue;
    const prev = segs[i - 1];
    const next = segs[i + 1];
    if (prev?.heavy) {
      prev.blocks.push(...s.blocks);
      segs.splice(i, 1);
    } else if (next?.heavy) {
      next.blocks.unshift(...s.blocks);
      segs.splice(i, 1);
    }
  }

  const out: Part[] = [];
  let step = 0;
  let n = 0;
  for (const seg of segs) {
    if (!seg.heavy) {
      out.push({ t: "set", blocks: seg.blocks });
      continue;
    }
    let i = 0;
    while (i < seg.blocks.length) {
      const kind = RHYTHM[step % RHYTHM.length];
      step++;
      if (kind === "pair" && i + 1 < seg.blocks.length) {
        out.push({
          t: "pair",
          blocks: [seg.blocks[i], seg.blocks[i + 1]],
          ns: [++n, ++n],
        });
        i += 2;
        continue;
      }
      /* A pair with nothing to pair with falls back to a held moment. */
      const solo: Kind = kind === "pair" ? "plain" : kind;
      out.push({ t: "move", kind: solo, block: seg.blocks[i], n: ++n });
      i++;
    }
  }
  return out;
}

/* A dated run is a chronology, not an argument. */
const YEAR = /^\s*((?:1[89]|20)\d{2})\s*[,.–—-]?\s*/;

function Chronology({ blocks }: { blocks: Block[] }) {
  return (
    <section className={`${PAD} py-20 sm:py-24`}>
      <ol className="mx-auto max-w-3xl">
        {blocks.map((b, i) => {
          const m = b.h.match(YEAR);
          const year = m ? m[1] : "";
          const title = m ? b.h.slice(m[0].length) : b.h;
          return (
            <Reveal key={b.h} delay={Math.min(i, 6) * 50}>
              <li className="grid gap-x-10 gap-y-2 border-t border-sand py-8 sm:grid-cols-[6rem_1fr]">
                <span className="font-display text-[1.6rem] leading-none text-brass/70 [font-variant-numeric:tabular-nums]">
                  {year}
                </span>
                <div>
                  <h3 className="font-display text-[1.3rem] leading-[1.2] text-clay sm:text-[1.5rem]">
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </h3>
                  <div className="mt-3">
                    <Paras paras={b.p} size="text-[0.98rem]" gap="mt-3" measure="max-w-[58ch]" />
                  </div>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}

export default function CopyPage({ page }: { page: PageCopy }) {
  const primary = cta(page.primary);
  const secondary = cta(page.secondary);

  const blocks: Block[] = page.blocks.map(clean);
  const lead = blocks[0];
  const rest = blocks.slice(1);
  const close = rest.length > 1 ? rest[rest.length - 1] : undefined;
  const middle = close ? rest.slice(0, -1) : rest;

  const dated = middle.filter((b) => YEAR.test(b.h)).length;
  const chronological = middle.length >= 6 && dated / middle.length >= 0.66;

  const parts = chronological ? [] : planParts(middle);

  /* One photograph per movement that carries one. "plain" takes none. */
  const need = parts.filter((p) => p.t === "move" && p.kind !== "plain").length;
  const shots = imagesFor(page.slug, Math.max(need, 1), [page.image2 ?? ""]);
  let shot = 0;

  /* Pulls attach to movements, spread through the page rather than clustered
     at the top. */
  const slotOrder: PullSlot[] = ["lead", "grid", "split", "list"];
  const pulls = slotOrder.flatMap((s) => (page.pulls ?? []).filter((p) => p.slot === s));
  const moveIdx = parts
    .map((p, i) => (p.t === "move" || p.t === "pair" ? i : -1))
    .filter((i) => i >= 0);
  const pullFor = new Map<number, (typeof pulls)[number]>();
  pulls.forEach((pl, i) => {
    const spot = Math.floor(((i + 1) * moveIdx.length) / (pulls.length + 1));
    const at = moveIdx[Math.min(moveIdx.length - 1, spot)];
    if (at !== undefined && !pullFor.has(at)) pullFor.set(at, pl);
  });

  let bleedFlip = false;

  return (
    <main className="bg-cream">
      <PageHero
        eyebrow={page.nav}
        title={page.title}
        emphasis={page.emphasis}
        subtitle={page.subhead}
        image={page.image}
        kicker={page.kicker}
        primary={primary}
        secondary={secondary}
      />

      {lead && <OpeningStatement title={lead.h} paras={lead.p} />}

      {chronological ? (
        <Chronology blocks={middle} />
      ) : (
        parts.map((part, i) => {
          if (part.t === "set") return <IconRow key={i} items={part.blocks} />;
          if (part.t === "pair")
            return (
              <PairMovement key={i} items={part.blocks} ns={part.ns} pull={pullFor.get(i)} />
            );

          const pull = pullFor.get(i);
          const img = part.kind === "plain" ? undefined : shots[shot++ % shots.length];

          if (part.kind === "dark") {
            return (
              <DarkMovement key={i} item={part.block} image={img} eyebrow={page.kicker} pull={pull} />
            );
          }
          if (part.kind === "bleed" && img) {
            const flip = bleedFlip;
            bleedFlip = !bleedFlip;
            return (
              <SplitBleed key={i} item={part.block} image={img} n={part.n} flip={flip} pull={pull} />
            );
          }
          return (
            <Movement
              key={i}
              item={part.block}
              image={img}
              n={part.n}
              variant={(part.kind === "bleed" ? "offset" : part.kind) as Variant}
              pull={pull}
            />
          );
        })
      )}

      {close && (
        <>
          <ClosingStatement item={close} />
          <ClosingCta
            eyebrow={page.closeEyebrow ?? "Visit Dalhousie"}
            title="See the difference for yourself."
            primary={{ label: primary.label, href: primary.href }}
            secondary={{ label: secondary.label, href: secondary.href }}
          />
        </>
      )}
    </main>
  );
}
