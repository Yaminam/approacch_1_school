import Reveal from "./Reveal";
import { SectionHead } from "./ui";
import { milestones } from "@/lib/content";

export default function Recognition() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 pt-16 sm:px-8 sm:pt-20">
        <SectionHead
          eyebrow="Recognition"
          title="Fifty-four years, and the moments that marked them."
        />
      </div>

      {/* Milestones stretch the full width of the shell */}
      <div className="mx-auto w-full px-6 pb-16 sm:px-10 sm:pb-20">
        {/* Small screens: aligned vertical list */}
        <div className="mt-12 lg:hidden">
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 70}>
              <div className="grid grid-cols-[4.5rem_1fr] items-baseline gap-x-5 border-t hair py-5">
                <span className="font-display text-2xl text-brass [font-variant-numeric:tabular-nums]">
                  {m.year}
                </span>
                <div>
                  <h3 className="text-lg leading-snug text-pine">{m.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">{m.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Large screens: five equal columns across the full width, one line each */}
        <div className="mt-14 hidden gap-x-6 lg:grid lg:grid-cols-5">
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 70}>
              <div className="border-t hair pt-5">
                <span className="font-display text-3xl text-brass [font-variant-numeric:tabular-nums]">
                  {m.year}
                </span>
                <h3 className="mt-3 whitespace-nowrap text-lg leading-snug text-pine">
                  {m.title}
                </h3>
                <p className="mt-1.5 whitespace-nowrap text-sm leading-relaxed text-mist">
                  {m.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
