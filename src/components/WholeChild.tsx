import Reveal from "./Reveal";
import { Eyebrow } from "./ui";
import { pillars } from "@/lib/content";

export default function WholeChild() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Our philosophy</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.02] text-pine sm:text-5xl lg:text-6xl">
              Whole Child, <span className="italic text-clay">Whole Future.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              We do not ask a child to be brilliant at one thing. We raise them in
              four directions at once, and we say so plainly.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="border-t hair pt-6">
                <span className="font-display text-2xl text-brass">{p.n}</span>
                <h3 className="mt-4 text-2xl text-pine">{p.title}</h3>
                <p className="mt-2.5 leading-relaxed text-mist">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
