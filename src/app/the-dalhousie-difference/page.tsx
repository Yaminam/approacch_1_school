import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import LineIcon from "@/components/LineIcon";
import { Botanical, Ridge, GoldRule } from "@/components/Ornament";
import { theDifference } from "@/lib/pageCopy";
import {
  hero,
  philosophy,
  distinctions,
  experience,
  finalCta,
  type ExperienceCard,
} from "./difference-content";

export const metadata: Metadata = theDifference.meta;

/* The Dalhousie Difference, composed to the supplied art direction.

   Authored rather than generated: the brief specifies its own section copy,
   so this page is laid out by hand while drawing on the shared design
   language (warm ivory ground, burgundy display type, muted gold accents,
   thin sand rules, botanical line art).

   Spacing runs on an 8px system. Ordinary sections are 80 to 96px of vertical
   padding, major transitions 112 to 128. Nothing is a full viewport. */

const SHELL = "mx-auto w-full max-w-[86rem] px-6 sm:px-10";

/* ── Shared marks ──────────────────────────────────────────────────── */

function Eyebrow({ children, gold = false }: { children: React.ReactNode; gold?: boolean }) {
  return (
    <p
      className={`text-[0.75rem] font-bold uppercase leading-relaxed tracking-[0.22em] lg:text-[0.68rem] lg:tracking-[0.24em] ${
        gold ? "text-brass-soft" : "text-brass"
      }`}
    >
      {children}
    </p>
  );
}

function ArrowLink({
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
      className={`group inline-flex min-h-11 items-center gap-2.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] transition-colors lg:min-h-0 lg:text-[0.68rem] ${
        dark ? "text-brass-soft hover:text-paper" : "text-clay hover:text-brass"
      }`}
    >
      <span className="border-b border-current pb-1">{label}</span>
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
    </Link>
  );
}

