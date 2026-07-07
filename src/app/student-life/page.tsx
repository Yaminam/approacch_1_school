import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { SectionHead, FeatureGrid, Section } from "@/components/ui";
import { activities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Student Life, Dalhousie Public School",
  description:
    "Sport, mountaineering, arts and clubs. Where a child discovers what they love, beyond the classroom.",
};

const pillars = [
  { title: "Sport", body: "Daily football, basketball and rifle and pistol shooting, where our students have earned national recognition. A Power Play gym builds strength and endurance." },
  { title: "Mountaineering", body: "Treks and outdoor expeditions in the Dalhousie hills build endurance, teamwork and resilience under expert guidance." },
  { title: "Outdoor education", body: "Nature camps, leadership retreats and international excursions, including trips to NASA, broaden every horizon." },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Student Life"
        title="Where a child discovers"
        emphasis="what they love."
        subtitle="Beyond the classroom, the mountain becomes a playground and a proving ground. There is room here to try everything."
        image="/images/trekking.jpg"
      />

      <Section tone="cream">
        <SectionHead
          eyebrow="Outside the classroom"
          title="Three ways to grow beyond the desk."
        />
        <FeatureGrid items={pillars} cols={3} />
      </Section>

      <Section tone="pine">
        <SectionHead
          eyebrow="Activities"
          title="A little of everything, and space to go deep."
          intro="From the shooting range to the stage, our students are never short of something to master."
          dark
        />
        <div className="mt-11 grid grid-cols-2 gap-4 md:grid-cols-4">
          {activities.map((a, i) => (
            <Reveal key={a.title} delay={i * 50}>
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={a.img}
                  alt={a.title}
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-800/85 via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4 font-display text-lg font-semibold text-paper">
                  {a.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </main>
  );
}
