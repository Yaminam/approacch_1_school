import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import LineIcon, { iconFor, type IconName } from "./LineIcon";
import { Botanical, Ridge, GoldRule, Crest } from "./Ornament";
import { cta } from "@/lib/cta";

/* The inner-page editorial system.

   This is art direction, not a component kit. A page is a visual story:
   typography, image, space, text, a dark movement, a statement, the ask.
   Nothing in the narrative flow renders as a "card", because a run of
   identical bordered tiles is what made the page read as a template.

   Rules the whole system obeys:

   - Warm ivory ground, burgundy type, muted gold accents, warm-grey second.
   - Images sit almost square-cornered and vary in proportion: cinematic wide,
     tall editorial portrait, asymmetric crop. A picture is part of the
     composition, never a rounded rectangle floating in a container.
   - Numerals are editorial markers, set large and quiet beside the heading,
     not labels stamped on a tile.
   - Prose is held near a 60-character measure, so the eye never traverses the
     full width of a 1440 screen.
   - Vertical rhythm is 80 to 120px for ordinary sections, 120 to 160 for a
     major transition. No section is a full viewport. */

export const PAD = "mx-auto max-w-[78rem] px-6 sm:px-10";

/* ── Shared marks ──────────────────────────────────────────────────── */

export function Eyebrow({ children, gold = false }: { children: React.ReactNode; gold?: boolean }) {
  return (
    <p
      /* 10.88px was below comfortable reading on a phone. */
      className={`text-[0.75rem] font-bold uppercase tracking-[0.22em] lg:text-[0.68rem] lg:tracking-[0.24em] ${
        gold ? "text-brass-soft" : "text-brass"
      }`}
    >
      {children}
    </p>
  );
}

