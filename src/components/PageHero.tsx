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
    <section className="relative overflow-hidden bg-cream pt-20 sm:pt-24">
      {/* Botanical drawing down the left margin, well outside the text column. */}
      <Botanical className="pointer-events-none absolute -left-8 top-20 hidden h-[24rem] w-24 text-brass/15 xl:block" />

      <div className="relative mx-auto grid max-w-[78rem] items-center gap-y-9 px-6 pb-14 pt-8 sm:px-10 sm:pb-16 lg:grid-cols-12 lg:gap-x-10 lg:pb-[4.5rem] lg:pt-10">
        <div className="lg:col-span-5">
          <nav className="flex items-center gap-2 text-[0.8rem] font-semibold text-mist">
            <Link href="/" className="inline-flex min-h-11 items-center transition-colors hover:text-clay lg:min-h-0">Home</Link>
            <span aria-hidden className="text-sand">/</span>
            <span className="text-clay">{eyebrow}</span>
          </nav>

          {/* A wider measure and a smaller top size: at 3.2rem in a 16ch column
              the title ran to five lines and split "better-prepared" across
              two of them. */}
          <h1 className="mt-5 max-w-[20ch] font-display text-[2.05rem] leading-[1.08] text-clay sm:text-[2.4rem] lg:text-[2.75rem]">
            {title}
            {emphasis && <span className="block italic text-clay/90">{emphasis}</span>}
          </h1>

          {kicker && (
            <p className="mt-4 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-brass lg:text-[0.68rem] lg:tracking-[0.24em]">
              {kicker}
            </p>
          )}

          <GoldRule className="mt-4 text-brass" width={64} />

          {subtitle && (
            <p className="mt-6 max-w-[46ch] text-[1rem] leading-[1.7] text-pine/75 [text-wrap:pretty]">
              {subtitle}
            </p>
          )}

          {(primary || secondary) && (
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              {primary && (
                <Link
                  href={primary.href}
                  className="inline-flex items-center gap-2.5 rounded-full bg-clay px-7 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-paper transition-transform hover:-translate-y-0.5"
                >
                  {primary.label}
                  <span aria-hidden>&rarr;</span>
                </Link>
              )}
              {secondary && (
                <Link
                  href={secondary.href}
                  className="group inline-flex min-h-11 lg:min-h-0 items-center gap-2.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-clay transition-colors hover:text-brass lg:text-[0.68rem]"
                >
                  <span className="border-b border-current pb-1">{secondary.label}</span>
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Mobile and tablet: the photograph sits under the words. */}
        <div className="lg:hidden">
          {/* 3px, not 1.25rem. The heritage system sets photographs almost
              square-cornered everywhere else; this was the one frame left on
              the old 20px radius, and being in the shared hero it was the
              first thing seen on a phone on every page of the site. */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[3px]">
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
