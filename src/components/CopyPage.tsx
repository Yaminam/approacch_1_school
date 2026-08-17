import Image from "next/image";
import Link from "next/link";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import { cta, type Cta } from "@/lib/cta";
import { imagesFor } from "@/lib/images";
import type { PageCopy, PullSlot, Block } from "@/lib/copy/types";

/* Renders a page of the copy deck in the house editorial style.

   The layout system follows what independent school sites that read well
   actually do. Audited against Oundle, Gordonstoun, Avenues, Overlake, SAS
   China, Great Walstead, Korowa and GD Goenka:

   - ONE consistent light ground for the whole content run. Oundle keeps a
     single ground and breaks up text with imagery rather than alternating
     coloured bands; Gordonstoun has "no dramatic full-width colour shifts".
     Contrast comes from tonal steps in the same family (tone-1/2/3).
   - A DENSITY LADDER, not a uniform list. Every reference site runs a small
     number of large image blocks and then drops to compact cards.
   - Numbering only where the content is genuinely ordered.
   - Calls to action attach to the block whose argument earns them, plus one
     closing panel. Never free-floating panels between sections.

   THE LAYOUT SCALES WITH THE CONTENT. An earlier version allocated a fixed
   ladder: opening, one image split, one statement, then every remaining block
   as a card. That held at eight blocks. The reviewed copy runs to seventeen,
   and the tail collapsed into a wall of thirteen identical cards with two
   photographs in six thousand pixels. So the middle is now cut into
   MOVEMENTS, each led by an image split or a statement band and followed by
   a short run of cards. A long page gets a rhythm instead of a spreadsheet;
   a short page produces one movement and looks exactly as it did.

   LAYOUT WEIGHT FOLLOWS CONTENT WEIGHT. A block only earns a photograph or a
   3rem statement if it has the copy to carry one. On the heritage page,
   "1986, a new mentor" is a single sentence, and promoting it to a statement
   band by position alone made the page look broken. Light blocks stay cards.

   A DATED SEQUENCE IS A CHRONOLOGY, NOT AN ARGUMENT. Pages whose blocks are
   led by years get a timeline rail rather than the editorial ladder. */

function CtaPair({ primary, secondary, dark = false }: { primary: Cta; secondary: Cta; dark?: boolean }) {
  // sm:whitespace-nowrap: a CTA label must never break across two lines.
  const solid = `inline-flex items-center justify-center sm:whitespace-nowrap rounded-full px-8 py-4 text-[0.8125rem] font-bold uppercase tracking-[0.12em] transition-transform hover:-translate-y-0.5 ${
    dark ? "bg-brass-soft text-pine-800" : "bg-clay text-paper"
  }`;
  const quiet = `inline-flex min-h-11 items-center gap-2 sm:whitespace-nowrap py-2 text-[0.8125rem] font-bold uppercase tracking-[0.1em] underline decoration-2 underline-offset-[6px] transition-colors ${
    dark
      ? "text-brass-soft decoration-brass-soft/50 hover:text-paper hover:decoration-paper"
      : "text-clay decoration-brass hover:text-pine hover:decoration-pine"
  }`;

  const P = primary.external ? (
    <a href={primary.href} className={solid}>{primary.label}</a>
  ) : (
    <Link href={primary.href} className={solid}>{primary.label}</Link>
  );
  const S = secondary.external ? (
    <a href={secondary.href} className={quiet}>{secondary.label}</a>
  ) : (
    <Link href={secondary.href} className={quiet}>{secondary.label}</Link>
  );

  return (
    <div className="flex flex-wrap items-center gap-x-9 gap-y-4">
      {P}
      {S}
    </div>
  );
}

/* The deck numbers some headings itself ("1. Dalhousie Competitive Edge"). */
const stripNum = (h: string) => h.replace(/^\s*\d+\.\s*/, "");

