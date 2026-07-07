import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { history } from "@/lib/content";

export const metadata: Metadata = {
  title: "About & Heritage, Dalhousie Public School",
  description:
    "From 10 students in 1970 to a global family across two campuses, 54 years of the Dalhousie story.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="About & Heritage"
        title="Fifty-four years,"
        emphasis="one belief."
        subtitle="What began with ten children at Moti Tibba in 1970 is now a global family, still taught, as ever, in the clean air of the alpine."
        image="/images/campus-wide.jpg"
      />

      <section className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="eyebrow text-clay">The Chairman</p>
          <h2 className="mt-4 text-4xl text-pine sm:text-5xl">
            A soldier who became an educator.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mist">
            Dr. (Capt.) G. S. Dhillon commanded with the 2 Para Special Forces
            before he ever led a classroom. He took premature retirement from the
            Army in 1986 and turned Dalhousie into one of India&apos;s most
            respected residential schools, earning the National Award for
            Teachers from the President of India along the way.
          </p>
        </Reveal>
      </section>

      <section className="bg-blush">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
          <Reveal>
            <p className="eyebrow text-clay">Our history</p>
            <h2 className="mt-4 text-4xl text-pine sm:text-5xl">
              Milestones on the mountain.
            </h2>
          </Reveal>

          <div className="mt-14 space-y-0">
            {history.map((h, i) => (
              <Reveal key={h.year} delay={i * 60}>
                <div className="flex gap-6 border-l-2 border-sage-soft pb-8 pl-7 last:pb-0 sm:gap-10">
                  <div className="-ml-[3.4rem] flex items-start">
                    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-pine font-display text-lg font-semibold text-brass-soft">
                      {h.year}
                    </span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl text-pine">{h.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-mist">{h.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
