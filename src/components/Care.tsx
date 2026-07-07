import { care } from "@/lib/content";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";

export default function Care() {
  return (
    <section id="care" className="bg-blush">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>Pastoral Care &amp; Safety</Eyebrow>
              <h2 className="mt-6 text-4xl leading-[1.03] text-pine sm:text-5xl">
                Sending a child up a mountain is an act of trust.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">
                We take that trust seriously. Before a single lesson is taught,
                every child is safe, known and cared for, and you are kept close,
                however far away you are.
              </p>
            </div>
          </Reveal>

          <div>
            {care.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <article className="border-t hair py-7 first:border-t-0 first:pt-0">
                  <h3 className="text-xl text-pine">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-mist">{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
