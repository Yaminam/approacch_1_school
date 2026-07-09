import Link from "next/link";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";
import { prepTeaser } from "@/lib/content";

export default function PreparationTeaser() {
  return (
    <section className="grain-pine">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow dark>The Dalhousie Preparation System</Eyebrow>
              <h2 className="mt-6 text-4xl leading-[1.02] text-paper sm:text-5xl">
                Holistic is easy to say. <span className="italic text-brass-soft">Here is where we teach it.</span>
              </h2>
            </div>
            <Link
              href="/preparation-system"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brass-soft transition-colors hover:text-paper"
            >
              See the whole system
              <span aria-hidden>-&gt;</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {prepTeaser.map((m, i) => (
            <Reveal key={m.href} delay={i * 100}>
              <Link
                href={m.href}
                className="group flex h-full flex-col border-t border-paper/20 pt-6 transition-colors"
              >
                <span className="font-display text-2xl text-brass-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-2xl text-paper">{m.name}</h3>
                <p className="mt-2.5 flex-1 leading-relaxed text-sage-soft">{m.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brass-soft">
                  Explore
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">-&gt;</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
