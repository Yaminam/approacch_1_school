import Reveal from "./Reveal";
import { SectionHead } from "./ui";
import { milestones } from "@/lib/content";

export default function Recognition() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <SectionHead
          eyebrow="Recognition"
          title="Fifty-four years, and the moments that marked them."
        />
        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 70}>
              <div className="border-t hair pt-5">
                <div className="font-display text-3xl text-brass sm:text-4xl">{m.year}</div>
                <h3 className="mt-3 text-lg text-pine">{m.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-mist">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