/* Card width on a six-column track, chosen so the last row always fills.

   Thirds (span 2) by default. When the count leaves a remainder, the trailing
   cards widen to halves (span 3) so the run ends on a complete row instead of
   a single stretched card marooned across the full width.

     6 cards -> 3 + 3
     5 cards -> 3 + 2 halves
     4 cards -> 2 halves + 2 halves
     2 cards -> 2 halves                                                    */
function cardSpan(n: number, i: number): string {
  if (n === 1) return "lg:col-span-6";
  const r = n % 3;
  if (r === 0) return "lg:col-span-2";
  // remainder of two: the final pair become halves
  if (r === 2) return i >= n - 2 ? "lg:col-span-3" : "lg:col-span-2";
  // remainder of one: the final four become two rows of halves
  return i >= n - 4 ? "lg:col-span-3" : "lg:col-span-2";
}

/* Named devices in the deck: a line that labels what a section proves or
   builds. Splitting them out lets a card pin them to its own bottom edge,
   which lines them up across a row instead of letting them float wherever
   the body copy happens to end. Without this, "What this part of the day
   builds:" reads as a stray eighth paragraph on eight consecutive cards. */
const TAGS: { re: RegExp; label: string }[] = [
  { re: /^proof:\s*/i, label: "Proof" },
  { re: /^what this part of the day builds:\s*/i, label: "Builds" },
];

function tagOf(t: string): { label: string; body: string } | null {
  for (const g of TAGS) {
    if (g.re.test(t)) return { label: g.label, body: t.replace(g.re, "") };
  }
  return null;
}

const isTag = (t: string) => tagOf(t) !== null;

function TagMark({ text, dark = false }: { text: string; dark?: boolean }) {
  const t = tagOf(text);
  if (!t) return null;
  return (
    <p
      className={`flex max-w-[60ch] items-baseline gap-3 border-l-2 pl-4 text-[0.9375rem] leading-relaxed ${
        dark ? "border-brass-soft/60 text-sage-soft" : "border-brass text-pine/80"
      }`}
    >
      <span
        className={`shrink-0 text-[0.6875rem] font-bold uppercase tracking-[0.16em] ${
          dark ? "text-brass-soft" : "text-brass"
        }`}
      >
        {t.label}
      </span>
      <span>{t.body}</span>
    </p>
  );
}

/* `flow` is for continuous prose: a split, a statement, a row. There, every
   paragraph is body copy and they must read as one voice.

   Without it, the deck's second paragraph dropped to a smaller size and to
   mist (#75616a), so a two-paragraph argument visibly faded out halfway
   through. The lede-then-quieter step is right for a card, where the first
   line is a summary and the rest is detail, so cards keep it. */
function Body({
  paras,
  dark = false,
  flow = false,
}: {
  paras: string[];
  dark?: boolean;
  flow?: boolean;
}) {
  const first = dark ? "text-sage-soft" : "text-pine/85";
  const next = dark ? "text-sage-soft/80" : flow ? "text-pine/75" : "text-mist";
  return (
    <>
      {paras.map((t, i) => {
        if (isTag(t)) {
          return (
            <div key={i} className="mt-5">
              <TagMark text={t} dark={dark} />
            </div>
          );
        }
        const gap = i === 0 ? "" : flow ? "mt-5" : "mt-4";
        const size = i === 0 || flow ? "text-[1.0625rem]" : "text-base";
        return (
          <p
            key={i}
            className={`max-w-[62ch] leading-relaxed [text-wrap:pretty] ${gap} ${
              i === 0 ? first : next
            } ${size}`}
          >
            {t}
          </p>
        );
      })}
    </>
  );
}

type PullData = { line: string; label: string; alt?: string };

/* One content block: photograph and words, side by side, alternating.
   An inline call to action attaches here when the copy has earned one. */
