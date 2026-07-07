import Reveal from "./Reveal";
import { Eyebrow } from "./ui";
import { history } from "@/lib/content";

export default function Timeline() {
  return (
    <section className="grain-pine">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow dark>Our story</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.02] text-paper sm:text-5xl">
              Fifty-four years, one mountain.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-sage-soft">
              From ten children at Moti Tibba in 1970 to a global family across
              two campuses today.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 overflow-x-auto pb-4 [scrollbar-width:thin]">
          <div className="relative flex min-w-max gap-6">
            <div className="absolute inset-x-0 top-[7px] h-px bg-paper/20" />
            {history.map((h, i) => (
              <Reveal key={h.year} delay={i * 60}>
                <div className="relative w-56 shrink-0">
                  <span className="block h-4 w-4 rounded-full border-2 border-brass-soft bg-pine-800" />
                  <div className="mt-6">
                    <div className="font-display text-3xl text-brass-soft">{h.year}</div>
                    <h3 className="mt-2 text-lg text-paper">{h.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-sage-soft">{h.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
