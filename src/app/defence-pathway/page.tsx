import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { SectionHead, FeatureGrid, SplitFeature, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Dalhousie Defence Pathway, Dalhousie Public School",
  description:
    "A dedicated route for children who dream in uniform, rooted in a proud military heritage, the NCC, marksmanship and real leadership.",
};

const pillars = [
  { title: "NCC & drill", body: "The National Cadet Corps has been part of Dalhousie since 1990, building bearing and discipline." },
  { title: "Marksmanship", body: "Rifle and pistol shooting on our indoor range, where students have earned national recognition." },
  { title: "Physical training", body: "Daily conditioning and mountain expeditions forge endurance and grit." },
  { title: "Leadership & character", body: "Responsibility, teamwork and calm under pressure, the qualities the services look for." },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Dalhousie Defence Pathway"
        title="For the children who"
        emphasis="dream in uniform."
        subtitle="Few schools can prepare a child for the armed forces the way a school born of them can. The Dalhousie Defence Pathway turns that heritage into a real route."
        image="/images/shooting.jpg"
      />

      <Section tone="cream">
        <SplitFeature
          image="/images/gym.jpg"
          eyebrow="A heritage of service"
          title="A school shaped by soldiers."
          body="Our chairman came to Dalhousie from the 2 Para Special Forces, and Founders Days here have been graced by the Chiefs of the Army and the Air Force. That heritage is not decoration. It lives in the routine, the mentors and the standards we hold."
          points={["NCC since 1990", "Indoor shooting range", "Ex-forces mentorship"]}
        />
      </Section>

      <Section tone="blush">
        <SectionHead eyebrow="The pathway" title="How we prepare a future officer." />
        <FeatureGrid items={pillars} cols={4} />
      </Section>

      <CTA />
    </main>
  );
}
