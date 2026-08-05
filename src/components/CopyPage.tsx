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
  const solid = `inline-flex items-center justify-center rounded-full px-8 py-4 text-[0.8125rem] font-bold uppercase tracking-[0.12em] transition-transform hover:-translate-y-0.5 ${
    dark ? "bg-brass-soft text-pine-800" : "bg-clay text-paper"
  }`;
  const quiet = `inline-flex items-center gap-2 text-[0.8125rem] font-bold uppercase tracking-[0.1em] underline decoration-2 underline-offset-[6px] transition-colors ${
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

function Body({ paras, dark = false }: { paras: string[]; dark?: boolean }) {
  const lede = dark ? "text-sage-soft" : "text-pine/85";
  const rest = dark ? "text-sage-soft/75" : "text-mist";
  return (
    <>
      {paras.map((t, i) => {
        if (/^proof:\s*/i.test(t)) {
          return (
            <p
              key={i}
              className={`mt-5 flex max-w-[60ch] items-baseline gap-3 border-l-2 pl-4 text-[0.9375rem] leading-relaxed ${
                dark ? "border-brass-soft/60 text-sage-soft" : "border-brass text-pine/80"
              }`}
            >
              <span className={`shrink-0 text-[0.6875rem] font-bold uppercase tracking-[0.16em] ${dark ? "text-brass-soft" : "text-brass"}`}>
                Proof
              </span>
              <span>{t.replace(/^proof:\s*/i, "")}</span>
            </p>
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
  n,
  block,
  image,
  flip,
  numbered,
  pull,
}: {
  n: number;
  block: Block;
  image: string;
  flip: boolean;
  numbered: boolean;
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
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-brass" />
            {numbered && (
              <span className="font-display text-sm text-brass [font-variant-numeric:tabular-nums]">
                {String(n).padStart(2, "0")}
              </span>
            )}
          </div>
          <h3 className="mt-5 font-display text-[1.6rem] leading-[1.14] text-pine sm:text-[2rem]">
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

  // Sequences keep their numbering; parallel sets do not, because numbering an
  // unordered set tells the reader that safeguarding follows medical support.
  const numbered = page.kind === "sequence";

  /* Density ladder, and a layout-family count that passes pre-flight.

     Two image+text splits, not three: three consecutive splits is the zigzag
     alternation cap. The block after them becomes a full-width statement,
     which both breaks the pattern and gives the page the single statement
     moment that Gordonstoun, Great Walstead and SAS all use. The remainder
     runs as tinted cards. That is five distinct layout families on the page:
     opening, split, statement, cards, close. */
  const FEATURES = 2;
  const features = chapters.slice(0, FEATURES);
  const statement = chapters[FEATURES];
  const cards = chapters.slice(FEATURES + 1);

  // One photograph per feature block.
  const shots = imagesFor(page.slug, features.length, [page.image2 ?? ""]);
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
            <Reveal>
              <div>
                <p className="eyebrow text-clay">{page.kicker}</p>
                <h2 className="mt-6 max-w-5xl font-display text-[2.1rem] leading-[1.04] text-pine sm:text-[2.9rem] lg:text-[3.4rem]">
                  {stripNum(lead.h)}
                </h2>

                <div className="mt-9 grid gap-x-14 gap-y-5 md:grid-cols-2">
                  {lead.p.map((t, i) => (
                    <p
                      key={i}
                      className={`leading-relaxed [text-wrap:pretty] ${
                        i === 0 ? "text-[1.0625rem] text-pine/85" : "text-base text-mist"
                      }`}
                    >
                      {t}
                    </p>
                  ))}
                </div>

                <div className="mt-10">
                  <CtaPair primary={primary} secondary={secondary} />
                </div>
              </div>
            </Reveal>
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
              n={i + 1}
              block={s}
              image={shots[i]}
              flip={i % 2 === 1}
              numbered={numbered}
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
                    <span className="block h-1 w-20 bg-clay" />
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
              {/* Columns follow the card count. A fixed three-column grid left
                  an empty third column whenever a page had only two cards,
                  which is where the dead space on the right came from. */}
              <div
                className={`grid gap-x-12 gap-y-12 ${
                  cards.length === 1
                    ? "max-w-2xl"
                    : cards.length === 2
                      ? "sm:grid-cols-2"
                      : cards.length === 4
                        ? "sm:grid-cols-2"
                        : "sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {/* No index numeral on cards. These are parallel aspects, and
                    a "06" label on a tile the reader can already count is
                    pagination for its own sake. A tinted surface carries the
                    grouping instead, which also gives the grid the background
                    variation a flat text grid was missing. */}
                {cards.map((s, i) => (
                  <Reveal key={stripNum(s.h)} delay={i * 60}>
                    {/* One surface for every card. Alternating the tint by
                        index produced a checkerboard that read as a mistake
                        rather than a decision. */}
                    <article className="group h-full rounded-[1.25rem] bg-paper p-7 transition-colors hover:bg-blush/60">
                      <span className="block h-0.5 w-9 bg-brass transition-all duration-300 group-hover:w-16" />
                      <h3 className="mt-5 font-display text-[1.3rem] leading-[1.2] text-pine">
                        {stripNum(s.h)}
                      </h3>
                      <div className="mt-3">
                        <Body paras={s.p} />
                      </div>
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
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28">
            <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-16">
              <Reveal className="lg:col-span-7">
                <div>
                  <span className="eyebrow text-brass-soft">{page.closeEyebrow ?? "In closing"}</span>
                  <h2 className="mt-6 font-display text-[2rem] leading-[1.08] text-paper sm:text-[2.6rem] lg:text-[3rem]">
                    {stripNum(close.h)}
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-5">
                <div className="border-t border-paper/20 pt-8">
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
