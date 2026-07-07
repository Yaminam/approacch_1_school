import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { SectionHead, Section } from "@/components/ui";
import { prospectusIncludes, prospectusDocs, whatsappHref, school } from "@/lib/content";

export const metadata: Metadata = {
  title: "Prospectus, Dalhousie Public School",
  description:
    "Request the Dalhousie Public School prospectus for 2025, a complete guide to both campuses, academics, boarding, admissions and fees.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Prospectus"
        title="The whole school,"
        emphasis="in your hands."
        subtitle="Our prospectus brings both campuses together in one place, from the classroom to the mountain. Request a copy and we will send it straight to you."
        image="/images/campus-hero.jpg"
      />

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div>
              <SectionHead eyebrow="Inside the prospectus" title="Everything you need to decide." />
              <ul className="mt-10 space-y-3.5">
                {prospectusIncludes.map((it) => (
                  <li key={it} className="flex items-start gap-3.5">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                    <span className="leading-relaxed text-pine">{it}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-10 eyebrow text-clay">Also available</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {prospectusDocs.map((d) => (
                  <li key={d} className="rounded-full border border-pine/20 px-4 py-2 text-sm font-semibold text-pine">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-pine/12 bg-paper p-8 soft-shadow-sm">
              <h3 className="text-2xl text-pine">Request your copy</h3>
              <p className="mt-2 leading-relaxed text-mist">
                Tell us a little about your child and we will send the prospectus, and answer any
                questions you have.
              </p>
              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={whatsappHref("Hi! I would like to receive the Dalhousie Public School prospectus.")}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-clay px-6 py-3.5 text-center font-bold text-paper transition-transform hover:-translate-y-0.5"
                >
                  Request on WhatsApp
                </a>
                <a
                  href={`mailto:${school.email}?subject=Prospectus%20Request&body=Hi,%20please%20send%20me%20the%20prospectus.`}
                  className="rounded-full border-2 border-pine px-6 py-3 text-center font-bold text-pine transition-colors hover:border-clay hover:text-clay"
                >
                  Request by email
                </a>
                <Link
                  href="/admissions"
                  className="rounded-full border-2 border-pine px-6 py-3 text-center font-bold text-pine transition-colors hover:border-clay hover:text-clay"
                >
                  See admissions
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTA />
    </main>
  );
}
