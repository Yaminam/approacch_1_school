import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CampusChooser from "@/components/CampusChooser";
import { PAD, Eyebrow, PrimaryCta, GoldLink } from "@/components/sections";
import { Ridge, Botanical } from "@/components/Ornament";
import { findYourCampus } from "@/lib/pageCopy";

export const metadata: Metadata = findYourCampus.meta;

/* Rebuilt onto the heritage editorial system: display face for the headings,
   pine/75 for the prose in place of the old mist grey, hairlines on the sand
   rule, and the shared CTA components rather than three separately hand-rolled
   pill styles. The quiz itself is CampusChooser, which the home page also
   renders, so it is left as it is. */

const p = findYourCampus;
const how = p.blocks[0];
const questions = p.blocks.filter((b) => b.h.startsWith("Question"));
const closing = p.blocks[p.blocks.length - 1];

export default function Page() {
  return (
    <main className="bg-cream">
      <PageHero
        eyebrow={p.nav}
        title={p.title}
        emphasis={p.emphasis}
        subtitle={p.subhead}
        image={p.image}
      />

      {/* How the guide works */}
      <section className={`${PAD} py-16 sm:py-20`}>
        <div className="grid gap-x-14 gap-y-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Sticky on desktop so the explanation stays with the questions as
              they scroll, rather than leaving the column empty below it. The
              callout that used to sit here repeated the paragraph's own closing
              sentence word for word, so it has gone. */}
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <Eyebrow>{p.kicker}</Eyebrow>
              <h2 className="mt-5 max-w-[20ch] font-display text-[1.85rem] leading-[1.14] text-clay sm:text-[2.35rem]">
                {how.h}
              </h2>
              {how.p.map((t, i) => (
                <p
                  key={i}
                  className="mt-5 max-w-[52ch] text-[1.0625rem] leading-[1.75] text-pine/75 [text-wrap:pretty]"
                >
                  {t}
                </p>
              ))}
              <div className="mt-8">
                <PrimaryCta label="Start the campus finder" href="#finder" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <ol>
              {questions.map((q, i) => (
                <li key={q.h} className="grid gap-x-6 border-t border-sand py-6 sm:grid-cols-[3rem_1fr]">
                  <span
                    aria-hidden
                    className="font-display text-[1.5rem] leading-none text-brass/50 [font-variant-numeric:tabular-nums]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-2 sm:mt-0">
                    <h3 className="font-display text-[1.2rem] leading-[1.25] text-clay">
                      {q.h.replace(/^Question \d+: /, "")}
                    </h3>
                    {q.p.map((t, j) => (
                      <p key={j} className="mt-2.5 max-w-[58ch] text-[1rem] leading-[1.7] text-pine/75">
                        {t}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* The tool itself */}
      <div id="finder" className="scroll-mt-24">
        <CampusChooser />
      </div>

      {/* Reassurance and next step */}
      <section className="relative overflow-hidden bg-pine-800">
        <Ridge className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-brass-soft/20" />
        <Botanical className="pointer-events-none absolute -left-6 top-0 hidden h-full w-20 text-brass-soft/12 lg:block" />
        <div className={`${PAD} relative py-16 sm:py-20`}>
          <div className="grid gap-y-10 lg:grid-cols-12 lg:items-end lg:gap-x-14">
            <Reveal className="lg:col-span-7">
              <div>
                <Eyebrow gold>{p.closeEyebrow}</Eyebrow>
                <h2 className="mt-5 max-w-[24ch] font-display text-[1.9rem] leading-[1.12] text-brass-soft sm:text-[2.4rem]">
                  {closing.h}
                </h2>
                {closing.p.map((t, i) => (
                  <p
                    key={i}
                    className="mt-5 max-w-[54ch] text-[1.0625rem] leading-[1.75] text-sage-soft/85 [text-wrap:pretty]"
                  >
                    {t}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:justify-end">
                <PrimaryCta label="Book a visit" href="/admissions/book-a-visit" dark />
                <GoldLink label="Compare campuses" href="/campuses/compare" dark />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
