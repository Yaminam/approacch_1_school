import Image from "next/image";
import Link from "next/link";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import { cta, type Cta } from "@/lib/cta";
import { imagesFor } from "@/lib/images";
import type { PageCopy, PullSlot, Block } from "@/lib/copy/types";

/* Renders a page from Website Copy Draft 2 in the house editorial style.

   The layout system follows what independent school sites that read well
   actually do. Audited against Oundle, Gordonstoun, Avenues, Overlake, SAS
   China, Great Walstead, Korowa and GD Goenka:

   - ONE consistent light ground for the whole content run. Oundle keeps a
     single ground and breaks up text with imagery rather than alternating
     coloured bands; Gordonstoun has "no dramatic full-width colour shifts".
     An earlier version dropped a clay slab at the top of every page and a
     pine slab at the bottom, which read as unrelated blocks pasted together.
     Contrast now comes from tonal steps in the same family (tone-1/2/3).
   - A DENSITY LADDER, not a uniform list. Every reference site runs a small
     number of large image blocks and then drops to compact cards. Overlake:
     "full-width blocks alternating image/text" then "card layouts, 3-4
     columns". Pairing a photograph with every block buries the page in
     photography; giving none makes it a grey wall.
   - FIVE layout families per page, so no two sections repeat: opening,
     image split (max two, the zigzag cap), statement, cards, close.
   - Numbering only where the content is genuinely ordered (page.kind).
     Numbering a parallel set tells the reader that safeguarding follows
     medical support, which is false.
   - Calls to action attach to the block whose argument earns them, plus one
     closing panel. Never free-floating panels between sections.
   - Blocks stay short. Oundle runs 80 to 120 words per section, Avenues 25
     to 50. The deck is already written to roughly that length. */

