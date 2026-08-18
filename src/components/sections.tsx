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
            <p
              key={i}
              className={`${i ? gap : ""} flex ${measure} items-baseline gap-3 border-l pl-4 ${size} leading-[1.75] ${
                dark ? "border-brass-soft/60 text-sage-soft/85" : "border-brass/60 text-pine/75"
              }`}
            >
              <span
                className={`shrink-0 text-[0.6rem] font-bold uppercase tracking-[0.18em] ${
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
      className={`inline-flex items-center gap-2.5 rounded-full px-7 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] transition-transform hover:-translate-y-0.5 ${
        dark ? "bg-brass-soft text-pine-800" : "bg-clay text-paper"
      }`}
    >
      {label}
      <span aria-hidden>&rarr;</span>
    </Link>
  );
}

/* An in-flow invitation: a line of argument in italic display, then the link.
   No container, because a filled panel here reads as an advertisement. */
export function Pull({
  line,
  label,
  alt,
  dark = false,
}: {
  line: string;
  label: string;
  alt?: string;
  dark?: boolean;
}) {
  const c = cta(label);
  const a = alt ? cta(alt) : undefined;
  return (
    <div className={`mt-9 border-t pt-6 ${dark ? "border-brass-soft/25" : "border-sand"}`}>
      <p
        className={`max-w-[46ch] font-display text-[1.2rem] italic leading-snug ${
          dark ? "text-brass-soft" : "text-clay"
        }`}
      >
        {line}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
        <GoldLink label={c.label} href={c.href} dark={dark} />
        {a && (
          <Link
            href={a.href}
            className={`inline-flex min-h-11 lg:min-h-0 items-center text-[0.72rem] font-bold uppercase tracking-[0.18em] transition-colors lg:text-[0.68rem] ${
              dark ? "text-sage-soft/70 hover:text-brass-soft" : "text-mist hover:text-clay"
            }`}
          >
            {a.label}
          </Link>
        )}
      </div>
    </div>
  );
}

/* ── The opening statement ─────────────────────────────────────────── */

export function OpeningStatement({
  eyebrow,
  title,
  paras,
}: {
  eyebrow?: string;
  title: string;
  paras: string[];
}) {
  const lens = paras.map((t) => t.length);
  const balanced =
    paras.length === 2 && Math.max(...lens) / Math.max(1, Math.min(...lens)) < 1.8;
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
              : "mx-auto mt-9 max-w-2xl space-y-5 text-center"
          }
        >
          {paras.map((t, i) => (
            <p key={i} className="text-[1.0625rem] leading-[1.75] text-pine/75 [text-wrap:pretty]">
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
              <div className={FRAME}>
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
              <div className={FRAME}>
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
              <div className={FRAME}>
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
              <div className="relative h-full max-h-[24rem] min-h-[15rem] w-full self-center overflow-hidden rounded-[3px] sm:min-h-[18rem]">
                <Image src={image} alt="" fill sizes="(max-width:1024px) 100vw, 46vw" className="object-cover" />
                <div className="absolute inset-0 bg-pine-800/20" />
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
     badly ragged bottoms, so anything wordy drops to three. */
  const avg = items.reduce((a, it) => a + it.p.reduce((x, t) => x + t.length, 0), 0) / Math.max(n, 1);
  const wide = avg > 160;
  const cols =
    wide
      ? n % 3 === 0 || n === 5
        ? "lg:grid-cols-3"
        : n % 4 === 0
          ? "lg:grid-cols-4"
          : "lg:grid-cols-2"
      : n % 3 === 0
        ? "lg:grid-cols-3"
        : n % 4 === 0
          ? "lg:grid-cols-4"
          : n === 5
            ? "lg:grid-cols-5"
            : "lg:grid-cols-2";

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

  return (
    <section className={`${PAD} py-12 sm:py-14`}>
      <div className={`grid gap-x-12 gap-y-10 sm:grid-cols-2 ${cols}`}>
        {items.map((it, i) => (
          <Reveal key={it.h} delay={i * 70}>
            <div className="h-full border-t border-sand pt-7">
              <LineIcon name={glyphs[i]} className="text-brass" size={44} />
              <h3 className="mt-5 font-display text-[1.2rem] leading-[1.2] text-clay">{it.h}</h3>
              <div className="mt-3">
                <Paras
                  paras={it.p}
                  size="text-[0.95rem]"
                  gap="mt-3"
                  measure={wide ? "max-w-[46ch]" : "max-w-[38ch]"}
                />
              </div>
            </div>
          </Reveal>
        ))}
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
