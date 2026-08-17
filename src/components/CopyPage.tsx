import PageHero from "./PageHero";
import Reveal from "./Reveal";
import { cta } from "@/lib/cta";
import { imagesFor } from "@/lib/images";
import { GoldRule } from "./Ornament";
import {
  PAD,
  Paras,
  EditorialIntro,
  IconGrid,
  NumberedColumns,
  EditorialCards,
  ImageEditorial,
  QuoteBand,
  ClosingCta,
} from "./sections";
import type { PageCopy, PullSlot, Block } from "@/lib/copy/types";

/* Renders an inner page in the Dalhousie editorial system.

   Every page shares one design language: ivory grounds, maroon Fraunces
   headings, antique-gold rules, numerals and line icons, thin sand borders,
   deep-maroon bands. What changes per page is which sections the copy calls
   for, never how the parts are styled.

   THE PLAN COMES FROM THE SHAPE OF THE COPY. The run is segmented first, so
   consecutive blocks carrying a similar amount of copy stay together and
   share one treatment; sibling content is never torn across two vessels.
   Short parallel items become an icon row or numbered columns. Arguments
   become a photograph beside the words, then numbered editorial cards. Every
   other argument head becomes a held statement on deep maroon.

   NOTHING IS DROPPED. Every block, paragraph and call to action in the deck
   is rendered. Density is solved with information architecture, not by
   cutting content. */

/* Short parallel items belong in a grid; an argument needs a column. */
const HEAVY = 200;
const weight = (b: Block) => b.p.reduce((n, t) => n + t.length, 0);

/* The deck numbers some headings itself ("1. Dalhousie Competitive Edge"). */
const stripNum = (h: string) => h.replace(/^\s*\d+\.\s*/, "");
const clean = (b: Block): Block => ({ ...b, h: stripNum(b.h) });

type Part =
  | { t: "image"; block: Block }
  | { t: "quote"; block: Block }
  | { t: "cards"; blocks: Block[] }
  | { t: "icons"; blocks: Block[] }
  | { t: "numbers"; blocks: Block[] };

function chunk<T>(arr: T[], n: number): T[][] {
  const out: T[][] = [];
  const count = Math.max(1, n);
  let i = 0;
  for (let g = 0; g < count; g++) {
    const size = Math.ceil((arr.length - i) / (count - g));
    if (size > 0) out.push(arr.slice(i, i + size));
    i += size;
  }
  return out;
}

function planParts(middle: Block[]): Part[] {
  const segs: { heavy: boolean; blocks: Block[] }[] = [];
  for (const b of middle) {
    const heavy = weight(b) >= HEAVY;
    const last = segs[segs.length - 1];
    if (last && last.heavy === heavy) last.blocks.push(b);
    else segs.push({ heavy, blocks: [b] });
  }

  /* A lone short block between two arguments is not a set, so it joins the
     prose around it rather than becoming a single marooned tile. */
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
  let head = 0;
  for (const seg of segs) {
    if (!seg.heavy) {
      /* Up to five short items read as a row of icons, the pillar band in the
         reference. Past that the set wants numbering to stay countable. */
      if (seg.blocks.length <= 5) {
        out.push({ t: "icons", blocks: seg.blocks });
      } else {
        for (const g of chunk(seg.blocks, Math.ceil(seg.blocks.length / 8))) {
          out.push({ t: "numbers", blocks: g });
        }
      }
      continue;
    }
    for (const g of chunk(seg.blocks, Math.ceil(seg.blocks.length / 5))) {
      out.push({ t: head++ % 2 === 0 ? "image" : "quote", block: g[0] });
      if (g.length > 1) out.push({ t: "cards", blocks: g.slice(1) });
    }
  }
  return out;
}

/* A dated run is a chronology, not an argument. */
const YEAR = /^\s*((?:1[89]|20)\d{2})\s*[,.–—-]?\s*/;

