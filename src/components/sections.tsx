import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import LineIcon, { iconFor } from "./LineIcon";
import { Botanical, Ridge, GoldRule, Crest } from "./Ornament";
import { cta } from "@/lib/cta";

/* The inner-page section system.

   One vocabulary, reused on every inner page: warm ivory grounds, maroon
   Fraunces headings, antique-gold rules, numerals and line icons, thin sand
   borders and a small corner radius. Pages differ by which sections they use
   and in what order, never by restyling the parts. */

export const PAD = "mx-auto max-w-7xl px-6 sm:px-8";

/* ── Shared marks ──────────────────────────────────────────────────── */

export function Eyebrow({ children, gold = false }: { children: React.ReactNode; gold?: boolean }) {
  return (
    <p
      className={`text-[0.7rem] font-bold uppercase tracking-[0.22em] ${
        gold ? "text-brass-soft" : "text-brass"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  emphasis,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  emphasis?: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <Reveal>
      <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2
          className={`font-display leading-[1.08] text-clay ${
            eyebrow ? "mt-4" : ""
          } text-[2rem] sm:text-[2.5rem]`}
        >
          {title}
          {emphasis && <span className="italic"> {emphasis}</span>}
        </h2>
        {intro && (
          <p
            className={`mt-4 text-[1rem] leading-relaxed text-pine/75 [text-wrap:pretty] ${
              center ? "mx-auto max-w-2xl" : "max-w-[60ch]"
            }`}
          >
            {intro}
          </p>
        )}
        <div className={center ? "mt-6 flex justify-center" : "mt-6"}>
          <GoldRule className="text-brass" />
        </div>
      </div>
    </Reveal>
  );
}

/* Small gold link with an arrow, the standard in-page call to action. */
export function GoldLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="group mt-4 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-clay transition-colors hover:text-brass"
    >
      {label}
      <span aria-hidden className="transition-transform group-hover:translate-x-1">&rarr;</span>
    </Link>
  );
}

/* The deck labels some lines: "Proof: ..." names the instrument a pathway is
   evidenced by, "What this part of the day builds: ..." names the outcome.
   They are not another paragraph, so they get a gold label and a rule. */
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
  size = "text-[0.9rem]",
  tone = "text-pine/75",
  gap = "mt-3",
}: {
  paras: string[];
  size?: string;
  tone?: string;
  gap?: string;
}) {
  return (
    <>
      {paras.map((t, i) => {
        const tag = tagOf(t);
        if (tag) {
          return (
            <p
              key={i}
              className={`${gap} flex items-baseline gap-2.5 border-l-2 border-brass/70 pl-3 ${size} leading-relaxed text-pine/75`}
            >
              <span className="shrink-0 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-brass">
                {tag.label}
              </span>
              <span>{tag.body}</span>
            </p>
          );
        }
        return (
          <p key={i} className={`${gap} ${size} leading-relaxed ${tone} [text-wrap:pretty]`}>
            {t}
          </p>
        );
      })}
    </>
  );
}

/* ── TYPE A: editorial introduction ────────────────────────────────── */

export function EditorialIntro({
  title,
  emphasis,
  paras,
  actions,
}: {
  title: string;
  emphasis?: string;
  paras: string[];
  actions?: React.ReactNode;
}) {
  /* The reference holds the statement and its first line of support together
     on the left, with the rest of the argument beside it. Sending every
     paragraph right leaves the left column a heading floating in space. */
  const [lede, ...rest] = paras;
  const split = paras.length > 1;
  return (
    <section className={`${PAD} py-16 sm:py-20`}>
      <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-16">
        <Reveal className="lg:col-span-5">
          <div>
            <h2 className="font-display text-[2.1rem] leading-[1.06] text-clay sm:text-[2.6rem]">
              {title}
              {emphasis && <span className="block italic text-brass">{emphasis}</span>}
            </h2>
            <GoldRule className="mt-6 text-brass" />
            {split && (
              <p className="mt-6 max-w-[46ch] text-[1rem] leading-relaxed text-pine/75 [text-wrap:pretty]">
                {lede}
              </p>
            )}
            {actions && <div className="mt-8">{actions}</div>}
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7">
          <div>
            {(split ? rest : paras).map((t, i) => (
              <p
                key={i}
                className={`max-w-[62ch] text-[1.0625rem] leading-relaxed text-pine/80 [text-wrap:pretty] ${
                  i ? "mt-5" : ""
                }`}
              >
                {t}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Choose a column count that divides the set evenly, so the last row fills
   and the dividing rules never fence off empty cells. */
function evenCols(n: number, max = 4): number {
  for (let c = Math.min(max, 5); c >= 2; c--) if (n % c === 0) return c;
  return Math.min(max, n < 5 ? 3 : 4);
}

const COLS: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

/* ── TYPE C: icon feature grid ─────────────────────────────────────── */

export type Item = { h: string; p: string[] };

export function IconGrid({ items, tone = "cream" }: { items: Item[]; tone?: "cream" | "paper" }) {
  const cols = COLS[evenCols(items.length, 5)];
  return (
    <section className={tone === "paper" ? "bg-paper" : ""}>
      <div className={`${PAD} py-14 sm:py-16`}>
        <div
          className={`grid gap-y-10 sm:grid-cols-2 sm:gap-x-8 ${cols} lg:divide-x lg:divide-sand`}
        >
          {items.map((it, i) => (
            <Reveal key={it.h} delay={i * 70}>
              <div className="h-full lg:px-6 lg:first:pl-0 lg:last:pr-0">
                <LineIcon name={iconFor(it.h)} className="text-brass" size={50} />
                <h3 className="mt-5 text-[0.76rem] font-bold uppercase leading-snug tracking-[0.14em] text-clay">
                  {it.h}
                </h3>
                <Paras paras={it.p} tone="text-pine/70" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TYPE B: numbered distinctions ─────────────────────────────────── */

export function NumberedColumns({ items }: { items: Item[] }) {
  const cols = COLS[evenCols(items.length, 4)];
  return (
    <section className={`${PAD} py-14 sm:py-16`}>
      <div className="overflow-hidden rounded-[0.65rem] border border-sand bg-paper">
        <div className={`grid sm:grid-cols-2 ${cols} divide-y divide-sand sm:divide-y-0 sm:divide-x`}>
          {items.map((it, i) => (
            <Reveal key={it.h} delay={i * 60}>
              <div className="flex h-full flex-col p-7">
                <span className="font-display text-[2rem] leading-none text-brass [font-variant-numeric:tabular-nums]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="mt-4 block h-px w-9 bg-brass/60" />
                <h3 className="mt-4 text-[0.76rem] font-bold uppercase leading-snug tracking-[0.14em] text-clay">
                  {it.h}
                </h3>
                <Paras paras={it.p} tone="text-pine/70" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TYPE D: numbered editorial cards, photograph beside the words ─── */

export function EditorialCards({
  items,
  images,
  startAt = 0,
}: {
  items: (Item & { cta?: { label: string; href: string } })[];
  images: string[];
  startAt?: number;
}) {
  return (
    <section className={`${PAD} py-14 sm:py-16`}>
      <div className="grid gap-6 lg:grid-cols-2">
        {items.map((it, i) => {
          /* An odd count leaves an orphan in a two-up grid, so the last card
             runs the full width with the photograph held to a third. */
          const wide = items.length % 2 === 1 && i === items.length - 1;
          const flip = !wide && i % 2 === 1;
          return (
            <Reveal
              key={it.h}
              delay={(i % 2) * 90}
              className={`h-full ${wide ? "lg:col-span-2" : ""}`}
            >
              <article
                className={`grid h-full overflow-hidden rounded-[0.65rem] border border-sand bg-paper ${
                  wide
                    ? "sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
                    : "sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
                }`}
              >
                <div className={`relative min-h-[210px] ${flip ? "sm:order-2" : ""}`}>
                  <Image
                    src={images[i % images.length]}
                    alt=""
                    fill
                    sizes="(max-width:1024px) 100vw, 24vw"
                    className="object-cover"
                  />
                </div>
                <div className={`flex flex-col p-6 sm:p-7 ${flip ? "sm:order-1" : ""}`}>
                  <span className="font-display text-[1.05rem] leading-none text-brass [font-variant-numeric:tabular-nums]">
                    {String(startAt + i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-[1.35rem] leading-[1.15] text-clay sm:text-[1.5rem]">
                    {it.h}
                  </h3>
                  <Paras paras={it.p} />
                  {it.cta && (
                    <div className="mt-auto pt-2">
                      <GoldLink label={it.cta.label} href={it.cta.href} />
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ── TYPE D (wide): one photograph, one argument ───────────────────── */

export function ImageEditorial({
  item,
  image,
  flip = false,
  pull,
}: {
  item: Item;
  image: string;
  flip?: boolean;
  pull?: { line: string; label: string; alt?: string };
}) {
  const c = pull ? cta(pull.label) : undefined;
  const alt = pull?.alt ? cta(pull.alt) : undefined;
  return (
    <section className={`${PAD} py-14 sm:py-16`}>
      <Reveal>
        <article className="grid items-center gap-y-8 lg:grid-cols-12 lg:gap-x-14">
          <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[0.75rem]">
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
            <h3 className="font-display text-[1.7rem] leading-[1.12] text-clay sm:text-[2.1rem]">
              {item.h}
            </h3>
            <GoldRule className="mt-5 text-brass" width={64} />
            <div className="max-w-[58ch]">
              <Paras paras={item.p} size="text-[1rem]" tone="text-pine/80" gap="mt-4" />
            </div>
            {c && pull && (
              <div className="mt-7 border-t border-sand pt-5">
                <p className="max-w-[50ch] font-display text-[1.15rem] italic leading-snug text-clay">
                  {pull.line}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-7">
                  <GoldLink label={c.label} href={c.href} />
                  {alt && (
                    <Link
                      href={alt.href}
                      className="mt-4 inline-flex items-center text-[0.7rem] font-bold uppercase tracking-[0.16em] text-mist transition-colors hover:text-clay"
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
    </section>
  );
}

/* ── TYPE E: the held statement, on deepest maroon ─────────────────── */

export function QuoteBand({ item }: { item: Item }) {
  const [first, ...more] = item.p;
  return (
    <section className="relative overflow-hidden bg-pine-800">
      <Ridge className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full text-brass-soft/20" />
      <Botanical className="pointer-events-none absolute -right-4 top-0 hidden h-full w-24 text-brass-soft/15 lg:block" />
      <div className={`${PAD} relative py-14 sm:py-16`}>
        <Reveal>
          {/* The statement holds the left; the supporting copy runs beside it
              rather than under it, so the band never ends on dead space. */}
          <div className="grid gap-y-6 lg:grid-cols-12 lg:gap-x-14">
            <div className="lg:col-span-6">
              <Crest className="h-9 w-8 text-brass-soft/70" />
              <p className="mt-5 font-display text-[1.7rem] leading-[1.18] text-brass-soft sm:text-[2.1rem]">
                {item.h}
              </p>
              {first && (
                <p className="mt-5 max-w-[52ch] text-[1rem] leading-relaxed text-sage-soft/90">
                  {first}
                </p>
              )}
            </div>
            {more.length > 0 && (
              <div className="lg:col-span-6 lg:pt-14">
                {more.map((t, i) => {
                  const tag = tagOf(t);
                  if (tag) {
                    return (
                      <p
                        key={i}
                        className={`flex max-w-[54ch] items-baseline gap-2.5 border-l-2 border-brass-soft/70 pl-3 text-[0.95rem] leading-relaxed text-sage-soft/85 ${i ? "mt-4" : ""}`}
                      >
                        <span className="shrink-0 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-brass-soft">
                          {tag.label}
                        </span>
                        <span>{tag.body}</span>
                      </p>
                    );
                  }
                  return (
                    <p
                      key={i}
                      className={`max-w-[54ch] text-[0.95rem] leading-relaxed text-sage-soft/75 ${i ? "mt-4" : ""}`}
                    >
                      {t}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── TYPE F: comparison and data ───────────────────────────────────── */

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
    <section className={`${PAD} py-14 sm:py-16`}>
      {label && <Eyebrow>{label}</Eyebrow>}
      <div className="mt-5 overflow-x-auto rounded-[0.65rem] border border-sand bg-paper">
        <table className="w-full min-w-[46rem] border-collapse text-left">
          <thead>
            <tr className="border-b border-sand bg-cream/70">
              <th className="w-[16%] px-5 py-4 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brass" />
              {columns.map((c) => (
                <th
                  key={c}
                  className="px-5 py-4 font-display text-[1.05rem] font-normal text-clay"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.dimension} className="border-b border-sand/70 last:border-0">
                <th
                  scope="row"
                  className="px-5 py-4 align-top text-[0.68rem] font-bold uppercase tracking-[0.14em] text-mist"
                >
                  {r.dimension}
                </th>
                {r.values.map((v, i) => (
                  <td key={i} className="px-5 py-4 align-top text-[0.9rem] leading-relaxed text-pine/75">
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

/* ── TYPE G: the closing call to action ────────────────────────────── */

export function ClosingCta({
  title,
  paras,
  primary,
  secondary,
  eyebrow,
}: {
  title: string;
  paras?: string[];
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-clay">
      <Ridge className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full text-brass-soft/20" />
      <Botanical className="pointer-events-none absolute -left-6 top-0 hidden h-full w-24 text-brass-soft/15 lg:block" />
      <div className={`${PAD} relative py-14 sm:py-16`}>
        <div className="grid items-center gap-y-8 lg:grid-cols-12 lg:gap-x-14">
          <Reveal className="lg:col-span-7">
            <div>
              {eyebrow && <Eyebrow gold>{eyebrow}</Eyebrow>}
              <p className="mt-4 font-display text-[1.7rem] leading-[1.2] text-paper sm:text-[2.1rem]">
                {title}
              </p>
              {paras?.map((t, i) => (
                <p key={i} className="mt-4 max-w-[58ch] text-[0.95rem] leading-relaxed text-blush/85">
                  {t}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:justify-end">
              <Link
                href={primary.href}
                className="inline-flex items-center gap-2.5 rounded-full bg-brass-soft px-7 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-pine-800 transition-transform hover:-translate-y-0.5"
              >
                {primary.label}
                <span aria-hidden>&rarr;</span>
              </Link>
              {secondary && (
                <Link
                  href={secondary.href}
                  className="group inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-brass-soft underline decoration-brass-soft/50 decoration-1 underline-offset-[7px] transition-colors hover:text-paper"
                >
                  {secondary.label}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
