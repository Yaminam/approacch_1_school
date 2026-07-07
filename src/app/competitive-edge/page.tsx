import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { SectionHead, FeatureGrid, SplitFeature, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Competitive Edge, Dalhousie Public School",
  description:
    "The proof layer, strong board results, olympiads, national recognition in shooting and genuine readiness for the universities our students aim for.",
};

const proof = [
  { title: "Board results", body: "Rigorous CBSE preparation with the structure and support to help every student perform." },
  { title: "Olympiads & contests", body: "Chances to stretch beyond the syllabus and test themselves against the best." },
  { title: "National recognition", body: "Our marksmen have earned national recognition in rifle and pistol shooting." },
  { title: "University readiness", body: "Guidance and pathways aimed at leading universities in India and abroad." },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Competitive Edge"
        title="Ambition, backed by"
        emphasis="real preparation."
        subtitle="Character matters most, but results matter too. The Competitive Edge is how we make sure a Dalhousie education opens doors in the wider world."
        image="/images/campus-hero.jpg"
      />

      <Section tone="cream">
        <SectionHead eyebrow="The proof layer" title="Where preparation meets opportunity." />
        <FeatureGrid items={proof} cols={4} />
      </Section>

      <Section tone="blush">
        <SplitFeature
          image="/images/debate.jpg"
          eyebrow="Sharper thinkers"
          title="Confidence you can hear."
          body="Debate, extempore and declamation are woven through school life, so our students learn to think on their feet and speak with conviction. It is an edge that shows up in interviews, in exams and in life."
        />
      </Section>

      <CTA />
    </main>
  );
}