function Chronology({ blocks }: { blocks: Block[] }) {
  return (
    <section className={`${PAD} py-16 sm:py-20`}>
      {/* Held to a reading column: run full width, a list of one-line entries
          leaves the right half of every row empty. */}
      <ol className="mx-auto max-w-4xl border-b border-sand">
        {blocks.map((b, i) => {
          const m = b.h.match(YEAR);
          const year = m ? m[1] : "";
          const title = m ? b.h.slice(m[0].length) : b.h;
          return (
            <Reveal key={b.h} delay={Math.min(i, 6) * 50}>
              <li className="grid gap-x-10 gap-y-2 border-t border-sand py-7 sm:grid-cols-[7rem_1fr] sm:py-8">
                <span className="font-display text-[1.7rem] leading-none text-brass [font-variant-numeric:tabular-nums]">
                  {year}
                </span>
                <div>
                  <h3 className="font-display text-[1.3rem] leading-[1.2] text-clay sm:text-[1.5rem]">
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </h3>
                  <Paras paras={b.p} size="text-[0.95rem]" tone="text-pine/75" />
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

  /* Photography budget: one wide image per argument head, one per card. */
  const need = parts.reduce(
    (n, p) => n + (p.t === "image" ? 1 : p.t === "cards" ? p.blocks.length : 0),
    0,
  );
  const shots = imagesFor(page.slug, Math.max(need, 1), [page.image2 ?? ""]);
  let shot = 0;
  /* Card numbers run continuously down the page. Restarting them at each
     group turned the seven pathways into three separate lists of one to
     three. */
  let cardNo = 0;

  /* Pulls attach to the argument heads, in reading order. */
  const slotOrder: PullSlot[] = ["lead", "grid", "split", "list"];
  const pulls = slotOrder.flatMap((s) => (page.pulls ?? []).filter((p) => p.slot === s));
  const heads = parts.map((p, i) => (p.t === "image" ? i : -1)).filter((i) => i >= 0);
  const pullFor = new Map<number, (typeof pulls)[number]>();
  heads.forEach((pi, i) => {
    if (i < pulls.length) pullFor.set(pi, pulls[i]);
  });

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

      {lead && (
        <EditorialIntro title={lead.h} paras={lead.p} />
      )}

      {chronological ? (
        <Chronology blocks={middle} />
      ) : (
        parts.map((part, i) => {
          if (part.t === "image") {
            const img = shots[shot++ % shots.length];
            const n = heads.indexOf(i);
            return (
              <ImageEditorial
                key={i}
                item={part.block}
                image={img}
                flip={n % 2 === 1}
                pull={pullFor.get(i)}
              />
            );
          }
          if (part.t === "quote") return <QuoteBand key={i} item={part.block} />;
          if (part.t === "icons") return <IconGrid key={i} items={part.blocks} tone="paper" />;
          if (part.t === "numbers") return <NumberedColumns key={i} items={part.blocks} />;
          const imgs = part.blocks.map(() => shots[shot++ % shots.length]);
          const from = cardNo;
          cardNo += part.blocks.length;
          return <EditorialCards key={i} items={part.blocks} images={imgs} startAt={from} />;
        })
      )}

      {close && (
        <>
          {/* The closing argument keeps its full copy, above the CTA band. */}
          <section className={`${PAD} pt-14 sm:pt-16`}>
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-display text-[1.9rem] leading-[1.12] text-clay sm:text-[2.4rem]">
                  {close.h}
                </h2>
                <div className="mt-5 flex justify-center">
                  <GoldRule className="text-brass" />
                </div>
                <div className="mt-2">
                  <Paras paras={close.p} size="text-[1rem]" tone="text-pine/75" gap="mt-4" />
                </div>
              </div>
            </Reveal>
          </section>
          <div className="pt-12 sm:pt-14">
            <ClosingCta
              eyebrow={page.closeEyebrow ?? "Visit Dalhousie"}
              title="Walk through the classrooms. See the rhythm of the day. Meet the people who will guide your child."
              primary={{ label: primary.label, href: primary.href }}
              secondary={{ label: secondary.label, href: secondary.href }}
            />
          </div>
        </>
      )}
    </main>
  );
}
