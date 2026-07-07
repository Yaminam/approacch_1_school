import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { SectionHead, Section } from "@/components/ui";
import CampusSections from "@/components/CampusSections";
import { whatsappHref, contact, chandigarhFeatures, campusDetail } from "@/lib/content";

export const metadata: Metadata = {
  title: "New Chandigarh Campus, Dalhousie Public School",
  description:
    "The same Dalhousie method, closer to the city. A modern campus at Siswan with a choice of CBSE or international IB and Cambridge pathways, day and residential.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="New Chandigarh Campus"
        title="The Dalhousie method,"
        emphasis="closer to home."
        subtitle="A modern campus at Siswan, opened in 2025. All the warmth and rigour of Dalhousie, with a choice of CBSE or an international pathway, and the flexibility of day school or boarding."
        image="/images/chd-hostel.jpg"
      />

      <Section tone="cream">
        <SectionHead
          eyebrow="Signature to Siswan"
          title="Facilities you will not find at most schools."
        />
        <div className="mt-11 grid gap-6 md:grid-cols-3">
          {chandigarhFeatures.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <article className="group overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src={f.img} alt="" fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-5 text-2xl text-pine">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-mist">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CampusSections detail={campusDetail.chandigarh} />

      <Section tone="pine">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow text-brass-soft">Visit us</p>
              <h2 className="mt-4 text-4xl leading-[1.02] text-paper sm:text-5xl">Come and see it for yourself.</h2>
              <p className="mt-5 max-w-xl leading-relaxed text-sage-soft">{contact.chandigarh.address}</p>
              <p className="mt-2 text-sage-soft">
                {contact.chandigarh.email} &middot; {contact.chandigarh.phone}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href={whatsappHref("Hi! I would like to know more about the New Chandigarh Campus.")}
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
