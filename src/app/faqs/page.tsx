import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { Section } from "@/components/ui";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQs, Dalhousie Public School",
  description:
    "Answers to the questions parents ask most about curriculum, boarding, age criteria, admissions, fees and visiting.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="FAQs"
        title="The questions parents"
        emphasis="ask us most."
        subtitle="If your question is not here, message us on WhatsApp. A real person will always reply."
        image="/images/aerial.jpg"
      />

      <Section tone="cream">
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group rounded-[1.25rem] border border-sand bg-paper p-6 soft-shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl text-pine">
                  {f.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-sage-soft text-clay transition-transform group-open:rotate-45">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="7" y1="2.5" x2="7" y2="11.5" />
                      <line x1="2.5" y1="7" x2="11.5" y2="7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-mist">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </main>
  );
}