function SolidCta({ label, href, dark = false }: { label: string; href: string; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] transition-transform duration-300 hover:-translate-y-0.5 ${
        dark ? "bg-brass-soft text-pine-800" : "bg-clay text-paper"
      }`}
    >
      {label}
      <span aria-hidden>&rarr;</span>
    </Link>
  );
}

/* ── 1. Hero ───────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-20 sm:pt-24">
      <Botanical className="pointer-events-none absolute -left-10 top-24 hidden h-[26rem] w-24 text-brass/15 xl:block" />

      <div className={`${SHELL} relative grid items-center gap-y-10 pb-16 pt-8 lg:grid-cols-12 lg:gap-x-12 lg:pb-24 lg:pt-12`}>
        <div className="lg:col-span-5">
          <nav className="flex items-center gap-2 text-[0.78rem] font-semibold text-mist">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center transition-colors hover:text-clay lg:min-h-0"
            >
              Home
            </Link>
            <span aria-hidden className="text-sand">
              /
            </span>
            <span className="text-clay">{hero.breadcrumb}</span>
          </nav>

          <h1 className="mt-6 max-w-[11ch] font-display text-[2.6rem] leading-[1.04] text-clay sm:text-[3.1rem] lg:text-[3.5rem]">
            {hero.title}
          </h1>

          <div className="mt-5">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </div>
          <GoldRule className="mt-4 text-brass" width={64} />

          <div className="mt-6 max-w-[44ch] space-y-3">
            {hero.body.map((t) => (
              <p key={t} className="text-[1.0625rem] leading-[1.75] text-pine/75 [text-wrap:pretty]">
                {t}
              </p>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <SolidCta label={hero.primary.label} href={hero.primary.href} />
            <ArrowLink label={hero.secondary.label} href={hero.secondary.href} />
          </div>
        </div>

        {/* Tablet and below: the photograph sits under the words. */}
        <div className="lg:hidden">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[6px]">
            <Image src={hero.image} alt="" fill priority sizes="100vw" className="object-cover" />
          </div>
        </div>
      </div>

      {/* Desktop: the photograph runs off the right edge and dissolves into the
          ivory, so it reads as part of the page rather than a banner. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] lg:block">
        <div className="relative h-full w-full">
          <Image src={hero.image} alt="" fill priority sizes="54vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/15 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-52 bg-gradient-to-r from-cream via-cream/55 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-cream via-cream/60 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cream to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ── 2. Philosophy ─────────────────────────────────────────────────── */

function Philosophy() {
  return (
    <section className="border-t border-sand bg-paper">
      <div className={`${SHELL} py-20 sm:py-24`}>
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-14">
          <Reveal className="lg:col-span-4">
            <div>
              <h2 className="font-display text-[2rem] leading-[1.14] text-clay sm:text-[2.4rem]">
                {philosophy.title}
                <span className="mt-1 block">
                  {philosophy.titleTail}{" "}
                  <span className="italic text-brass">{philosophy.emphasis}</span>
                </span>
              </h2>
              <GoldRule className="mt-7 text-brass" width={64} />
              <div className="mt-7 max-w-[40ch] space-y-2.5">
                {philosophy.body.map((t) => (
                  <p key={t} className="text-[0.98rem] leading-[1.7] text-pine/70">
                    {t}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Five columns divided by hairlines, the pillar band from the
              reference. They collapse to two and then one rather than being
              crushed below tablet. */}
          <div className="lg:col-span-8">
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:divide-x xl:divide-sand">
              {philosophy.pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 70}>
                  <div className="h-full xl:px-5 xl:first:pl-0 xl:last:pr-0">
                    <LineIcon name={p.icon} className="text-brass" size={44} />
                    <h3 className="mt-5 text-[0.72rem] font-bold uppercase leading-snug tracking-[0.14em] text-clay">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[0.88rem] leading-[1.65] text-pine/65">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 3. Seven distinctions ─────────────────────────────────────────── */

function Distinctions() {
  return (
    <section className="bg-cream">
      <div className={`${SHELL} py-20 sm:py-24`}>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>{distinctions.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-[2rem] leading-[1.14] text-clay sm:text-[2.5rem]">
              {distinctions.title}
            </h2>
            <p className="mx-auto mt-5 max-w-[56ch] text-[1rem] leading-[1.75] text-pine/70">
              {distinctions.body}
            </p>
            <div className="mt-7 flex justify-center">
              <GoldRule className="text-brass" />
            </div>
          </div>
        </Reveal>

        {/* Seven equal columns at the widest breakpoint, divided by hairlines
            rather than boxed as seven separate cards. */}
        <div className="mt-14 overflow-hidden rounded-[6px] border border-sand bg-paper">
          {/* Four across, not seven. Seven columns inside the shell gave each
              distinction about 150px, which wrapped every heading onto three
              lines and squeezed a five-point list into a ribbon. Seven items
              in four columns leaves one empty cell on the second row, which is
              a far smaller price than the cramping was. */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {distinctions.items.map((d, i) => (
              <Reveal key={d.title} delay={Math.min(i, 6) * 60}>
                <article className="group flex h-full flex-col border-b border-sand p-6 transition-colors duration-300 last:border-b-0 hover:bg-blush/40 sm:border-r sm:last:border-r-0">
                  <span className="font-display text-[1.9rem] leading-none text-brass/70 [font-variant-numeric:tabular-nums] transition-colors duration-300 group-hover:text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="mt-4 block h-px w-8 bg-brass/60" />
                  <h3 className="mt-4 text-[0.72rem] font-bold uppercase leading-snug tracking-[0.13em] text-clay">
                    {d.title}
                  </h3>
                  <ul className="mt-4 flex-1 space-y-1.5">
                    {d.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 text-[0.82rem] leading-[1.5] text-pine/70"
                      >
                        <span aria-hidden className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-brass/70" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-sand pt-4 text-[0.8rem] leading-[1.55] text-mist">
                    {d.note}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 4. Experience ─────────────────────────────────────────────────── */

/* A horizontal card: photograph one side, the argument the other. `flip`
   swaps the sides so the run alternates instead of marching. */
function ExpCard({ card, n, flip }: { card: ExperienceCard; n: number; flip: boolean }) {
  return (
    <article className="group grid h-full overflow-hidden rounded-[6px] border border-sand bg-paper sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className={`relative min-h-[220px] overflow-hidden ${flip ? "sm:order-2" : ""}`}>
        <Image
          src={card.image}
          alt=""
          fill
          sizes="(max-width:1024px) 100vw, 28vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className={`flex flex-col p-7 ${flip ? "sm:order-1" : ""}`}>
        <span className="font-display text-[1rem] leading-none text-brass [font-variant-numeric:tabular-nums]">
          {String(n).padStart(2, "0")}
        </span>
        <h3 className="mt-3 font-display text-[1.35rem] leading-[1.18] text-clay sm:text-[1.5rem]">
          {card.title}
        </h3>
        <p className="mt-3 flex-1 text-[0.92rem] leading-[1.7] text-pine/70">{card.body}</p>
        <div className="mt-6">
          <ArrowLink label={card.cta.label} href={card.cta.href} />
        </div>
      </div>
    </article>
  );
}

function Experience() {
  const [a, b, c, d, e, f, g, h] = experience;
  return (
    <section className="border-t border-sand bg-paper">
      <div className={`${SHELL} py-20 sm:py-24`}>
        <div className="grid gap-6 lg:grid-cols-2">
          {[a, b, c, d, e, f].map((card, i) => (
            <Reveal key={card.title} delay={(i % 2) * 90} className="h-full">
              <ExpCard card={card} n={i + 1} flip={i % 3 === 2} />
            </Reveal>
          ))}
        </div>

        {/* 07 breaks the two-up grid: a wide composition, text held left. */}
        <Reveal>
          <article className="group mt-6 grid overflow-hidden rounded-[6px] border border-sand bg-paper lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="font-display text-[1rem] leading-none text-brass [font-variant-numeric:tabular-nums]">
                07
              </span>
              <h3 className="mt-3 max-w-[18ch] font-display text-[1.5rem] leading-[1.16] text-clay sm:text-[1.85rem]">
                {g.title}
              </h3>
              <p className="mt-4 max-w-[46ch] text-[0.95rem] leading-[1.72] text-pine/70">{g.body}</p>
              <div className="mt-7">
                <ArrowLink label={g.cta.label} href={g.cta.href} />
              </div>
            </div>
            <div className="relative min-h-[260px] overflow-hidden lg:min-h-[340px]">
              <Image
                src={g.image}
                alt=""
                fill
                sizes="(max-width:1024px) 100vw, 52vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </article>
        </Reveal>

        {/* 08 closes the run as the mirror of 07: the photograph held left at
            a bounded height, the words right.

            It was a full-width 21/8 frame with the words beneath. At the shell
            width that renders 1296x494 — the largest element on the page by
            some margin, and a photograph at that scale stops being part of a
            composition and becomes an interruption. It is the same failure the
            inner-page composer dropped its full-bleed variant for. Mirroring
            07 also bookends the six cards between two wide compositions facing
            opposite ways. */}
        <Reveal>
          <article className="group mt-6 grid overflow-hidden rounded-[6px] border border-sand bg-paper lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
            <div className="relative min-h-[260px] overflow-hidden lg:min-h-[340px]">
              <Image
                src={h.image}
                alt=""
                fill
                sizes="(max-width:1024px) 100vw, 56vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="font-display text-[1rem] leading-none text-brass [font-variant-numeric:tabular-nums]">
                08
              </span>
              <h3 className="mt-3 max-w-[18ch] font-display text-[1.5rem] leading-[1.16] text-clay sm:text-[1.85rem]">
                {h.title}
              </h3>
              <p className="mt-4 max-w-[46ch] text-[0.95rem] leading-[1.72] text-pine/70">{h.body}</p>
              <div className="mt-7">
                <ArrowLink label={h.cta.label} href={h.cta.href} />
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

/* ── 5. Final call to action ───────────────────────────────────────── */

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-clay">
      <Ridge className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full text-brass-soft/20" />
      <Botanical className="pointer-events-none absolute -left-8 top-0 hidden h-full w-24 text-brass-soft/15 lg:block" />
      <Botanical className="pointer-events-none absolute -right-8 top-0 hidden h-full w-24 rotate-180 text-brass-soft/15 lg:block" />

      <div className={`${SHELL} relative py-20 sm:py-24`}>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[1.9rem] leading-[1.24] text-paper sm:text-[2.4rem]">
              {finalCta.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-7 flex justify-center">
              <GoldRule className="text-brass-soft" />
            </div>
            <p className="mx-auto mt-6 max-w-[52ch] text-[1rem] leading-[1.75] text-blush/85">
              {finalCta.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
              <SolidCta label={finalCta.primary.label} href={finalCta.primary.href} dark />
              <ArrowLink label={finalCta.secondary.label} href={finalCta.secondary.href} dark />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="bg-cream">
      <Hero />
      <Philosophy />
      <Distinctions />
      <Experience />
      <FinalCta />
    </main>
  );
}
