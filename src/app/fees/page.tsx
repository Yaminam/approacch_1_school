import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { Section, SectionHead } from "@/components/ui";
import { feeTables, feeNote, concessions, whatsappHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fees, Dalhousie Public School",
  description:
    "Indicative annual fees for the Dalhousie and New Chandigarh campuses, boarding and day options, plus concessions for armed-forces and sibling families.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Fees"
        title="Clear figures,"
        emphasis="no surprises."
        subtitle="An honest look at what a Dalhousie education costs, per campus and grade. Uniforms, equipment and transport are billed separately. Our admissions office will confirm the exact figures for your child."
        image="/images/campus-wide.jpg"
      />

      <Section tone="cream">
        <SectionHead eyebrow="2025-26" title="Indicative annual fees." />

        <div className="mt-11 space-y-8">
          {feeTables.map((t) => (
            <Reveal key={`${t.campus}-${t.kind}`}>
              <div className="overflow-hidden rounded-2xl border border-pine/12 bg-paper soft-shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b hair px-6 py-5">
                  <h3 className="text-2xl text-pine">{t.campus}</h3>
                  <span className="eyebrow text-clay">{t.kind}</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[420px] text-left">
                    <thead>
                      <tr className="text-[0.72rem] uppercase tracking-[0.12em] text-mist">
                        <th className="px-6 py-3 font-bold">Grade</th>
                        <th className="px-6 py-3 font-bold">Tuition (₹ / year)</th>
                        <th className="px-6 py-3 font-bold">Boarding (₹ / year)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {t.rows.map((r) => (
                        <tr key={r.grade} className="border-t hair">
                          <td className="px-6 py-4 font-semibold text-pine">{r.grade}</td>
                          <td className="px-6 py-4 text-pine/80">₹ {r.tuition}</td>
                          <td className="px-6 py-4 text-pine/80">₹ {r.boarding}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-mist">{feeNote}</p>
      </Section>

      <Section tone="paper">
        <SectionHead
          eyebrow="Concessions"
          title="A little support for families."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {concessions.map((c, i) => (
            <Reveal key={c.label} delay={i * 90}>
              <div className="h-full rounded-2xl border border-pine/12 bg-cream p-6">
                <h3 className="text-xl text-pine">{c.label}</h3>
                <p className="mt-2 leading-relaxed text-mist">{c.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl border border-pine/12 bg-cream p-6 sm:p-8">
            <p className="flex-1 text-lg leading-relaxed text-pine">
              Want a precise, itemised fee sheet for your child&apos;s grade and boarding option?
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappHref("Hi! Could you share the detailed fee structure for my child?")}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-clay px-6 py-3 text-sm font-bold text-paper transition-transform hover:-translate-y-0.5"
              >
                Ask on WhatsApp
              </a>
              <Link
                href="/admissions"
                className="rounded-full border border-pine/25 px-6 py-3 text-sm font-bold text-pine transition-colors hover:border-clay hover:text-clay"
              >
                Admissions
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTA />
    </main>
  );
}
