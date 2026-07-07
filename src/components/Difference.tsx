import { differences } from "@/lib/content";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";

export default function Difference() {
  return (
    <section id="difference" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>The Dalhousie Difference</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.02] text-pine sm:text-5xl">
              We teach in three places at once.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">
              Most schools stop at the classroom door. Here, the mountain, the
              house and the field do just as much of the teaching.
            </p>
          </div>
        </Reveal>

        <div>
          {differences.map((d, i) => (
            <Reveal key={d.title} delay={i * 100}>
              <article className="grid grid-cols-[auto_1fr] gap-6 border-t hair py-8 first:border-t-0 first:pt-0 sm:gap-10">
                <span className="font-display text-3xl text-brass sm:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl text-pine">{d.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-mist">{d.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
