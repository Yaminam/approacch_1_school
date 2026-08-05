import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FeeSelector from "@/components/FeeSelector";
import { Eyebrow } from "@/components/ui";
import { fees } from "@/lib/pageCopy";

export const metadata: Metadata = fees.meta;

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow={fees.nav}
        title={fees.title}
        emphasis={fees.emphasis}
        subtitle={fees.subhead}
        image={fees.image}
      />

      <FeeSelector />

      <section className="grain-pine">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <Eyebrow dark>Before you commit</Eyebrow>
              <h2 className="mt-6 max-w-2xl text-3xl leading-[1.05] text-paper sm:text-4xl lg:text-5xl">
                No hidden lines. No surprises in term two.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sage-soft">
                Ask admissions to walk you through the full year for your child&apos;s grade and
                residential model, including what is charged separately.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/admissions/enquire"
                className="rounded-full bg-clay px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-transform hover:-translate-y-0.5"
              >
                Speak to admissions
              </Link>
              <Link
                href="/admissions/book-a-visit"
                className="rounded-full border border-paper/45 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:border-brass-soft hover:text-brass-soft"
              >
                Book a visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
