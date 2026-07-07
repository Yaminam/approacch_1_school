import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { SectionHead, FeatureGrid, SplitFeature, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Whole Child Report, Dalhousie Public School",
  description:
    "A signature report that measures more than marks, tracking character, confidence, wellbeing, sport and service alongside academics.",
};

const dimensions = [
  { title: "Academics", body: "Progress and mastery across subjects, in plain language you can act on." },
  { title: "Character", body: "Kindness, integrity and resilience, named and noticed, not left to chance." },
  { title: "Confidence", body: "How a child speaks, leads and tries new things, term after term." },
  { title: "Wellbeing", body: "Sleep, health, friendships and mood, the foundations everything else rests on." },
  { title: "Sport & the outdoors", body: "Fitness, skill and the joy of the mountain, tracked with the same care as maths." },
  { title: "Service", body: "How a child contributes to the community around them." },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Whole Child Report"
        title="A report that measures"
        emphasis="more than marks."
        subtitle="A grade tells you how an exam went. It does not tell you who your child is becoming. The Whole Child Report does."
        image="/images/debate.jpg"
      />

      <Section tone="cream">
        <SectionHead
          eyebrow="Six dimensions"
          title="Because a child is not a percentage."
          intro="Each term, we report across the things that actually shape a life, not just the ones that fit on a mark sheet."
        />
        <FeatureGrid items={dimensions} cols={3} />
      </Section>

      <Section tone="blush">
        <SplitFeature
          image="/images/outside.jpg"
          eyebrow="For parents"
          title="A clearer picture, honestly told."
          body="You are trusting us with your child from a distance. The Whole Child Report is part of how we honour that, an honest, rounded account of how they are truly doing, so there are no surprises and plenty to celebrate."
          reverse
        />
      </Section>

      <CTA />
    </main>
  );
}
