import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { SectionHead, FeatureGrid, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Parent Connect, Dalhousie Public School",
  description:
    "Distance should not mean uncertainty. Parent Connect brings the school and family into a clearer conversation about academic progress, wellbeing, confidence, responsibility and residential growth.",
};

const ways = [
  { title: "Academic progress", body: "How the child is learning and where greater focus may be required." },
  { title: "Wellbeing", body: "How the child is settling, participating and responding to everyday school life." },
  { title: "Confidence & participation", body: "How comfortably the child is communicating, contributing and engaging." },
  { title: "Responsibility & independence", body: "How the child is managing routines, commitments and increasing ownership." },
  { title: "Residential growth", body: "For boarding students, how they are adapting to house life, relationships and greater independence." },
  { title: "Clear channels", body: "Academic, residential, medical or pastoral concerns reach the people responsible for supporting the child." },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Parent Connect"
        title="Distance should not"
        emphasis="mean uncertainty."
        subtitle="Parents need more than occasional information. They need a clear understanding of how their child is learning, participating, adapting and growing."
        image="/images/campus-wide.jpg"
      />

      <Section tone="cream">
        <SectionHead
          eyebrow="Staying close"
          title="A clearer view of the child, not only the timetable."
        />
        <FeatureGrid items={ways} cols={3} />
      </Section>

      <Section tone="blush">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl text-pine sm:text-4xl">
              Not only how the child is performing, but how the child is growing.
            </h2>
            <p className="mt-5 leading-relaxed text-mist">
              Marks remain important. But parents also want to know whether their child is becoming
              more confident, taking greater responsibility, developing stronger routines,
              participating and becoming more independent, and where they still need help. The
              Whole Child approach makes those questions part of the conversation.
            </p>
            <Link
              href="/whole-child-report"
              className="mt-8 inline-block rounded-full bg-clay px-7 py-3.5 font-bold text-paper transition-transform hover:-translate-y-0.5"
            >
              Explore the Whole Child Report
            </Link>
          </Reveal>
        </div>
      </Section>

      <CTA />
    </main>
  );
}
