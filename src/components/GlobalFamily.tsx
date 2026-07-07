import Reveal from "./Reveal";
import { Eyebrow } from "./ui";
import { globalCountries } from "@/lib/content";

export default function GlobalFamily() {
  return (
    <section className="grain-pine">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal>
            <div>
              <Eyebrow dark>Our global family</Eyebrow>
              <h2 className="mt-6 text-4xl leading-[1.02] text-paper sm:text-5xl">
                A small school on a mountain, with a{" "}
                <span className="italic text-brass-soft">very wide world</span> in it.
              </h2>
              <div className="mt-10 flex gap-10">
                <div>
                  <div className="font-display text-5xl text-brass-soft sm:text-6xl">102</div>
                  <div className="mt-1 font-semibold text-sage-soft">cities across India</div>
                </div>
                <div>
                  <div className="font-display text-5xl text-brass-soft sm:text-6xl">10</div>
                  <div className="mt-1 font-semibold text-sage-soft">countries and counting</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-wrap gap-2.5">
              {globalCountries.map((c) => (
                <span
                  key={c}
                  className="inline-block rounded-full border border-paper/25 px-4 py-2 font-semibold text-paper"
                >
                  {c}
                </span>
              ))}
              <span className="inline-block rounded-full bg-brass-soft px-4 py-2 font-bold text-pine-800">
                and beyond
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
