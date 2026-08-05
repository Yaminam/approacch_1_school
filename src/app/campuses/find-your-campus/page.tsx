import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CampusChooser from "@/components/CampusChooser";
import { Eyebrow, Section } from "@/components/ui";
import { findYourCampus } from "@/lib/pageCopy";

export const metadata: Metadata = findYourCampus.meta;

const p = findYourCampus;
const how = p.blocks[0];
const questions = p.blocks.filter((b) => b.h.startsWith("Question"));
const closing = p.blocks[p.blocks.length - 1];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow={p.nav}
        title={p.title}
        emphasis={p.emphasis}
        subtitle={p.subhead}
        image={p.image}
      />

      {/* How the guide works */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div>
              <Eyebrow>{p.kicker}</Eyebrow>
              <h2 className="mt-5 text-3xl leading-[1.05] text-pine sm:text-4xl">{how.h}</h2>
              {how.p.map((t, i) => (
                <p key={i} className="mt-5 leading-relaxed text-mist">{t}</p>
              ))}
              <p className="mt-6 rounded-2xl border border-brass/30 bg-blush/50 p-5 text-sm leading-relaxed text-pine">
                It is a guide, not an admission decision.
              </p>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div>
              <p className="eyebrow text-clay">What the six questions consider</p>
              <div className="mt-5">
                {questions.map((q, i) => (
                  <div key={q.h} className="border-t hair py-5">
                    <div className="flex gap-5">
                      <span className="font-display text-lg text-brass">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-bold text-pine">{q.h.replace(/^Question \d+: /, "")}</h3>
                        {q.p.map((t, j) => (
                          <p key={j} className="mt-1.5 text-sm leading-relaxed text-mist">{t}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* The tool itself */}
      <div id="finder" className="scroll-mt-24">
        <CampusChooser />
      </div>

      {/* Reassurance and next step */}
      <section className="grain-pine">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <Reveal>
              <div>
                <Eyebrow dark>{p.closeEyebrow}</Eyebrow>
                <h2 className="mt-6 max-w-2xl text-3xl leading-[1.05] text-paper sm:text-4xl lg:text-5xl">
                  {closing.h}
                </h2>
                {closing.p.map((t, i) => (
                  <p key={i} className="mt-5 max-w-2xl text-lg leading-relaxed text-sage-soft">{t}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href="/admissions/book-a-visit"
                  className="rounded-full bg-clay px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-transform hover:-translate-y-0.5"
                >
                  Book a visit
                </Link>
                <Link
                  href="/campuses/compare"
                  className="rounded-full border border-paper/45 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:border-brass-soft hover:text-brass-soft"
                >
                  Compare campuses
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
