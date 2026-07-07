import { modules } from "@/lib/content";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";

export default function PreparationSystem() {
  return (
    <section id="prep" className="grain-pine">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow dark>The Dalhousie Preparation System</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.02] text-paper sm:text-5xl">
              Named systems, not vague promises.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-sage-soft">
              The parts of a Dalhousie education that other schools leave to
              chance, we have designed, named and made our own.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-12 sm:grid-cols-2">
          {modules.map((m, i) => (
            <Reveal key={m.name} delay={i * 60}>
              <article className="flex gap-5 border-t border-paper/15 py-6">
                <span className="pt-1 font-display text-lg text-brass-soft [font-variant-numeric:tabular-nums]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl text-paper">{m.name}</h3>
                  <p className="mt-1.5 leading-relaxed text-sage-soft">{m.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