/* A numeral as an editorial marker: large, quiet, beside the heading. */
function Marker({ n, dark = false }: { n: number; dark?: boolean }) {
  return (
    <span
      aria-hidden
      className={`block font-display text-[2.6rem] leading-none [font-variant-numeric:tabular-nums] sm:text-[3.1rem] ${
        dark ? "text-brass-soft/45" : "text-brass/40"
      }`}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}

const TAGS: { re: RegExp; label: string }[] = [
  { re: /^proof:\s*/i, label: "Proof" },
  { re: /^what this part of the day builds:\s*/i, label: "Builds" },
];

function tagOf(t: string) {
  for (const g of TAGS) if (g.re.test(t)) return { label: g.label, body: t.replace(g.re, "") };
  return null;
}

export function Paras({
  paras,
  size = "text-[1.0625rem]",
  dark = false,
  gap = "mt-5",
  measure = "max-w-[60ch]",
}: {
  paras: string[];
  size?: string;
  dark?: boolean;
  gap?: string;
  measure?: string;
}) {
  const tone = dark ? "text-sage-soft/85" : "text-pine/75";
  return (
    <>
      {paras.map((t, i) => {
        const tag = tagOf(t);
        if (tag) {
          return (
            /* The tag sits under the argument, inside its column. It must hold
               one line: wrapped onto two it read as a ragged afterthought.
               The prose measure is dropped so it can use the full width of the
               column, and it is set a step below the body — it is a summary of
               the section, not another sentence of it — which is what buys the
               longest of them (63 characters) its single line in the narrowest
               column the composer uses. */
            <p
              key={i}
              className={`${i ? gap : ""} flex items-baseline gap-x-3 border-l pl-4 text-[0.875rem] leading-[1.6] ${
                dark ? "border-brass-soft/60 text-sage-soft/85" : "border-brass/60 text-pine/75"
              }`}
            >
              <span
                className={`shrink-0 text-[0.6rem] font-bold uppercase tracking-[0.16em] ${
                  dark ? "text-brass-soft" : "text-brass"
                }`}
              >
                {tag.label}
              </span>
              <span>{tag.body}</span>
            </p>
          );
        }
        return (
          <p
            key={i}
            className={`${i ? gap : ""} ${measure} ${size} leading-[1.75] ${tone} [text-wrap:pretty]`}
          >
            {t}
          </p>
        );
      })}
    </>
  );
}

export function GoldLink({
  label,
  href,
  dark = false,
}: {
  label: string;
  href: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      /* min-h-11 on small screens: at 21px tall these were well under any
         touch-target guideline. Desktop keeps its compact rhythm. */
      className={`group inline-flex min-h-11 items-center gap-2.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] transition-colors lg:min-h-0 lg:text-[0.68rem] ${
        dark ? "text-brass-soft hover:text-paper" : "text-clay hover:text-brass"
      }`}
    >
      <span className="border-b border-current pb-1">{label}</span>
      <span aria-hidden className="transition-transform group-hover:translate-x-1">&rarr;</span>
    </Link>
  );
}

export function PrimaryCta({
  label,
  href,
  dark = false,
}: {
  label: string;
  href: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      /* min-h-11 on a phone: at 35px the filled pill sat under the touch-target
         guideline, which GoldLink beside it already clears. */
      className={`inline-flex min-h-11 items-center gap-2.5 rounded-full px-7 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] transition-transform hover:-translate-y-0.5 lg:min-h-0 ${
        dark ? "bg-brass-soft text-pine-800" : "bg-clay text-paper"
      }`}
    >
      {label}
      <span aria-hidden>&rarr;</span>
    </Link>
  );
}

/* ── The mid-page call to action ───────────────────────────────────── */

/* Four compositions, chosen by what surrounds the ask rather than by where it
   falls in a list. Nearly every page carries exactly one of these, so keying
   the design off position would have given the whole site the same block
   again, which is the repetition this replaces.

     inline    beside a photograph, under a long argument. No panel at all:
               a rule, the marker, the sentence, a link. It reads as the last
               paragraph of the section rather than an insert.
     strip     where the section carries no photograph. A full-width rule
               above and below on the ivory, acting as the transition into
               the next section.
     split     beside a photograph, under a short argument, where a CTA
               jammed into the column would look thin. It gets its own
               two-column moment with a drawn detail opposite.
     featured  only on a page that has built to a second ask. The one
               composition allowed a tinted ground and a filled button.

   Nothing here is a maroon slab. An earlier version reversed the whole block
   out in burgundy to stop it blending; it stopped blending and started
   reading as an advertisement dropped between the sections. */

export type PullVariant = "inline" | "strip" | "split" | "featured";

const MARKER = "Where this leads";

/* Three levels, so the page never shows a filled button for every ask:
   featured gets the filled burgundy, the standalone rows get an outlined
   pill, and the inline one is a link with an arrow. */
function PullActions({
  c,
  a,
  variant,
  dark,
}: {
  c: { label: string; href: string };
  a?: { label: string; href: string };
  variant: PullVariant;
  dark: boolean;
}) {
  const primary =
    variant === "featured" || variant === "inline" ? (
      <Link
        href={c.href}
        className={`group inline-flex min-h-11 max-w-full items-center gap-2.5 rounded-full px-7 py-3 text-[0.66rem] font-bold uppercase leading-tight tracking-[0.13em] transition-transform duration-300 hover:-translate-y-0.5 lg:min-h-0 ${
          dark ? "bg-brass-soft text-pine-800" : "bg-clay text-paper"
        }`}
      >
        {c.label}
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
          &rarr;
        </span>
      </Link>
    ) : (
      <Link
        href={c.href}
        className={`group inline-flex min-h-11 max-w-full items-center gap-2 rounded-full border px-5 py-2.5 text-[0.64rem] font-bold uppercase leading-tight tracking-[0.1em] transition-colors lg:min-h-0 ${
          dark
            ? "border-brass-soft/50 text-brass-soft hover:border-brass-soft hover:bg-brass-soft/10"
            : "border-clay/45 text-clay hover:border-clay hover:bg-blush/60"
        }`}
      >
        {c.label}
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
          &rarr;
        </span>
      </Link>
    );

  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
      {primary}
      {a && <GoldLink label={a.label} href={a.href} dark={dark} />}
    </div>
  );
}

