import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { SectionHead, SplitFeature, Pills, Section } from "@/components/ui";
import { academicStages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Academics & Pathways, Dalhousie Public School",
  description:
    "A thoughtfully designed journey from Montessori toddlers to senior school, with CBSE, Cambridge and international pathways.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Academics & Pathways"
        title="A journey designed"
        emphasis="for every stage."
        subtitle="From a toddler's first discovery to a school-leaver's final exam, the academic path grows with the child, and never sacrifices depth for breadth."
        image="/images/debate.jpg"
      />

      <Section tone="cream">
        <SectionHead
          eyebrow="From toddler to school-leaver"
          title="Five stages, one continuous story."
          intro="Each stage is built on international best practice and holistic development."
        />
        <div className="mt-14 space-y-4">
          {academicStages.map((s, i) => (
            <Reveal key={s.stage} delay={i * 70}>
              <article className="grid gap-3 rounded-[1.5rem] border border-sand bg-paper p-7 soft-shadow-sm sm:grid-cols-[1fr_2fr] sm:items-center sm:gap-8">
                <div>
                  <h3 className="text-2xl text-pine">{s.stage}</h3>
                  <p className="mt-1 font-semibold text-clay">{s.ages}</p>
                </div>
                <p className="leading-relaxed text-mist">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="blush">
        <SplitFeature
          image="/images/campus-hero.jpg"
          eyebrow="Learning beyond the desk"
          title="The classroom has no walls."
          body="A Dalhousie education reaches well past the textbook. Students take mountain excursions, visit landmark Indian sites, and travel to institutions as far afield as NASA. Physical education spans taekwondo, yoga and polo, building fitness, discipline and self-belief along the way."
          points={["Mountain excursions and expeditions", "International trips, including NASA", "Taekwondo, yoga and polo"]}
          reverse
        />
      </Section>

      <Section tone="cream">
        <SectionHead
          eyebrow="Curriculum choices"
          title="The right track for the right child."
          intro="The Dalhousie campus follows CBSE. New Chandigarh adds Cambridge and international pathways, with IGCSE and the IB Diploma on the horizon."
        />
        <Pills items={["CBSE", "Cambridge Lower Secondary", "IB PYP candidate", "IGCSE (planned)", "IB Diploma (planned)"]} />
      </Section>

      <CTA />
    </main>
  );
}
