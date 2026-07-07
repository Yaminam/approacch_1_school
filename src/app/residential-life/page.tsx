import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { SectionHead, FeatureGrid, SplitFeature, Section } from "@/components/ui";
import { boardingFormats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Residential Life, Dalhousie Public School",
  description:
    "A home away from home. House spirit, caring housemasters and mistresses, and boarding that grows confidence, independence and belonging.",
};

const houseLife = [
  { title: "A house to belong to", body: "Students are divided into houses that build teamwork, friendly rivalry and lifelong camaraderie." },
  { title: "Housemasters & mistresses", body: "Experienced adults live alongside the children, offering academic and personal mentorship." },
  { title: "Rooms that feel like home", body: "Dormitories of fifteen to twenty create a secure, vibrant place to live, learn and rest." },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Residential Life"
        title="A home away"
        emphasis="from home."
        subtitle="Boarding at Dalhousie is not where a child stays. It is where they grow up, surrounded by friends and adults who care."
        image="/images/chd-hostel.jpg"
      />

      <Section tone="cream">
        <SectionHead
          eyebrow="House spirit"
          title="Belonging is the first lesson."
          intro="House spirit runs through everything at Dalhousie. It is how a big school stays personal."
        />
        <FeatureGrid items={houseLife} cols={3} />
      </Section>

      <Section tone="blush">
        <SplitFeature
          image="/images/outside.jpg"
          eyebrow="Boarding options"
          title="Choose the level of immersion that suits your family."
          body="Not every family is ready for the same leap, so we offer three residential formats. Each one shares the full Dalhousie experience, with pastoral care at its heart."
          points={boardingFormats.map((b) => `${b.name}: ${b.body}`)}
        />
      </Section>

      <CTA />
    </main>
  );
}
