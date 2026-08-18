import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FeeSelector from "@/components/FeeSelector";
import { PAD, Eyebrow, PrimaryCta, GoldLink } from "@/components/sections";
import { Ridge, Botanical } from "@/components/Ornament";
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

      <section className="relative overflow-hidden bg-pine-800">
        <Ridge className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-brass-soft/20" />
        <Botanical className="pointer-events-none absolute -left-6 top-0 hidden h-full w-20 text-brass-soft/12 lg:block" />
        <div className={`${PAD} relative py-16 sm:py-20`}>
          <div className="grid gap-y-10 lg:grid-cols-12 lg:items-end lg:gap-x-14">
            <div className="lg:col-span-7">
              <Eyebrow gold>Before you commit</Eyebrow>
              <h2 className="mt-5 max-w-[24ch] font-display text-[1.9rem] leading-[1.12] text-brass-soft sm:text-[2.4rem]">
                No hidden lines. No surprises in term two.
              </h2>
              <p className="mt-5 max-w-[54ch] text-[1.0625rem] leading-[1.75] text-sage-soft/85 [text-wrap:pretty]">
                Ask admissions to walk you through the full year for your child&apos;s grade and
                residential model, including what is charged separately.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:col-span-5 lg:justify-end">
              <PrimaryCta label="Speak to admissions" href="/admissions/enquire" dark />
              <GoldLink label="Book a visit" href="/admissions/book-a-visit" dark />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
