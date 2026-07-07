import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { SectionHead, FeatureGrid, SplitFeature, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Confidence Code, Dalhousie Public School",
  description:
    "Our signature character and leadership programme, building voice, courage and self-belief through speaking, leading and the mountain.",
};

const parts = [
  { title: "Find your voice", body: "Debate, extempore and declamation turn shy children into clear, confident speakers." },
  { title: "Lead something", body: "Real responsibility, from house duties to student leadership, builds quiet authority." },
  { title: "Take the summit", body: "Mountain expeditions test resilience and prove to a child what they are capable of." },
  { title: "Take the stage", body: "Theatre and music give every child a moment to be seen, and to be brave." },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Confidence Code"
        title="Courage is a skill,"
        emphasis="so we teach it."
        subtitle="Confidence is not something a child either has or lacks. It is built, deliberately, through the right challenges and the right support. That is the Confidence Code."
        image="/images/theatre.jpg"
      />

      <Section tone="cream">
        <SectionHead
          eyebrow="How confidence is built"
          title="Four ways we grow self-belief."
        />
        <FeatureGrid items={parts} cols={4} />
      </Section>

      <Section tone="blush">
        <SplitFeature
          image="/images/trekking.jpg"
          eyebrow="The mountain teaches"
          title="Nothing builds belief like doing the hard thing."
          body="A child who has trekked through thin air, spoken to a hall, or led their house learns something a classroom cannot teach. They learn that they can. That quiet certainty is the most valuable thing we send them home with."
        />
      </Section>

      <CTA />
    </main>
  );
}