function CtaPair({ primary, secondary, dark = false }: { primary: Cta; secondary: Cta; dark?: boolean }) {
  // whitespace-nowrap: a CTA label must never break across two lines.
  const solid = `inline-flex items-center justify-center whitespace-nowrap rounded-full px-8 py-4 text-[0.8125rem] font-bold uppercase tracking-[0.12em] transition-transform hover:-translate-y-0.5 ${
    dark ? "bg-brass-soft text-pine-800" : "bg-clay text-paper"
  }`;
  const quiet = `inline-flex items-center gap-2 whitespace-nowrap text-[0.8125rem] font-bold uppercase tracking-[0.1em] underline decoration-2 underline-offset-[6px] transition-colors ${
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

/* "Proof: ..." is a named device in the deck. Split it out so a card can pin
   it to its own bottom edge, which lines the proofs up across a row instead of
   letting them float wherever the body copy happens to end. */
const isProof = (t: string) => /^proof:\s*/i.test(t);
const proofText = (t: string) => t.replace(/^proof:\s*/i, "");

function ProofMark({ text, dark = false }: { text: string; dark?: boolean }) {
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
        Proof
      </span>
      <span>{text}</span>
    </p>
  );
}

function Body({ paras, dark = false }: { paras: string[]; dark?: boolean }) {
  const lede = dark ? "text-sage-soft" : "text-pine/85";
  const rest = dark ? "text-sage-soft/75" : "text-mist";
  return (
    <>
      {paras.map((t, i) => {
        if (isProof(t)) {
          return (
            <div key={i} className="mt-5">
              <ProofMark text={proofText(t)} dark={dark} />
            </div>
          );
        }
        return (
          <p
            key={i}
            className={`max-w-[60ch] leading-relaxed [text-wrap:pretty] ${i === 0 ? "" : "mt-4"} ${
              i === 0 ? `${lede} text-[1.0625rem]` : `${rest} text-base`
            }`}
          >
            {t}
          </p>
        );
      })}
    </>
  );
}

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
  pull?: { line: string; label: string; alt?: string };
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
            <Body paras={block.p} />
          </div>

          {c && pull && (
            <div className="mt-7 border-t hair pt-6">
              <p className="max-w-[52ch] font-display text-[1.15rem] leading-snug text-pine">
                {pull.line}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-2 text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-clay underline decoration-brass decoration-2 underline-offset-[6px] transition-colors hover:text-pine hover:decoration-pine"
                >
                  {c.label}
                  <span aria-hidden>&rarr;</span>
                </Link>
                {alt && (
                  <Link
                    href={alt.href}
                    className="text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-mist transition-colors hover:text-clay"
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

export default function CopyPage({ page }: { page: PageCopy }) {
  const primary = cta(page.primary);
  const secondary = cta(page.secondary);

  const blocks: Block[] = page.blocks;
  const lead = blocks[0];
  const middle = blocks.slice(1);
  const close = middle.length > 1 ? middle[middle.length - 1] : undefined;
  const chapters = close ? middle.slice(0, -1) : middle;


  /* Density ladder, and a layout-family count that passes pre-flight.

     Two image+text splits, not three: three consecutive splits is the zigzag
     alternation cap. The block after them becomes a full-width statement,
     which both breaks the pattern and gives the page the single statement
     moment that Gordonstoun, Great Walstead and SAS all use. The remainder
     runs as tinted cards. That is five distinct layout families on the page:
     opening, split, statement, cards, close. */
  const FEATURES = 1;
  const features = chapters.slice(0, FEATURES);
  const statement = chapters[FEATURES];
  const cards = chapters.slice(FEATURES + 1);

  // One photograph for the opening, one per feature block.
  const shots = imagesFor(page.slug, features.length + 1, [page.image2 ?? ""]);
  const leadShot = shots[0];
  const featureShots = shots.slice(1);
  const slotOrder: PullSlot[] = ["lead", "grid", "split", "list"];
  const pulls = slotOrder.flatMap((s) => (page.pulls ?? []).filter((p) => p.slot === s));

  /* The first pull becomes an invitation panel in the statement band. It fills
     the right of that band with an interactive element rather than filler copy
     or a second photograph, and it lands where the argument has just peaked.
     Any remaining pulls attach to chapters. */
  const statementPull = pulls[0];
  const rest = pulls.slice(1);
  const pullFor = new Map<number, (typeof pulls)[number]>();
  rest.forEach((p, i, arr) => {
    const at = Math.min(
      chapters.length - 1,
      Math.floor(((i + 1) * chapters.length) / (arr.length + 1)),
    );
    if (!pullFor.has(at)) pullFor.set(at, p);
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
        {/* Opening statement and the prescribed CTA pair */}
        {lead && (
          /* A single measured column. A two-column split here stranded the
             headline on the left with a large void beneath it while the body
             sat far right and low. The reference sites open a page with one
             clear statement and the supporting copy directly under it. */
          /* The headline runs wide and the supporting copy sits beneath it in
             two columns. A single narrow column left the right half of the
             container empty on desktop, which is where the dead space came
             from; splitting the prose also halves the column height. */
          <section className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:px-8 sm:pt-24">
            {/* Opening: words left, photograph right.

                Earlier attempts kept this text-only and tried to fill the right
                with a second prose column (unbalanced, left a hole) and then
                with the buttons (a lone element floating mid-right). Both read
                as broken, and text alone on a tinted ground read as
                unfinished. A photograph is what the reference sites put here.
                This counts as one of the two permitted image splits, so the
                feature run below is reduced to one. */}
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

        {/* Feature chapters: photograph and words together, alternating sides.
            Capped at three. Every reference site checked (Overlake, SAS China,
            Great Walstead, GD Goenka, Korowa, Gordonstoun) runs a small number
            of large image blocks and then drops to compact cards. Pairing an
            image with every block, as an earlier version did, buries the page
            in photography. */}
        <section className="mx-auto max-w-7xl space-y-20 px-6 py-20 sm:space-y-24 sm:px-8 sm:py-24">
          {features.map((s, i) => (
            <Chapter
              key={stripNum(s.h)}
              block={s}
              image={featureShots[i]}
              flip={i % 2 === 1}
              pull={pullFor.get(i)}
            />
          ))}
        </section>

        {/* Statement. Breaks the split pattern, and gives the page the single
            held moment the reference sites all use. */}
        {statement && (
          <section className="tone-3">
            <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
              <div
                className={
                  statementPull
                    ? "grid gap-y-12 lg:grid-cols-12 lg:gap-x-16"
                    : ""
                }
              >
                <Reveal className={statementPull ? "lg:col-span-7" : ""}>
                  <div>
                    <h2
                      className={`mt-8 font-display leading-[1.04] text-pine ${
                        statementPull
                          ? "text-[1.9rem] sm:text-[2.5rem] lg:text-[2.9rem]"
                          : "max-w-5xl text-[2.1rem] sm:text-[3rem] lg:text-[3.6rem]"
                      }`}
                    >
                      {stripNum(statement.h)}
                    </h2>
                    <div className="mt-8 max-w-3xl">
                      <Body paras={statement.p} />
                    </div>
                  </div>
                </Reveal>

                {/* Invitation. No container: a filled card sat on this band
                    like a sticker. A brass rule down the left edge and a shift
                    to italic display type sets it apart while keeping it on the
                    same surface, so it belongs to the statement it answers. */}
                {statementPull && (
                  <Reveal delay={130} className="lg:col-span-5">
                    <aside className="border-t-2 border-brass pt-8 lg:border-l-2 lg:border-t-0 lg:pl-10 lg:pt-2">
                      <p className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-brass">
                        Where this leads
                      </p>
                      <p className="mt-5 font-display text-[1.5rem] italic leading-[1.22] text-clay sm:text-[1.85rem]">
                        {statementPull.line}
                      </p>
                      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                        <Link
                          href={cta(statementPull.label).href}
                          className="inline-flex items-center justify-center rounded-full bg-clay px-7 py-4 text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-paper transition-transform hover:-translate-y-0.5"
                        >
                          {cta(statementPull.label).label}
                        </Link>
                        {statementPull.alt && (
                          <Link
                            href={cta(statementPull.alt).href}
                            className="group inline-flex items-center gap-2 text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-clay underline decoration-brass decoration-2 underline-offset-[6px] transition-colors hover:text-pine hover:decoration-pine"
                          >
                            {cta(statementPull.alt).label}
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
        )}

        {/* The remainder, at card density. No photography, so the page keeps
            moving and the feature blocks above retain their weight. */}
        {cards.length > 0 && (
          <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 sm:pb-28">
            <div className="border-t-2 border-pine/15 pt-12">
              {/* A six-column track so the last row can redistribute rather
                  than leave an orphan. Cards are normally a third of the width
                  (span 2), which keeps the measure tight enough that the copy
                  fills the card. When the count leaves one or two over, the
                  trailing cards widen to halves (span 3) and close the row. */}
              <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
                {/* No index numeral on cards. These are parallel aspects, and
                    a "06" label on a tile the reader can already count is
                    pagination for its own sake. A tinted surface carries the
                    grouping instead, which also gives the grid the background
                    variation a flat text grid was missing. */}
                {cards.map((s, i) => (
                  <Reveal
                    key={stripNum(s.h)}
                    delay={i * 60}
                    className={cardSpan(cards.length, i)}
                  >
                    {/* One surface for every card. Alternating the tint by
                        index produced a checkerboard that read as a mistake
                        rather than a decision. */}
                    {/* A brass rule along the card's top edge: structural, it
                        delineates the card, rather than a short dash floating
                        above the heading. */}
                    {/* Body grows, proof is pinned to the bottom edge, so the
                        proof lines align across the row however long the copy
                        above them runs. */}
                    <article className="group flex h-full flex-col rounded-[1.25rem] border-t-2 border-brass/35 bg-paper p-7 transition-colors hover:border-clay hover:bg-blush/60">
                      <h3 className="font-display text-[1.3rem] leading-[1.2] text-pine">
                        {stripNum(s.h)}
                      </h3>
                      <div className="mt-3 flex-1">
                        <Body paras={s.p.filter((t) => !isProof(t))} />
                      </div>
                      {s.p.filter(isProof).map((t) => (
                        <div key={t} className="mt-6">
                          <ProofMark text={proofText(t)} />
                        </div>
                      ))}
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* One closing panel, at the foot of the page where a CTA belongs. */}
      {close && (
        <section className="grain-pine lit-deep">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24">
            {/* Label first, then a rule running out from it to the edge.
                Putting the border on the container instead drew a full-width
                line with the label stranded underneath, which read as a stray
                divider rather than a heading. */}
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
                  <Body paras={close.p} dark />
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