function Chapter({
  block,
  image,
  flip,
  pull,
}: {
  block: Block;
  image: string;
  flip: boolean;
  pull?: PullData;
}) {
  const c = pull ? cta(pull.label) : undefined;
  const alt = pull?.alt ? cta(pull.alt) : undefined;

  return (
    <Reveal>
      <article className="grid items-center gap-y-8 lg:grid-cols-12 lg:gap-x-14">
        <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] soft-shadow-sm">
            <Image
              src={image}
              alt=""
              fill
              sizes="(max-width:1024px) 100vw, 46vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
          {/* No index numeral. The heading leads. */}
          <h3 className="font-display text-[1.6rem] leading-[1.14] text-pine sm:text-[2rem]">
            {stripNum(block.h)}
          </h3>
          <div className="mt-5">
            <Body paras={block.p} flow />
          </div>

          {c && pull && (
            <div className="mt-7 border-t hair pt-6">
              <p className="max-w-[52ch] font-display text-[1.15rem] leading-snug text-pine">
                {pull.line}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
                <Link
                  href={c.href}
                  className="inline-flex min-h-11 items-center gap-2 py-2 text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-clay underline decoration-brass decoration-2 underline-offset-[6px] transition-colors hover:text-pine hover:decoration-pine"
                >
                  {c.label}
                  <span aria-hidden>&rarr;</span>
                </Link>
                {alt && (
                  <Link
                    href={alt.href}
                    className="inline-flex min-h-11 items-center py-2 text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-mist transition-colors hover:text-clay"
                  >
                    {alt.label}
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

/* The single held moment of a movement. With a pull it splits, and the
   invitation fills the right rather than filler copy or a second photograph. */
function Statement({ block, pull }: { block: Block; pull?: PullData }) {
  return (
    <section className="tone-3">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        {/* items-center: the aside is shorter than the argument beside it, and
            top-aligning the two left a large void under the right column. */}
        <div className={pull ? "grid items-center gap-y-12 lg:grid-cols-12 lg:gap-x-16" : ""}>
          <Reveal className={pull ? "lg:col-span-7" : ""}>
            <div>
              <h2
                className={`font-display leading-[1.04] text-pine ${
                  pull
                    ? "text-[1.9rem] sm:text-[2.5rem] lg:text-[2.9rem]"
                    : "max-w-5xl text-[2.1rem] sm:text-[3rem] lg:text-[3.4rem]"
                }`}
              >
                {stripNum(block.h)}
              </h2>
              <div className="mt-7 max-w-3xl">
                <Body paras={block.p} flow />
              </div>
            </div>
          </Reveal>

          {/* Invitation. No container: a filled card sat on this band like a
              sticker. A brass rule down the left edge and a shift to italic
              display type sets it apart while keeping it on the same surface,
              so it belongs to the statement it answers. */}
          {pull && (
            <Reveal delay={130} className="lg:col-span-5">
              <aside className="border-t-2 border-brass pt-8 lg:border-l-2 lg:border-t-0 lg:pl-10 lg:pt-2">
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-brass">
                  Where this leads
                </p>
                <p className="mt-5 font-display text-[1.5rem] italic leading-[1.22] text-clay sm:text-[1.85rem]">
                  {pull.line}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link
                    href={cta(pull.label).href}
                    className="inline-flex items-center justify-center rounded-full bg-clay px-7 py-4 text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-paper transition-transform hover:-translate-y-0.5"
                  >
                    {cta(pull.label).label}
                  </Link>
                  {pull.alt && (
                    <Link
                      href={cta(pull.alt).href}
                      className="group inline-flex items-center gap-2 text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-clay underline decoration-brass decoration-2 underline-offset-[6px] transition-colors hover:text-pine hover:decoration-pine"
                    >
                      {cta(pull.alt).label}
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </Link>
                  )}
                </div>
              </aside>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

/* A run of cards. No photography, so the page keeps moving and the split
   above retains its weight. A run is capped short by the movement system,
   because past four or five tiles the grid stops reading as a set and starts
   reading as a table.

   Cards are for SHORT, PARALLEL items: the six dimensions of the Whole Child
   Report, a list of statutory disclosures. See Run() for why long prose never
   comes through here. */
function Cards({ blocks }: { blocks: Block[] }) {
  return (
    /* A six-column track so the last row can redistribute rather than leave
       an orphan. */
    <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
      {blocks.map((s, i) => (
        <Reveal key={stripNum(s.h)} delay={i * 60} className={cardSpan(blocks.length, i)}>
          {/* A brass rule along the card's top edge: structural, it
              delineates the card, rather than a short dash floating above
              the heading. Body grows, the tag line is pinned to the bottom
              edge, so tags align across the row however long the copy above
              them runs. */}
          <article className="group flex h-full flex-col rounded-[1.25rem] border-t-2 border-brass/35 bg-paper p-7 transition-colors hover:border-clay hover:bg-blush/60">
            <h3 className="font-display text-[1.3rem] leading-[1.2] text-pine">
              {stripNum(s.h)}
            </h3>
            <div className="mt-3 flex-1">
              <Body paras={s.p.filter((t) => !isTag(t))} />
            </div>
            {s.p.filter(isTag).map((t) => (
              <div key={t} className="mt-6">
                <TagMark text={t} />
              </div>
            ))}
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* Hairline prose rows: heading held left, body running right on a comfortable
   measure, separated by rules.

   This is the layout family the page was missing. The reviewed copy gives
   most blocks two full paragraphs, and pouring 120 words into a third-width
   tile produces a brick of text, which is exactly what went wrong on the
   live site. Prose wants a wide measure and a quiet rule, not a container.
   The heading column also gives the eye somewhere to rest, so a run of these
   scans as an editorial list rather than a wall. */
function Rows({ blocks }: { blocks: Block[] }) {
  return (
    <div className="border-b hair">
      {blocks.map((b, i) => (
        <Reveal key={stripNum(b.h)} delay={Math.min(i, 4) * 60}>
          <article className="grid gap-x-14 gap-y-4 border-t hair py-8 sm:py-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="font-display text-[1.45rem] leading-[1.16] text-pine sm:text-[1.75rem]">
                {stripNum(b.h)}
              </h3>
              {/* A short brass rule gives the heading a base. Without it the
                  left column is a couple of lines floating against a tall
                  right column, and the row reads as unfinished. */}
              <span aria-hidden className="mt-5 hidden h-px w-10 bg-brass/60 lg:block" />
            </div>
            <div className="lg:col-span-8">
              <Body paras={b.p} flow />
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* Long prose in a tile reads as a brick; a one-line item in a prose row reads
   as a stub. This is the line between the two. */
const ROW_THRESHOLD = 200;

/* Past four tiles a grid stops reading as a set and starts reading as a
   table, and past four prose rows the page loses its pulse. */
const RUN_MAX = 4;
const GRID_MAX = 6;

/* A dated run is a chronology. Hairline rows with the year in brass display
   type, which is the same vocabulary the Recognition band already uses, and
   reads as one continuous journey rather than a grid of unrelated tiles. */
const YEAR = /^\s*((?:1[89]|20)\d{2})\s*[,.–—-]?\s*/;

function Chronology({ blocks }: { blocks: Block[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
      {/* Held to a reading column. Run full width, a list of one-line entries
          leaves the right half of every row empty. */}
      <ol className="mx-auto max-w-4xl border-b hair">
        {blocks.map((b, i) => {
          const m = b.h.match(YEAR);
          const year = m ? m[1] : "";
          const title = m ? b.h.slice(m[0].length) : b.h;
          return (
            <Reveal key={b.h} delay={Math.min(i, 6) * 50}>
              <li className="grid gap-x-10 gap-y-2 border-t hair py-7 sm:grid-cols-[8rem_1fr] sm:py-8">
                <span className="font-display text-[1.75rem] leading-none text-brass [font-variant-numeric:tabular-nums]">
                  {year}
                </span>
                <div>
                  <h3 className="font-display text-[1.35rem] leading-[1.2] text-pine sm:text-[1.6rem]">
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </h3>
                  <div className="mt-3">
                    <Body paras={b.p} />
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

/* Split a run into `n` groups of as even a size as possible, so a movement
   never ends on a lone orphan card. */
function chunk<T>(arr: T[], n: number): T[][] {
  const out: T[][] = [];
  let i = 0;
  for (let g = 0; g < n; g++) {
    const size = Math.ceil((arr.length - i) / (n - g));
    if (size > 0) out.push(arr.slice(i, i + size));
    i += size;
  }
  return out;
}

/** How much copy a block carries, used to decide what layout it can hold. */
const weight = (b: Block) => b.p.reduce((n, t) => n + t.length, 0);

type Part =
  | { t: "split"; block: Block }
  | { t: "statement"; block: Block }
  | { t: "rows"; blocks: Block[] }
  | { t: "cards"; blocks: Block[] };

/* Plan the page from the SHAPE of the copy, not from position.

   An earlier version cut the middle into equal groups and let each group pick
   a vessel by its average weight. That tore sibling content in half: the six
   dimensions of the Whole Child Report are one set, and four of them came out
   as cards while the other two came out as prose rows.

   So the run is segmented first: consecutive blocks that carry a similar
   amount of copy stay together and share one treatment. Only then is each
   segment paced, and heads alternate between a photograph and a held
   statement across the whole page so no two openings repeat. */
function planParts(middle: Block[]): Part[] {
  const segs: { heavy: boolean; blocks: Block[] }[] = [];
  for (const b of middle) {
    const heavy = weight(b) >= ROW_THRESHOLD;
    const last = segs[segs.length - 1];
    if (last && last.heavy === heavy) last.blocks.push(b);
    else segs.push({ heavy, blocks: [b] });
  }

  /* A lone short block between two arguments is not a set, so it joins the
     prose around it rather than becoming a single marooned tile. A lone long
     block keeps its own segment: as a split it becomes a photograph. */
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
      for (const g of chunk(seg.blocks, Math.ceil(seg.blocks.length / GRID_MAX))) {
        out.push({ t: "cards", blocks: g });
      }
      continue;
    }
    for (const g of chunk(seg.blocks, Math.ceil(seg.blocks.length / (RUN_MAX + 1)))) {
      out.push({ t: head++ % 2 === 0 ? "split" : "statement", block: g[0] });
      if (g.length > 1) out.push({ t: "rows", blocks: g.slice(1) });
    }
  }
  return out;
}

export default function CopyPage({ page }: { page: PageCopy }) {
  const primary = cta(page.primary);
  const secondary = cta(page.secondary);

  const blocks: Block[] = page.blocks;
  const lead = blocks[0];
  const rest = blocks.slice(1);
  const close = rest.length > 1 ? rest[rest.length - 1] : undefined;
  const middle = close ? rest.slice(0, -1) : rest;

  /* A page whose blocks are led by years is a chronology. Two thirds is a
     deliberately high bar: it fires for the heritage timeline and nothing
     else in the deck. */
  const dated = middle.filter((b) => YEAR.test(b.h)).length;
  const chronological = middle.length >= 6 && dated / middle.length >= 0.66;

  const parts = chronological ? [] : planParts(middle);

  // One photograph for the opening, one per split.
  const splitAt = new Map<number, number>();
  parts.forEach((p, i) => {
    if (p.t === "split") splitAt.set(i, splitAt.size);
  });
  const shots = imagesFor(page.slug, splitAt.size + 1, [page.image2 ?? ""]);
  const leadShot = shots[0];

  /* Pulls attach to the heads, in reading order. The first one prefers a
     statement, whose aside column is built for it. */
  const slotOrder: PullSlot[] = ["lead", "grid", "split", "list"];
  const pulls = slotOrder.flatMap((s) => (page.pulls ?? []).filter((p) => p.slot === s));
  const headIdx = parts
    .map((p, i) => (p.t === "split" || p.t === "statement" ? i : -1))
    .filter((i) => i >= 0);
  const firstStatement = headIdx.find((i) => parts[i].t === "statement");
  const order =
    firstStatement === undefined
      ? headIdx
      : [firstStatement, ...headIdx.filter((i) => i !== firstStatement)];
  const pullFor = new Map<number, PullData>();
  order.forEach((pi, i) => {
    if (i < pulls.length) pullFor.set(pi, pulls[i]);
  });

  return (
    <main>
      <PageHero
        eyebrow={page.nav}
        title={page.title}
        emphasis={page.emphasis}
        subtitle={page.subhead}
        image={page.image}
      />

      {/* One continuous ground for the whole content run. */}
      <div className="tone-1 lit">
        {/* Opening: words left, photograph right, and the prescribed CTA pair.
            Text alone on a tinted ground read as unfinished, and a second
            prose column left a hole; a photograph is what the reference sites
            put here. */}
        {lead && (
          <section className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:px-8 sm:pt-24">
            <div className="grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-16">
              <Reveal className="lg:col-span-7">
                <div>
                  <p className="eyebrow text-clay">{page.kicker}</p>
                  <h2 className="mt-6 font-display text-[2.3rem] leading-[1.02] text-pine sm:text-[3rem] lg:text-[3.5rem]">
                    {stripNum(lead.h)}
                  </h2>
                  <div className="mt-8">
                    <Body paras={lead.p} />
                  </div>
                  <div className="mt-10">
                    <CtaPair primary={primary} secondary={secondary} />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={130} className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] soft-shadow">
                  <Image
                    src={leadShot}
                    alt=""
                    fill
                    priority
                    sizes="(max-width:1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {chronological ? (
          <Chronology blocks={middle} />
        ) : (
          parts.map((part, i) => {
            const prev = parts[i - 1];
            /* A run needs more air under a tinted band than under a split,
               whose own bottom padding already separates it. */
            const spaced = !prev || prev.t === "statement";
            const pull = pullFor.get(i);

            if (part.t === "split") {
              const n = splitAt.get(i) ?? 0;
              const next = parts[i + 1];
              const solo = !next || (next.t !== "rows" && next.t !== "cards");
              return (
                <section
                  key={i}
                  className={`mx-auto max-w-7xl px-6 pt-16 sm:px-8 sm:pt-20 ${
                    solo ? "pb-16 sm:pb-20" : ""
                  }`}
                >
                  <Chapter
                    block={part.block}
                    image={shots[1 + n]}
                    flip={n % 2 === 1}
                    pull={pull}
                  />
                </section>
              );
            }

            if (part.t === "statement") {
              return <Statement key={i} block={part.block} pull={pull} />;
            }

            return (
              <section
                key={i}
                className={`mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20 ${
                  spaced ? "pt-14 sm:pt-16" : "pt-10 sm:pt-12"
                }`}
              >
                {part.t === "rows" ? (
                  <Rows blocks={part.blocks} />
                ) : (
                  <Cards blocks={part.blocks} />
                )}
              </section>
            );
          })
        )}
      </div>

      {/* One closing panel, at the foot of the page where a CTA belongs. */}
      {close && (
        <section className="grain-pine lit-deep">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24">
            {/* Label first, then a rule running out from it to the edge.
                Putting the border on the container instead drew a full-width
                line with the label stranded underneath. */}
            <Reveal>
              <div className="flex items-center gap-6">
                <span className="eyebrow shrink-0 text-brass-soft">
                  {page.closeEyebrow ?? "In closing"}
                </span>
                <span aria-hidden className="h-px flex-1 bg-paper/20" />
              </div>
            </Reveal>

            <div className="mt-10 grid gap-y-10 lg:grid-cols-12 lg:gap-x-16">
              <Reveal className="lg:col-span-6">
                <h2 className="font-display text-[2rem] leading-[1.06] text-paper sm:text-[2.6rem] lg:text-[3rem]">
                  {stripNum(close.h)}
                </h2>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-6">
                <div>
                  <Body paras={close.p} dark flow />
                  <div className="mt-9">
                    <CtaPair primary={primary} secondary={secondary} dark />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
