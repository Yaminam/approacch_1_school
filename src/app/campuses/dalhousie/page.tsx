import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { SplitFeature, Section } from "@/components/ui";
import CampusSections from "@/components/CampusSections";
import { whatsappHref, contact, campusDetail } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dalhousie Campus, Dalhousie Public School",
  description:
    "The original campus, seven thousand feet above sea level in alpine forest. A full CBSE residential boarding experience with a 54-year legacy.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Dalhousie Campus"
        title="Life on the mountain,"
        emphasis="seven thousand feet up."
        subtitle="Our original campus, wrapped in alpine forest. A full CBSE boarding home where independence and character are forged in the clean air of the Himalayas."
        image="/images/campus-hero.jpg"
      />

      <Section tone="cream">
        <SplitFeature
          image="/images/aerial.jpg"
          eyebrow="The setting"
          title="Teaching in nature, without leaving the modern behind."
          body="For 54 years, Dalhousie has taught where the air is clean and the scenery both calms and inspires. That timeless setting sits alongside smart classrooms, coding courses and renewable-energy systems, so children grow up fluent in both the natural world and the modern one."
          points={["Full residential boarding", "CBSE curriculum, LKG to Class XII", "Alpine forest campus"]}
        />
      </Section>

      <CampusSections detail={campusDetail.dalhousie} />

      <Section tone="pine">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow text-brass-soft">Visit us</p>
              <h2 className="mt-4 text-4xl leading-[1.02] text-paper sm:text-5xl">Come and see it for yourself.</h2>
              <p className="mt-5 max-w-xl leading-relaxed text-sage-soft">{contact.dalhousie.address}</p>
              <p className="mt-2 text-sage-soft">
                {contact.dalhousie.email} &middot; {contact.dalhousie.phone}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href={whatsappHref("Hi! I would like to know more about the Dalhousie Campus.")}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brass-soft px-7 py-3.5 font-bold text-pine-800 transition-transform hover:-translate-y-0.5"
              >
                Enquire on WhatsApp
              </a>
              <Link href="/admissions" className="rounded-full border border-paper/40 px-7 py-3.5 font-bold text-paper transition-colors hover:bg-paper/10">
                Admissions
              </Link>
              <Link href="/visit-us" className="rounded-full border border-paper/40 px-7 py-3.5 font-bold text-paper transition-colors hover:bg-paper/10">
                Visit Us
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTA />
    </main>
  );
}
