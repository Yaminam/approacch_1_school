import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { SectionHead, FeatureGrid, SplitFeature, Section } from "@/components/ui";
import { care } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pastoral Care / Parent Connect, Dalhousie Public School",
  description:
    "Before a single lesson is taught, every child is safe, known and cared for, and every family is kept close.",
};

const wellbeing = [
  { title: "Physical wellbeing", body: "Nutritious, farm-to-table meals, daily fitness and morning yoga, plus regular health check-ups." },
  { title: "Emotional wellbeing", body: "A dedicated counsellor team, guided mindfulness and breathing, and peer support programmes." },
  { title: "A safe environment", body: "Clear safeguarding, mentorship and conflict-resolution, so every child feels secure and included." },
  { title: "Nature therapy", body: "Gardening, nature walks and outdoor learning on a green campus that calms and restores." },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Pastoral Care / Parent Connect"
        title="Sending a child up a mountain"
        emphasis="is an act of trust."
        subtitle="We take that trust seriously. Before a single lesson is taught, every child is safe, known and cared for, and you are kept close, however far away you are."
        image="/images/outside.jpg"
      />

      <Section tone="cream">
        <SectionHead
          eyebrow="The circle of care"
          title="How we look after every child."
        />
        <FeatureGrid items={care} cols={4} />
      </Section>

      <Section tone="blush">
        <SectionHead
          eyebrow="Whole-child wellbeing"
          title="Body, mind and place, all cared for."
        />
        <FeatureGrid items={wellbeing} cols={2} />
      </Section>

      <Section tone="cream">
        <SplitFeature
          image="/images/yoga.jpg"
          eyebrow="Parent Connect"
          title="Distance should never mean silence."
          body="Calling hours and letter-writing keep families in step with their child's week. Housemasters and mistresses stay with students throughout their time here, so there is always a familiar voice on the other end, for the child and for you."
          points={["Regular calling hours", "Letter-writing programmes", "Continuity of pastoral staff"]}
        />
      </Section>

      <CTA />
    </main>
  );
}
