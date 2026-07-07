import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { SectionHead, Section } from "@/components/ui";
import { contact, whatsappHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Visit Us, Dalhousie Public School",
  description:
    "The best way to understand Dalhousie is to stand in it. Book a visit to the Dalhousie or New Chandigarh campus.",
};

const campusList = [contact.dalhousie, contact.chandigarh];

const expect = [
  { title: "A walk around", body: "See the classrooms, the houses and the grounds, at the child's pace." },
  { title: "Meet our people", body: "Talk to teachers and housemasters who will know your child by name." },
  { title: "Your questions answered", body: "Fees, boarding, food, safety. Ask us anything, honestly." },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Visit Us"
        title="Come and feel"
        emphasis="the mountain air."
        subtitle="A website can only say so much. Spend a morning with us and you will know, quite quickly, whether Dalhousie is right for your child."
        image="/images/campus-wide.jpg"
      />

      <Section tone="cream">
        <SectionHead eyebrow="Two campuses to visit" title="Pick a campus, pick a day." />
        <div className="mt-11 grid gap-6 lg:grid-cols-2">
          {campusList.map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <article className="h-full rounded-[1.75rem] border border-sand bg-paper p-8 soft-shadow-sm">
                <h3 className="text-2xl text-pine">{c.name}</h3>
                <p className="mt-3 leading-relaxed text-mist">{c.address}</p>
                <p className="mt-3 text-mist">
                  {c.email}
                  <br />
                  {c.phone}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={whatsappHref(`Hi! I would like to book a visit to the ${c.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-clay px-6 py-3 font-bold text-paper transition-transform hover:-translate-y-0.5"
                  >
                    Book a visit
                  </a>
                  <a
                    href={`tel:${c.phone.replace(/[^0-9]/g, "")}`}
                    className="rounded-full border-2 border-pine px-6 py-3 font-bold text-pine transition-colors hover:border-clay hover:text-clay"
                  >
                    Call
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="blush">
        <SectionHead eyebrow="What to expect" title="Your morning with us." />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {expect.map((e, i) => (
            <Reveal key={e.title} delay={i * 90}>
              <div className="h-full rounded-[1.5rem] border border-sand bg-paper p-7 soft-shadow-sm">
                <span className="mb-4 block h-1.5 w-10 rounded-full bg-clay" />
                <h3 className="text-xl text-pine">{e.title}</h3>
                <p className="mt-2 leading-relaxed text-mist">{e.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </main>
  );
}
