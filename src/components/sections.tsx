import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import LineIcon, { iconFor } from "./LineIcon";
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
      className={`text-[0.68rem] font-bold uppercase tracking-[0.24em] ${
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
      className={`group inline-flex items-center gap-2.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] transition-colors ${
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
            className={`text-[0.68rem] font-bold uppercase tracking-[0.18em] transition-colors ${
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
      {/* The supporting argument runs in two measured columns beneath the
          statement: short lines, and a compact block rather than a tall stack. */}
      <Reveal delay={120}>
        <div className="mx-auto mt-9 grid max-w-5xl gap-x-14 gap-y-5 md:grid-cols-2">
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
  n: number;
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
        <div className="grid items-center gap-y-9 lg:grid-cols-12 lg:gap-x-14">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[1/1] overflow-hidden rounded-[3px]">
              <Image src={image} alt="" fill sizes="(max-width:1024px) 100vw, 38vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={110} className="lg:col-span-7">
            <div>
              <Marker n={n} />
              <div className="mt-5">{heading}</div>
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

  /* Wide cinematic frame, the argument beneath in a narrow column with the
     numeral out in the left margin. */
  if (variant === "cinematic" && image) {
    return (
      <section className={`${PAD} py-12 sm:py-14`}>
        <Reveal>
          <div className="relative aspect-[5/2] overflow-hidden rounded-[3px]">
            <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={110}>
          <div className="mt-8 grid gap-y-5 lg:grid-cols-12 lg:gap-x-14">
            <div className="lg:col-span-4">
              <Marker n={n} />
              <div className="mt-5">{heading}</div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Paras paras={item.p} />
              {pull && <Pull {...pull} />}
            </div>
          </div>
        </Reveal>
      </section>
    );
  }

  /* Argument left, tall picture right, dropped below the headline so the two
     columns never start on the same line. */
  if (variant === "offset" && image) {
    return (
      <section className={`${PAD} py-12 sm:py-14`}>
        <div className="grid items-center gap-y-9 lg:grid-cols-12 lg:gap-x-14">
          <Reveal className="lg:col-span-6">
            <div>
              <Marker n={n} />
              <div className="mt-5">{heading}</div>
              <div className="mt-6">
                <Paras paras={item.p} />
              </div>
              {pull && <Pull {...pull} />}
            </div>
          </Reveal>
          <Reveal delay={110} className="lg:col-span-6 lg:pt-10">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3px]">
              <Image src={image} alt="" fill sizes="(max-width:1024px) 100vw, 44vw" className="object-cover" />
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
              <Marker n={n} />
              <div className="mt-5">{heading}</div>
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
  ns: [number, number];
  pull?: PullData;
}) {
  return (
    <section className="bg-blush/35">
      <div className={`${PAD} py-12 sm:py-14`}>
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.h} delay={i * 110}>
              <div className="h-full border-t border-brass/30 pt-7">
                <Marker n={ns[i]} />
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
  const [lede, ...more] = item.p;
  return (
    <section className="relative overflow-hidden bg-pine-800">
      {image && (
        <>
          <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-[0.16]" />
          <div className="absolute inset-0 bg-gradient-to-r from-pine-800 via-pine-800/90 to-pine-800/60" />
        </>
      )}
      <Ridge className="pointer-events-none absolute inset-x-0 bottom-0 h-32 w-full text-brass-soft/20" />
      <Botanical className="pointer-events-none absolute -right-6 top-0 hidden h-full w-24 text-brass-soft/15 lg:block" />
      <div className={`${PAD} relative py-20 sm:py-24`}>
        <Reveal>
          <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-6">
              <Crest className="h-10 w-9 text-brass-soft/70" />
              {eyebrow && (
                <div className="mt-6">
                  <Eyebrow gold>{eyebrow}</Eyebrow>
                </div>
              )}
              <h2 className="mt-5 font-display text-[2.1rem] leading-[1.14] text-brass-soft sm:text-[2.8rem]">
                {item.h}
              </h2>
              {lede && (
                <p className="mt-7 max-w-[54ch] text-[1.0625rem] leading-[1.8] text-sage-soft/90">
                  {lede}
                </p>
              )}
            </div>
            {more.length > 0 && (
              <div className="lg:col-span-5 lg:col-start-8 lg:pt-16">
                <Paras paras={more} dark measure="max-w-[52ch]" size="text-[1rem]" />
                {pull && <Pull {...pull} dark />}
              </div>
            )}
          </div>
        </Reveal>
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
      <div className="grid items-center gap-y-10 lg:grid-cols-2">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <div
            className={`relative aspect-[4/3] overflow-hidden lg:aspect-[16/10] ${
              flip ? "lg:rounded-l-[3px]" : "lg:rounded-r-[3px]"
            }`}
          >
            <Image src={image} alt="" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={110} className={flip ? "lg:order-1" : ""}>
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
  const cols =
    n % 3 === 0
      ? "lg:grid-cols-3"
      : n % 4 === 0
        ? "lg:grid-cols-4"
        : n === 5
          ? "lg:grid-cols-5"
          : "lg:grid-cols-2";
  return (
    <section className={`${PAD} py-12 sm:py-14`}>
      <div className={`grid gap-x-12 gap-y-12 sm:grid-cols-2 ${cols}`}>
        {items.map((it, i) => (
          <Reveal key={it.h} delay={i * 70}>
            <div className="h-full border-t border-sand pt-7">
              <LineIcon name={iconFor(it.h)} className="text-brass" size={44} />
              <h3 className="mt-5 font-display text-[1.2rem] leading-[1.2] text-clay">{it.h}</h3>
              <div className="mt-3">
                <Paras paras={it.p} size="text-[0.95rem]" gap="mt-3" measure="max-w-[38ch]" />
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
