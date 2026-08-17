import Image from "next/image";
import Link from "next/link";
import { Botanical, GoldRule } from "./Ornament";
import type { Cta } from "@/lib/cta";

/* The inner-page hero.

   Warm ivory panel on the left carrying the breadcrumb, title, gold kicker and
   the calls to action; the photograph runs off the right edge and is dissolved
   into the ivory with a horizontal gradient, so it reads as part of the page
   rather than a rectangular banner dropped on top of it.

   The height is substantial but deliberately not full-screen: an inner page
   has to start delivering content above the fold. */
export default function PageHero({
  eyebrow,
  title,
  emphasis,
  subtitle,
  image,
  kicker,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: string;
  emphasis?: string;
  subtitle?: string;
  image: string;
  kicker?: string;
  primary?: Cta;
  secondary?: Cta;
}) {
  return (
    <section className="relative overflow-hidden bg-cream pt-24 sm:pt-28">
      {/* Botanical drawing down the left margin, well outside the text column. */}
      <Botanical className="pointer-events-none absolute -left-6 top-24 hidden h-[26rem] w-28 text-brass/20 xl:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-y-10 px-6 pb-14 pt-10 sm:px-8 sm:pb-16 lg:grid-cols-12 lg:gap-x-10 lg:pb-20 lg:pt-14">
        <div className="lg:col-span-5">
          <nav className="flex items-center gap-2 text-[0.8rem] font-semibold text-mist">
            <Link href="/" className="transition-colors hover:text-clay">Home</Link>
            <span aria-hidden className="text-sand">/</span>
            <span className="text-clay">{eyebrow}</span>
          </nav>

          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.02] text-clay sm:text-[3.2rem] lg:text-[3.6rem]">
            {title}
            {emphasis && <span className="block italic text-clay/90">{emphasis}</span>}
          </h1>

          {kicker && (
            <p className="mt-5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-brass">
              {kicker}
            </p>
          )}

          <GoldRule className="mt-5 text-brass" />

          {subtitle && (
            <p className="mt-6 max-w-[46ch] text-[1.0625rem] leading-relaxed text-pine/80 [text-wrap:pretty]">
              {subtitle}
            </p>
          )}

          {(primary || secondary) && (
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              {primary && (
                <Link
                  href={primary.href}
                  className="inline-flex items-center gap-2.5 rounded-full bg-clay px-7 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-paper transition-transform hover:-translate-y-0.5"
                >
                  {primary.label}
                  <span aria-hidden>&rarr;</span>
                </Link>
              )}
              {secondary && (
                <Link
                  href={secondary.href}
                  className="group inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-clay underline decoration-brass decoration-1 underline-offset-[7px] transition-colors hover:text-pine"
                >
                  {secondary.label}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Mobile and tablet: the photograph sits under the words. */}
        <div className="lg:hidden">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.25rem]">
            <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
          </div>
        </div>
      </div>

      {/* Desktop: the photograph runs off the right edge and dissolves into the
          ivory. Two stops, not one, or the seam shows as a hard vertical line. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[56%] lg:block">
        <div className="relative h-full w-full">
          <Image src={image} alt="" fill priority sizes="56vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/25 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-cream via-cream/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}
