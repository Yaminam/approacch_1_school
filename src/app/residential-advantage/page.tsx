import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { SectionHead, FeatureGrid, SplitFeature, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Residential Advantage, Dalhousie Public School",
  description:
    "Why boarding here changes the outcome, not just the address. More time, more independence, and a community that never sleeps.",
};

const advantages = [
  { title: "More time", body: "No commute means more hours for sport, study without rush, and simply being a child." },
  { title: "Real independence", body: "Managing a day, a room and a routine builds self-reliance a day school rarely can." },
  { title: "A community, always", body: "Friends and mentors around the clock turn a school into a second family." },
  { title: "Structure that steadies", body: "A rhythm of study, sport, meals and rest gives children a foundation they can trust." },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Residential Advantage"
        title="Boarding changes"
        emphasis="the outcome."
        subtitle="It is easy to think of boarding as simply where a child sleeps. In truth, living and learning together shapes who a child becomes, in ways a school day alone cannot."
        image="/images/outside.jpg"
      />

      <Section tone="cream">
        <SectionHead eyebrow="Why it works" title="Four quiet advantages." />
        <FeatureGrid items={advantages} cols={4} />
      </Section>

      <Section tone="blush">
        <SplitFeature
          image="/images/chd-hostel.jpg"
          eyebrow="A second family"
          title="Growing up among friends."
          body="The friendships made in a boarding house are the kind that last a lifetime. Add caring housemasters and mistresses, and a child is never alone, never unnoticed, and always part of something bigger than themselves."
          reverse
        />
      </Section>

      <CTA />
    </main>
  );
}
