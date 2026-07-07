import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { SectionHead, Section } from "@/components/ui";
import { policies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Policies, Dalhousie Public School",
  description:
    "The policies that shape a Dalhousie education, on language, academic integrity, inclusion and assessment.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Policies"
        title="How we hold ourselves"
        emphasis="to account."
        subtitle="Good schools are clear about their principles. These are the policies that shape teaching, learning and community life at Dalhousie."
        image="/images/campus-wide.jpg"
      />

      <Section tone="cream">
        <SectionHead eyebrow="Our policies" title="Clear principles, plainly stated." />
        <div className="mt-11 grid gap-5 sm:grid-cols-2">
          {policies.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                href={`/policies/${p.slug}`}
                className="group flex h-full flex-col border-t hair pt-6 transition-colors"
              >
                <span className="font-display text-2xl text-brass">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-2xl text-pine">{p.title}</h3>
                <p className="mt-2.5 flex-1 leading-relaxed text-mist">{p.summary}</p>
                <span className="mt-5 font-bold text-clay">Read the policy</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </main>
  );
}
