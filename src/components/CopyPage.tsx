import PageHero from "./PageHero";
import Reveal from "./Reveal";
import { cta } from "@/lib/cta";
import { imageFor } from "@/lib/images";
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

const weight = (b: Block) => b.p.reduce((n, t) => n + t.length, 0);

/* Is this block an argument, or one item of a set?

   Character count alone got this wrong. On the Defence Pathway, "Mind",
   "Body", "Voice", "Bearing" and "Service" each run about 240 characters,
   which cleared a 200-character bar, so five members of one obvious set were
   each given a full movement and one of them ended up alone on a full-height
   maroon band under a one-word heading.

   The reliable signal in this deck is SHAPE, not length: an argument is
   written as two or more paragraphs. A single paragraph, however long, is an
   item. The generous character fallback catches the rare long single. */
const isArgument = (b: Block) => b.p.length >= 2 || weight(b) >= 420;

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
    const heavy = isArgument(b);
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

  /* Now choose a composition for each argument.

     The rhythm proposes; the content disposes. Assigning compositions purely
     by position in a cycle is what produced the mismatches: a long two-
     paragraph argument squeezed into the compressed pair, a short one alone
     on a full-height maroon band. Each proposal is therefore checked against
     the block before it is accepted, and rejected proposals fall through to
     the next image composition, which suits almost anything. */
  const PAIRABLE = 460; // two of these sit comfortably side by side
  const BAND = 460; // below this a dark band is mostly empty space
  const BAND_MAX = 900; // above this it becomes a wall of reversed-out text
  const IMAGES: Kind[] = ["portrait", "offset", "cinematic", "bleed"];

  const out: Part[] = [];
  let step = 0;
  let n = 0;
  let img = 0;
  let darkUsed = 0;

  for (const seg of segs) {
    if (!seg.heavy) {
      out.push({ t: "set", blocks: seg.blocks });
      continue;
    }
    let i = 0;
    while (i < seg.blocks.length) {
      const b = seg.blocks[i];
      const next = seg.blocks[i + 1];
      const proposed = RHYTHM[step % RHYTHM.length];
      step++;

      /* A pair needs two arguments that are both short AND of similar length.
         Length alone was not enough: two blocks under the cap but one half
         the other still left one column trailing 280px of empty ivory. */
      const ratio = next ? Math.max(weight(b), weight(next)) / Math.max(1, Math.min(weight(b), weight(next))) : 99;
      if (
        proposed === "pair" &&
        next &&
        weight(b) <= PAIRABLE &&
        weight(next) <= PAIRABLE &&
        ratio < 1.5
      ) {
        out.push({ t: "pair", blocks: [b, next], ns: [++n, ++n] });
        i += 2;
        continue;
      }

      /* A dark band needs enough copy to fill it, and one page should not
         become a run of maroon slabs. */
      if (proposed === "dark" && weight(b) >= BAND && weight(b) <= BAND_MAX && darkUsed < 2) {
        darkUsed++;
        out.push({ t: "move", kind: "dark", block: b, n: ++n });
        i++;
        continue;
      }

      const kind = IMAGES[img++ % IMAGES.length];
      out.push({ t: "move", kind, block: b, n: ++n });
      i++;
    }
  }
  return out;
}

/* Copy that numbers itself: "Step 2. ...", "3) ...", "Question 4: ...".
   When the headings already carry a sequence, the composer must not stamp a
   second one beside them. The admissions process read "01  Step 2." */
const SELF_NUMBERED = /^\s*(?:(?:step|phase|stage|part|question)\s+)?\d+\s*[.):]/i;

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

  /* If most of the run numbers itself, drop our markers for the whole page,
     so one page never mixes two counting systems. */
  const selfNumbered =
    middle.length > 0 &&
    middle.filter((b) => SELF_NUMBERED.test(b.h)).length / middle.length >= 0.5;

  /* A photograph is chosen from each section's own words rather than from a
     slug-hashed pool, so the picture belongs to the argument beside it. The
     set keeps any one photograph from appearing twice on a page, and seeding
     it with the hero stops the hero repeating below the fold. */
  const used = new Set<string>([page.image]);
  const shotFor = (b: Block) => imageFor(`${b.h} ${b.p.join(" ")}`, used);

  /* Pulls attach to movements, spread through the page rather than clustered
     at the top. */
  const slotOrder: PullSlot[] = ["lead", "grid", "split", "list"];
  const pulls = slotOrder.flatMap((s) => (page.pulls ?? []).filter((p) => p.slot === s));
  /* A pull sits beside a photograph, where there is a column for it. Under a
     two-up pair it hung off the left edge, detached from both columns. */
  const moveIdx = parts
    .map((p, i) => (p.t === "move" && p.kind !== "dark" ? i : -1))
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
              <PairMovement
                key={i}
                items={part.blocks}
                ns={selfNumbered ? undefined : part.ns}
              />
            );

          const pull = pullFor.get(i);
          const img = part.kind === "plain" ? undefined : shotFor(part.block);

          if (part.kind === "dark") {
            return (
              <DarkMovement key={i} item={part.block} image={img} eyebrow={page.kicker} pull={pull} />
            );
          }
          if (part.kind === "bleed" && img) {
            const flip = bleedFlip;
            bleedFlip = !bleedFlip;
            return (
              <SplitBleed
                key={i}
                item={part.block}
                image={img}
                n={selfNumbered ? undefined : part.n}
                flip={flip}
                pull={pull}
              />
            );
          }
          return (
            <Movement
              key={i}
              item={part.block}
              image={img}
              n={selfNumbered ? undefined : part.n}
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
