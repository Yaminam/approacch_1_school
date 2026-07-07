import { stats } from "@/lib/content";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

export default function ProofBand() {
  return (
    <section className="grain-pine">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="border-t border-paper/15 pt-5">
                <div className="font-display text-4xl text-brass-soft sm:text-5xl">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-2 font-semibold text-paper">{s.label}</div>
                <div className="text-sm text-sage-soft">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
