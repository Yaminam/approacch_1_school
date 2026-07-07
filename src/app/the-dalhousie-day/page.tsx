import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { routine } from "@/lib/content";

export const metadata: Metadata = {
  title: "A Day at Dalhousie, Dalhousie Public School",
  description: "From a 5:30 mountain wake-up to lights out, a real day at Dalhousie.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="A Day at Dalhousie"
        title="From first light to"
        emphasis="lights out."
        subtitle="A full, happy day with a rhythm to it, study and sport, quiet and company, all held by people who care."
        image="/images/campus-hero.jpg"
      />

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-clay">Middle School routine</p>
              <h2 className="mt-4 text-4xl text-pine sm:text-5xl">
                Structure is a kind of care.
              </h2>
              <p className="mt-5 leading-relaxed text-mist">
                A boarding day gives a child something a commute never can, time.
                Time to train, to study without rush, to eat well and to simply be
                with friends. Here is how a typical middle-school day unfolds.
              </p>
              <div className="mt-8 overflow-hidden rounded-[1.75rem] soft-shadow">
                <Image
                  src="/images/outside.jpg"
                  alt="Students outside at Dalhousie"
                  width={900}
                  height={640}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <ol className="space-y-2">
            {routine.map((r, i) => (
              <Reveal key={r.time + r.title} delay={i * 40}>
                <li className="flex items-center gap-5 rounded-2xl border border-sand bg-paper px-6 py-4 soft-shadow-sm">
                  <span className="w-16 shrink-0 font-display text-xl font-semibold text-clay">
                    {r.time}
                  </span>
                  <span className="font-semibold text-pine">{r.title}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTA />
    </main>
  );
}
