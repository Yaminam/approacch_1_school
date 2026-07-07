import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { SectionHead, FeatureGrid, Section, Eyebrow } from "@/components/ui";
import { differences, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Dalhousie Difference, Dalhousie Public School",
  description:
    "For over half a century, Dalhousie has taught in three places at once, the classroom, the mountain and the house.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="The Dalhousie Difference"
        title="We teach in three places"
        emphasis="at once."
        subtitle="For over half a century we have refined one belief: a child becomes complete when the classroom, the mountain and the house all do the teaching."
        image="/images/aerial.jpg"
      />

      <Section tone="cream">
        <SectionHead
          eyebrow="Three teachers"
          title="The classroom is only the beginning."
        />
        <FeatureGrid items={differences.map((d) => ({ title: d.title, body: d.body }))} cols={3} />
      </Section>

      <Section tone="blush">
        <div className="max-w-3xl">
          <Eyebrow>Our learners are</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.02] text-pine sm:text-5xl">
            We know exactly the kind of person we hope to grow.
          </h2>
        </div>
        <div className="mt-12 flex flex-wrap gap-2.5">
          {values.map((v, i) => (
            <Reveal key={v} delay={i * 35}>
              <span className="inline-block rounded-full border border-pine/20 px-5 py-2.5 font-semibold text-pine">
                {v}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </main>
  );
}
