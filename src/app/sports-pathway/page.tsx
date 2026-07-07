import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { SectionHead, FeatureGrid, SplitFeature, Pills, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sports Pathway, Dalhousie Public School",
  description:
    "A structured route from a child's first try to serious performance, across shooting, team sport, martial arts, equestrian and golf.",
};

const stages = [
  { title: "Discover", body: "Every child tries a wide range of sports, guided by coaches who spot a spark." },
  { title: "Develop", body: "Regular coaching and our Power Play gym build strength, skill and endurance." },
  { title: "Compete", body: "Fixtures and tournaments turn practice into performance, and nerves into composure." },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Sports Pathway"
        title="From first try"
        emphasis="to real mastery."
        subtitle="Sport at Dalhousie is a structured journey, not a scattering of games. Wherever a child starts, there is a clear route to go as far as their talent will take them."
        image="/images/basketball.jpg"
      />

      <Section tone="cream">
        <SectionHead eyebrow="The pathway" title="Three stages, one athlete." />
        <FeatureGrid items={stages} cols={3} />
        <Pills items={["Rifle & pistol shooting", "Basketball", "Football", "Martial arts", "Equestrian", "Golf", "Power Play gym"]} />
      </Section>

      <Section tone="blush">
        <SplitFeature
          image="/images/gym.jpg"
          eyebrow="A proven strength"
          title="National recognition on the range."
          body="Marksmanship is a signature Dalhousie sport. On our indoor shooting range, students train under expert guidance, and our shooters have earned national recognition. It is discipline, focus and patience, made physical."
          reverse
        />
      </Section>

      <CTA />
    </main>
  );
}
