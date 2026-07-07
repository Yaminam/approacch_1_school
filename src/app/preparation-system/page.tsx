import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { SectionHead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Dalhousie Preparation System, Dalhousie Public School",
  description:
    "The parts of a Dalhousie education that other schools leave to chance, we have designed, named and made our own.",
};

const systems = [
  { title: "Academics & Pathways", href: "/academics", body: "From Montessori toddlers to board and international pathways." },
  { title: "Dalhousie Defence Pathway", href: "/defence-pathway", body: "A dedicated route for children who dream in uniform." },
  { title: "Residential Life", href: "/residential-life", body: "A home away from home that grows independence." },
  { title: "Student Life", href: "/student-life", body: "Sport, mountains, arts and clubs, beyond the classroom." },
  { title: "Pastoral Care / Parent Connect", href: "/pastoral-care", body: "Every child known, and every family kept close." },
  { title: "Whole Child Report", href: "/whole-child-report", body: "A report that measures more than marks." },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Preparation System"
        title="The whole system,"
        emphasis="by design."
        subtitle="The parts of a Dalhousie education that most schools leave to chance, we have designed, named and made our own."
        image="/images/campus-wide.jpg"
      />

      <Section tone="cream">
        <SectionHead
          eyebrow="How it fits together"
          title="Six systems, one confident young adult."
          intro="Each element below is a deliberate part of the Dalhousie preparation. Explore any of them."
        />
        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((s, i) => (
            <Reveal key={s.href} delay={i * 80}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-[1.5rem] border border-sand bg-paper p-7 soft-shadow-sm transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="mb-5 block h-1.5 w-10 rounded-full bg-clay" />
                <h3 className="text-xl text-pine">{s.title}</h3>
                <p className="mt-2.5 flex-1 leading-relaxed text-mist">{s.body}</p>
                <span className="mt-5 font-bold text-clay">Explore</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </main>
  );
}
