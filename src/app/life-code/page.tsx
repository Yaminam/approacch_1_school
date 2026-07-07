import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { SectionHead, FeatureGrid, SplitFeature, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Life Code, Dalhousie Public School",
  description:
    "Real-world life skills, taught deliberately, from nutrition and sustainability to wellbeing, technology and true independence.",
};

const skills = [
  { title: "Food & nutrition", body: "Through farm-to-table learning, children grow food, understand it, and eat well for life." },
  { title: "Wellbeing", body: "Mindfulness, breathing and healthy routines make looking after yourself a habit." },
  { title: "Technology", body: "Coding and digital literacy prepare children for the world they will actually inherit." },
  { title: "Sustainability", body: "Composting, water and waste, and the habits of a lighter footprint on the planet." },
  { title: "Independence", body: "Boarding teaches children to manage time, belongings and themselves." },
  { title: "Working together", body: "Empathy, teamwork and the everyday skill of getting along with others." },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Life Code"
        title="The lessons that"
        emphasis="never leave you."
        subtitle="School should teach a child how to live, not just how to pass. The Life Code is the set of real-world skills we teach on purpose, rather than leaving to chance."
        image="/images/yoga.jpg"
      />

      <Section tone="cream">
        <SectionHead eyebrow="Skills for life" title="What we teach beyond the syllabus." />
        <FeatureGrid items={skills} cols={3} />
      </Section>

      <Section tone="blush">
        <SplitFeature
          image="/images/trekking.jpg"
          eyebrow="Learning by living"
          title="The best classroom is real life."
          body="You cannot teach independence from a textbook. Living well, eating from the farm, caring for a shared space and standing on your own feet, is how a child at Dalhousie learns the skills that outlast every exam."
          reverse
        />
      </Section>

      <CTA />
    </main>
  );
}