function PullMarker({ dark, centred = false }: { dark: boolean; centred?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${centred ? "justify-center" : ""}`}>
      <span aria-hidden className={`h-px w-7 shrink-0 ${dark ? "bg-brass-soft/70" : "bg-brass"}`} />
      <p
        className={`text-[0.75rem] font-bold uppercase tracking-[0.22em] lg:text-[0.66rem] ${
          dark ? "text-brass-soft" : "text-brass"
        }`}
      >
        {MARKER}
      </p>
    </div>
  );
}

export function Pull({
  line,
  label,
  alt,
  variant = "inline",
  image,
  dark = false,
}: {
  line: string;
  label: string;
  alt?: string;
  variant?: PullVariant;
  /* Only the split composition carries one. */
  image?: string;
  dark?: boolean;
}) {
  const c = cta(label);
  const a = alt ? cta(alt) : undefined;

  /* A thin transition on the ivory: rules above and below, nothing filled. */
  if (variant === "strip") {
    return (
      <section className={`${PAD} py-10 sm:py-12`}>
        <Reveal>
          <div className="border-y border-brass/30 py-10 sm:py-12">
            <div className="grid gap-y-7 lg:grid-cols-12 lg:items-center lg:gap-x-14">
              <div className="lg:col-span-7">
                <PullMarker dark={false} />
                <p className="mt-4 max-w-[40ch] font-display text-[1.4rem] italic leading-[1.32] text-clay sm:text-[1.6rem]">
                  {line}
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="flex flex-wrap items-center gap-x-7 gap-y-3 lg:justify-end">
                  <PullActions c={c} a={a} variant="strip" dark={false} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    );
  }

  /* The ask as a full-width burgundy band with a photograph in it.

     Two earlier attempts at this composition failed the same way. The crest
     alone on pale blush read as a missing image, a faint outline floating in
     an empty rectangle. Putting the crest on burgundy fixed the emptiness but
     left a decorative plate sitting next to text on ivory, which still looked
     like a placeholder for a picture. So the whole band goes dark and takes a
     real photograph: the ask reads as a deliberate break in the page rather
     than something parked beside it. */
  if (variant === "split") {
    return (
      <section className="relative overflow-hidden bg-clay">
        <Ridge
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full text-brass-soft/20"
        />
        <Botanical
          aria-hidden
          className="pointer-events-none absolute -left-6 top-0 hidden h-full w-20 text-brass-soft/12 lg:block"
        />
        <div className={`${PAD} relative py-14 sm:py-16`}>
          <Reveal>
            <div className="grid items-center gap-y-9 lg:grid-cols-12 lg:gap-x-14">
              <div className={image ? "lg:col-span-7" : "lg:col-span-9"}>
                <PullMarker dark />
                <p className="mt-5 max-w-[38ch] font-display text-[1.5rem] leading-[1.26] text-paper sm:text-[1.85rem]">
                  {line}
                </p>
                <PullActions c={c} a={a} variant="split" dark />
              </div>
              {image && (
                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[3px]">
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(max-width:1024px) 100vw, 38vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  /* The one composition allowed a tinted ground and a filled button, and only
     on a page that has already asked once. */
  if (variant === "featured") {
    return (
      <section className={`${PAD} py-12 sm:py-16`}>
        <Reveal>
          <div className="relative overflow-hidden rounded-[4px] border border-brass/30 bg-blush/50 px-6 py-11 sm:px-12 sm:py-14">
            <Botanical
              aria-hidden
              className="pointer-events-none absolute -left-4 -top-6 h-[150%] w-24 text-brass/15"
            />
            <Ridge
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full text-brass/20"
            />
            <div className="relative mx-auto max-w-[44rem] text-center">
              <div className="flex justify-center">
                <LineIcon name={iconFor(line)} className="text-brass" size={46} />
              </div>
              <div className="mt-6">
                <PullMarker dark={false} centred />
              </div>
              <p className="mt-5 font-display text-[1.6rem] leading-[1.24] text-clay sm:text-[2rem]">
                {line}
              </p>
              <div className="mt-7 flex justify-center">
                <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
                  <PullActions c={c} a={a} variant="featured" dark={false} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    );
  }

  return (
    /* Inline: a light pane in the column, not a maroon block and not bare type.

       Bare type under a gold rule was tried and disappeared into the prose it
       was meant to follow. Reversing it out in burgundy was tried too and read
       as an advertisement. This is the middle: the page ground is cream, so a
       panel one step lighter than the page, on a brass hairline, separates
       without shouting. The ringed gold mark gives the eye something to catch,
       and the ask is a filled button because this variant sits in a column of
       running prose where a text link is exactly what gets missed. */
    <div
      className={`mt-9 overflow-hidden rounded-[4px] border p-6 sm:p-7 ${
        dark ? "border-brass-soft/35 bg-paper/[0.07]" : "border-brass/30 bg-paper"
      }`}
    >
      <div className="flex items-start gap-4 sm:gap-5">
        <LineIcon
          name={iconFor(line)}
          className={`shrink-0 ${dark ? "text-brass-soft/80" : "text-brass"}`}
          size={44}
        />
        <div className="min-w-0">
          <PullMarker dark={dark} />
          <p
            className={`mt-3 max-w-[34ch] font-display text-[1.2rem] leading-[1.32] sm:text-[1.34rem] ${
              dark ? "text-brass-soft" : "text-clay"
            }`}
          >
            {line}
          </p>
        </div>
      </div>
      <div className={`mt-6 border-t pt-5 ${dark ? "border-brass-soft/25" : "border-brass/25"}`}>
        <div className="-mt-6">
          <PullActions c={c} a={a} variant="inline" dark={dark} />
        </div>
      </div>
    </div>
  );
}

/* ── The opening statement ─────────────────────────────────────────── */

export function OpeningStatement({
  eyebrow,
  title,
  paras,
  lede = false,
}: {
  eyebrow?: string;
  title: string;
  paras: string[];
  /* Set only where the opening is a short standfirst introducing a run rather
     than an argument in its own right — the heritage chronology. Scoped, not
     global: every other page's opening keeps the two-column treatment. */
  lede?: boolean;
}) {
  const lens = paras.map((t) => t.length);
  const balanced =
    !lede && paras.length === 2 && Math.max(...lens) / Math.max(1, Math.min(...lens)) < 1.8;
  return (
    <section className={`${PAD} pb-14 pt-16 sm:pb-16 sm:pt-20`}>
      <Reveal>
        <div className="mx-auto max-w-4xl text-center">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="mt-6 font-display text-[2.1rem] leading-[1.12] text-clay sm:text-[2.9rem]">
            {title}
          </h2>
          <div className="mt-7 flex justify-center">
            <GoldRule className="text-brass" />
          </div>
        </div>
      </Reveal>
      {/* Two measured columns only when the paragraphs are of comparable
          length. Splitting a long paragraph against a one-line one left the
          right column almost empty and the block looked broken, so anything
          lopsided runs as a single centred measure instead. */}
      <Reveal delay={120}>
        <div
          className={
            balanced
              ? "mx-auto mt-9 grid max-w-5xl gap-x-14 gap-y-5 md:grid-cols-2"
              : lede
                ? "mx-auto mt-9 max-w-[52ch] space-y-6 text-center"
                : "mx-auto mt-9 max-w-2xl space-y-5 text-center"
          }
        >
          {/* As a standfirst it is set a size up and its lines are balanced
              rather than merely pretty. At a 75-character measure with pretty
              wrapping each paragraph ended on a short orphan line — "than half
              a century." alone under a full one — which is what made the
              heritage opening look broken. */}
          {paras.map((t, i) => (
            <p
              key={i}
              className={
                lede
                  ? "text-[1.15rem] leading-[1.72] text-pine/75 [text-wrap:balance] sm:text-[1.2rem]"
                  : "text-[1.0625rem] leading-[1.75] text-pine/75 [text-wrap:pretty]"
              }
            >
              {t}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ── The movements ─────────────────────────────────────────────────── */

export type Item = { h: string; p: string[] };
export type PullData = { line: string; label: string; alt?: string };
export type Variant = "portrait" | "cinematic" | "offset" | "plain";

/* The photograph fills its column and the TEXT sets the height.

   Earlier versions guessed an aspect ratio from the character count. Every
   guess was wrong somewhere: five lines of copy beside a 480px square, or a
   600px argument beside a 363px landscape. Letting the grid stretch the
   picture to whatever the words need means the two columns always finish on
   the same line, whatever the copy does. A floor stops a one-line section
   producing a sliver. */
const FRAME =
  "relative h-full max-h-[26rem] min-h-[16rem] w-full overflow-hidden rounded-[3px] sm:min-h-[19rem]";

/* A column that carries the ask is deeper than one that does not: the heading,
   the argument and then a panel of about 280px. Held to the ordinary 26rem
   ceiling the photograph stopped less than half way down it, which is what
   left both campus pages with one section running 790px against a 416px
   picture while its neighbours ran 390 to 570. When a movement carries an
   inline ask its picture is allowed to follow the column further. */
const FRAME_TALL =
  "relative h-full max-h-[38rem] min-h-[16rem] w-full overflow-hidden rounded-[3px] sm:min-h-[19rem]";

/* Stretched cell, centred picture. The frame matches the words up to a
   ceiling; past it the photograph holds its size and sits centred against the
   taller column, rather than growing into a 760px slab. */
const HOLD = "flex h-full items-center";

/* One movement of the story. Four compositions cycle, so no two consecutive
   sections are built the same way; each uses a different image proportion and
   a different relationship between picture and text. */
export function Movement({
  item,
  image,
  n,
  variant,
  pull,
}: {
  item: Item;
  image?: string;
  /* Undefined when the copy numbers itself ("Step 2. ..."), so the page never
     shows two competing sequences. */
  n?: number;
  variant: Variant;
  pull?: PullData;
}) {
  const heading = (
    <h2 className="font-display text-[1.85rem] leading-[1.14] text-clay sm:text-[2.35rem]">
      {item.h}
    </h2>
  );

  /* Tall editorial portrait held left, the argument set high beside it. */
  if (variant === "portrait" && image) {
    return (
      <section className={`${PAD} py-12 sm:py-14`}>
        <div className="grid items-stretch gap-y-9 lg:grid-cols-12 lg:gap-x-14">
          <Reveal className="h-full lg:col-span-5">
            <div className={HOLD}>
              <div className={pull ? FRAME_TALL : FRAME}>
                <Image src={image} alt="" fill sizes="(max-width:1024px) 100vw, 38vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={110} className="lg:col-span-7">
            <div>
              {n !== undefined && <Marker n={n} />}
              <div className={n !== undefined ? "mt-5" : ""}>{heading}</div>
              <div className="mt-6">
                <Paras paras={item.p} />
              </div>
              {pull && <Pull {...pull} />}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  /* Landscape frame held wide on the left, the argument in a narrower column
     beside it.

     This replaced a full-bleed cinematic band that put the photograph alone
     across the page with the words underneath. At that scale the picture
     stopped being part of a composition and became an interruption, and the
     page lost its rhythm every time one appeared. Every visual movement now
     pairs image with text; only the proportion and the side change. */
  if (variant === "cinematic" && image) {
    return (
      <section className={`${PAD} py-12 sm:py-14`}>
        <div className="grid items-stretch gap-y-9 lg:grid-cols-12 lg:gap-x-14">
          <Reveal className="h-full lg:col-span-7">
            <div className={HOLD}>
              <div className={pull ? FRAME_TALL : FRAME}>
                <Image src={image} alt="" fill sizes="(max-width:1024px) 100vw, 54vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={110} className="lg:col-span-5">
            <div>
              {n !== undefined && <Marker n={n} />}
              <div className={n !== undefined ? "mt-5" : ""}>{heading}</div>
              <div className="mt-6">
                <Paras paras={item.p} measure="max-w-[46ch]" />
              </div>
              {pull && <Pull {...pull} />}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  /* Argument left, tall picture right, dropped below the headline so the two
     columns never start on the same line. */
  if (variant === "offset" && image) {
    return (
      <section className={`${PAD} py-12 sm:py-14`}>
        <div className="grid items-stretch gap-y-9 lg:grid-cols-12 lg:gap-x-14">
          <Reveal className="lg:col-span-6">
            <div>
              {n !== undefined && <Marker n={n} />}
              <div className={n !== undefined ? "mt-5" : ""}>{heading}</div>
              <div className="mt-6">
                <Paras paras={item.p} />
              </div>
              {pull && <Pull {...pull} />}
            </div>
          </Reveal>
          <Reveal delay={110} className="h-full lg:col-span-6">
            <div className={HOLD}>
              <div className={pull ? FRAME_TALL : FRAME}>
                <Image src={image} alt="" fill sizes="(max-width:1024px) 100vw, 44vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  /* No photograph. A held moment on a warmer ground, giving the run of
     pictures somewhere to breathe. */
  return (
    <section className="bg-blush/40">
      <div className={`${PAD} py-12 sm:py-14`}>
        <Reveal>
          <div className="grid gap-y-6 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-5">
              {n !== undefined && <Marker n={n} />}
              <div className={n !== undefined ? "mt-5" : ""}>{heading}</div>
              <GoldRule className="mt-6 text-brass" width={64} />
            </div>
            <div className="lg:col-span-7">
              <Paras paras={item.p} />
              {pull && <Pull {...pull} />}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Two arguments sharing one band, side by side under their markers.

   This is the compression device. Twelve arguments each given a full-height
   section of their own runs to ten thousand pixels however tight the padding
   is; pairing the shorter ones lets the page keep every word while reading as
   a spread rather than an endless scroll. */
export function PairMovement({
  items,
  ns,
  pull,
}: {
  items: [Item, Item];
  ns?: [number, number];
  pull?: PullData;
}) {
  return (
    <section className="bg-blush/35">
      <div className={`${PAD} py-12 sm:py-14`}>
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.h} delay={i * 110}>
              <div className="h-full border-t border-brass/30 pt-7">
                {ns && <Marker n={ns[i]} />}
                <h2 className="mt-4 font-display text-[1.5rem] leading-[1.16] text-clay sm:text-[1.8rem]">
                  {it.h}
                </h2>
                <div className="mt-5">
                  <Paras paras={it.p} size="text-[1rem]" measure="max-w-[52ch]" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {pull && (
          <div className="mt-2">
            <Pull {...pull} />
          </div>
        )}
      </div>
    </section>
  );
}

/* ── The dark movement ─────────────────────────────────────────────── */

export function DarkMovement({
  item,
  image,
  eyebrow,
  pull,
}: {
  item: Item;
  image?: string;
  eyebrow?: string;
  pull?: PullData;
}) {
  /* The dark movement is a split, not a centred column.

     Two earlier versions both failed on a wide screen. Dividing the
     paragraphs across two columns balanced only when the halves happened to
     match. Centring everything read as a 60-character ribbon adrift in a
     1440px maroon field. Putting the photograph on one side and the whole
     argument on the other fills the width, keeps the prose ranged left where
     it is readable, and stretches the picture to the text so the two always
     finish level. */
  return (
    <section className="relative overflow-hidden bg-pine-800">
      <Ridge className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-brass-soft/20" />
      <Botanical className="pointer-events-none absolute -left-6 top-0 hidden h-full w-20 text-brass-soft/12 lg:block" />

      <div className={`${PAD} relative py-14 sm:py-16`}>
        <div className="grid items-stretch gap-y-9 lg:grid-cols-12 lg:gap-x-14">
          {image && (
            <Reveal className="h-full lg:col-span-6">
              {/* On cream a short photograph beside long prose reads as air. On
                  maroon it reads as a hole: 556x384 against a 698px column left
                  300px of empty band. The dark picture therefore runs to the
                  height of the argument, and only centres once it hits a
                  ceiling well above the usual section. */}
              <div className={HOLD}>
                <div className="relative h-full max-h-[36rem] min-h-[15rem] w-full overflow-hidden rounded-[3px] sm:min-h-[20rem]">
                  <Image src={image} alt="" fill sizes="(max-width:1024px) 100vw, 46vw" className="object-cover" />
                  <div className="absolute inset-0 bg-pine-800/20" />
                </div>
              </div>
            </Reveal>
          )}
          <Reveal delay={110} className={image ? "lg:col-span-6" : "lg:col-span-8"}>
            <div className="flex h-full flex-col justify-center">
              <Crest className="h-9 w-8 text-brass-soft/70" />
              {eyebrow && (
                <div className="mt-5">
                  <Eyebrow gold>{eyebrow}</Eyebrow>
                </div>
              )}
              <h2 className="mt-4 font-display text-[1.9rem] leading-[1.18] text-brass-soft sm:text-[2.4rem]">
                {item.h}
              </h2>
              <div className="mt-6 space-y-5">
                {item.p.map((t, i) => (
                  <Paras key={i} paras={[t]} dark size="text-[1.0625rem]" measure="max-w-[54ch]" gap="" />
                ))}
              </div>
              {pull && <Pull {...pull} dark />}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── The bleeding split ────────────────────────────────────────────── */

/* Text held in a narrow column on the ivory, the photograph running off the
   page edge. The asymmetry is the point: it stops the page reading as a
   sequence of centred two-column rows. */
export function SplitBleed({
  item,
  image,
  n,
  flip = false,
  pull,
}: {
  item: Item;
  image: string;
  n?: number;
  flip?: boolean;
  pull?: PullData;
}) {
  return (
    <section className="py-12 sm:py-14">
      <div className="grid items-stretch gap-y-10 lg:grid-cols-2">
        <Reveal className={`h-full ${flip ? "lg:order-2" : ""}`}>
          <div
            className={`relative h-full max-h-[24rem] min-h-[16rem] w-full self-center overflow-hidden ${
              flip ? "lg:rounded-l-[3px]" : "lg:rounded-r-[3px]"
            }`}
          >
            <Image src={image} alt="" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={110} className={`flex items-center ${flip ? "lg:order-1" : ""}`}>
          <div
            className={`px-6 sm:px-10 ${
              flip ? "lg:ml-auto lg:max-w-[34rem] lg:pr-14" : "lg:mr-auto lg:max-w-[34rem] lg:pl-14"
            }`}
          >
            {n !== undefined && <Marker n={n} />}
            <h2 className="mt-5 font-display text-[1.85rem] leading-[1.14] text-clay sm:text-[2.35rem]">
              {item.h}
            </h2>
            <GoldRule className="mt-6 text-brass" width={64} />
            <div className="mt-6">
              <Paras paras={item.p} measure="max-w-[52ch]" />
            </div>
            {pull && <Pull {...pull} />}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Short parallel sets ───────────────────────────────────────────── */

/* A genuine set of short items, set as an open row divided by hairlines.
   No borders and no fills: this is a list given air, not a grid of cards. */
export function IconRow({ items }: { items: Item[] }) {
  const n = items.length;

  /* Column count follows the copy as well as the count. Five columns is right
     for a two-line item; at 240 characters it produced ten-line ribbons with
     badly ragged bottoms, so anything wordy drops to three.

     A grid only reads as a set when its last row is full. Five wordy items in
     three columns left an empty cell in the bottom-right, so the Defence
     Pathway's five dimensions ended on a visible hole — and because one of
     them ran 90 characters longer than its neighbours, the two rows were
     different heights as well. Where no column count divides the run, the set
     is laid out as full-width rows instead: mark and heading held left, the
     argument beside them. That takes any count without an orphan. */
  const avg = items.reduce((a, it) => a + it.p.reduce((x, t) => x + t.length, 0), 0) / Math.max(n, 1);
  const wide = avg > 160;
  const fits = (c: number) => n % c === 0;
  /* Five across is one complete row, so the orphan rule never applied to it.
     Wordy fives were being dropped to three columns and then to stacked rows,
     which read as a vertical list of five things rather than one set laid out
     side by side. A five-item set now stays horizontal whatever its length;
     the columns get a tighter gutter and a step-smaller measure to carry it. */
  const colCount = n === 5
    ? 5
    : wide
      ? fits(3)
        ? 3
        : fits(2)
          ? 2
          : 0
      : fits(4)
        ? 4
        : fits(3)
          ? 3
          : fits(2)
            ? 2
            : 0;
  const cols = { 5: "lg:grid-cols-5", 4: "lg:grid-cols-4", 3: "lg:grid-cols-3", 2: "lg:grid-cols-2" }[
    colCount as 2 | 3 | 4 | 5
  ];

  /* No two items in one row carry the same glyph: a repeat reads as an error
     rather than a category. */
  const used = new Set<IconName>();
  const FALLBACK: IconName[] = [
    "leaf", "star", "compass", "book", "people", "chart",
    "shield", "activity", "voice", "home", "heart", "clock",
  ];
  const glyphs = items.map((it) => {
    let g = iconFor(it.h);
    if (used.has(g)) g = FALLBACK.find((f) => !used.has(f)) ?? g;
    used.add(g);
    return g;
  });

  /* No column count divides the run: full-width rows, no orphan cell. */
  if (!cols) {
    return (
      <section className={`${PAD} py-12 sm:py-14`}>
        <ol>
          {items.map((it, i) => (
            <Reveal key={it.h} delay={Math.min(i, 6) * 60}>
              {/* A fixed name column rather than a four-of-twelve span. At a
                  third of the page the short names left 250px of empty ivory
                  before the argument began, so each row read as two things
                  sitting apart instead of one horizontal line. */}
              <li className="grid gap-x-10 gap-y-3 border-t border-sand py-8 sm:py-9 lg:grid-cols-[15rem_1fr] lg:items-center">
                <div className="flex items-center gap-4">
                  <LineIcon name={glyphs[i]} className="shrink-0 text-brass" size={42} />
                  <h3 className="font-display text-[1.3rem] leading-[1.18] text-clay sm:text-[1.45rem]">
                    {it.h}
                  </h3>
                </div>
                <div>
                  <Paras paras={it.p} size="text-[1rem]" gap="mt-3" measure="max-w-[68ch]" />
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <section className={`${PAD} py-12 sm:py-14`}>
      {/* Five across is set as one ruled table rather than five separate
          tiles: a single rule over the whole row, and hairlines down the
          gutters. Five short stub rules read as five loose objects, and the
          columns cannot be made the same length when one item runs 90
          characters longer than another — dividers running the full height
          are what make that unevenness stop mattering. */}
      {/* Ruled top AND bottom. The grid already stretches every cell to the
          tallest, so closing the row turns five columns of unequal copy into
          five cells of equal extent: the eye reads the rules, not where each
          paragraph happens to stop. */}
      <div className={colCount === 5 ? "border-y border-brass/30 py-9" : ""}>
        <div
          className={`grid gap-y-10 sm:grid-cols-2 ${
            colCount === 5 ? "gap-x-8" : "gap-x-12"
          } ${cols}`}
        >
          {items.map((it, i) => (
            <Reveal key={it.h} delay={i * 70}>
              <div
                className={
                  colCount === 5
                    ? `h-full ${i ? "lg:-ml-4 lg:border-l lg:border-sand lg:pl-4" : ""}`
                    : "h-full border-t border-sand pt-7"
                }
              >
                <LineIcon
                  name={glyphs[i]}
                  className="text-brass"
                  size={colCount === 5 ? 40 : 44}
                />
                <h3
                  className={`mt-5 font-display leading-[1.2] text-clay ${
                    colCount === 5 ? "text-[1.15rem]" : "text-[1.2rem]"
                  }`}
                >
                  {it.h}
                </h3>
                <div className="mt-3">
                  <Paras
                    paras={it.p}
                    size={colCount === 5 ? "text-[0.92rem]" : "text-[0.95rem]"}
                    gap="mt-3"
                    measure={colCount === 5 ? "max-w-none" : wide ? "max-w-[46ch]" : "max-w-[38ch]"}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── The closing statement ─────────────────────────────────────────── */

export function ClosingStatement({ item }: { item: Item }) {
  return (
    <section className={`${PAD} py-20 sm:py-24`}>
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <Crest className="mx-auto h-9 w-8 text-brass/60" />
          <h2 className="mt-8 font-display text-[2rem] leading-[1.16] text-clay sm:text-[2.7rem]">
            {item.h}
          </h2>
          <div className="mt-7 flex justify-center">
            <GoldRule className="text-brass" />
          </div>
          <div className="mt-7 space-y-5">
            {item.p.map((t, i) => (
              <p key={i} className="text-[1.0625rem] leading-[1.8] text-pine/70 [text-wrap:pretty]">
                {t}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ── The closing call to action ────────────────────────────────────── */

export function ClosingCta({
  title,
  primary,
  secondary,
  eyebrow,
}: {
  title: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-clay">
      <Ridge className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-brass-soft/20" />
      <Botanical className="pointer-events-none absolute -left-6 top-0 hidden h-full w-24 text-brass-soft/15 lg:block" />
      <div className={`${PAD} relative py-16 sm:py-20`}>
        <div className="grid items-center gap-y-8 lg:grid-cols-12 lg:gap-x-14">
          <Reveal className="lg:col-span-7">
            <div>
              {eyebrow && <Eyebrow gold>{eyebrow}</Eyebrow>}
              <p className="mt-5 max-w-[26ch] font-display text-[1.7rem] leading-[1.2] text-paper sm:text-[2.1rem]">
                {title}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:justify-end">
              <PrimaryCta label={primary.label} href={primary.href} dark />
              {secondary && <GoldLink label={secondary.label} href={secondary.href} dark />}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Comparison and data ───────────────────────────────────────────── */

export function DataTable({
  columns,
  rows,
  label,
}: {
  columns: string[];
  rows: { dimension: string; values: string[] }[];
  label?: string;
}) {
  return (
    <section className={`${PAD} py-12 sm:py-14`}>
      {label && <Eyebrow>{label}</Eyebrow>}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[46rem] border-collapse text-left">
          <thead>
            <tr className="border-b border-brass/40">
              <th className="w-[16%] py-4 pr-5" />
              {columns.map((c) => (
                <th key={c} className="px-5 py-4 font-display text-[1.1rem] font-normal text-clay">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.dimension} className="border-b border-sand last:border-0">
                <th
                  scope="row"
                  className="py-5 pr-5 align-top text-[0.66rem] font-bold uppercase tracking-[0.16em] text-mist"
                >
                  {r.dimension}
                </th>
                {r.values.map((v, i) => (
                  <td key={i} className="px-5 py-5 align-top text-[0.95rem] leading-[1.7] text-pine/75">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
