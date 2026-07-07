import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { SectionHead, FeatureGrid, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Parent Connect, Dalhousie Public School",
  description:
    "You are far away, but never out of the loop. Calling hours, letters, honest updates and the Whole Child Report keep families close.",
};

const ways = [
  { title: "Calling hours", body: "Regular, protected time to hear your child's voice and how their week has really been." },
  { title: "Letters home", body: "A gentle, old-fashioned habit that keeps the bond strong across the miles." },
  { title: "Honest updates", body: "Housemasters and mistresses who stay with your child, and who tell you the truth." },
  { title: "Whole Child Report", body: "A rounded account each term of how your child is truly doing, marks and all." },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Parent Connect"
        title="Far away, but never"
        emphasis="out of the loop."
        subtitle="Trusting a school with your child from a distance is hard. Parent Connect is our promise that distance will never mean silence."
        image="/images/campus-wide.jpg"
      />

      <Section tone="cream">
        <SectionHead eyebrow="Staying close" title="How we keep you in your child's week." />
        <FeatureGrid items={ways} cols={4} />
      </Section>

      <Section tone="blush">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl text-pine sm:text-4xl">A partnership, not a drop-off.</h2>
            <p className="mt-5 leading-relaxed text-mist">
              The best outcomes come when school, parents and community pull together. We treat your involvement as essential, and we make it easy. See how the Whole Child Report keeps the picture honest and complete.
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
