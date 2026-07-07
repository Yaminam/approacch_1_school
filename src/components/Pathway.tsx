import Link from "next/link";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";

const steps = [
  { n: "01", title: "Learn about us", body: "Explore the Dalhousie difference, our campuses and how a child grows here.", href: "/the-dalhousie-difference", cta: "Discover Dalhousie" },
  { n: "02", title: "Come and visit", body: "Spend a morning on campus. It is the fastest way to know if we are right for your child.", href: "/visit-us", cta: "Book a visit" },
  { n: "03", title: "Begin your application", body: "Register, meet us, and start your child's story with a simple, human process.", href: "/apply", cta: "Apply now" },
];

export default function Pathway() {
  return (
    <section className="grain-pine">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <Eyebrow dark>Your next step</Eyebrow>
        <h2 className="mt-6 max-w-3xl text-4xl leading-[1.02] text-paper sm:text-5xl">
          Three simple steps, whenever you are ready.
        </h2>

        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 110}>
              <div className="flex h-full flex-col border-t border-paper/15 pt-6">
                <span className="font-display text-4xl text-brass-soft">{s.n}</span>
                <h3 className="mt-4 text-2xl text-paper">{s.title}</h3>
                <p className="mt-2.5 flex-1 leading-relaxed text-sage-soft">{s.body}</p>
                <Link
                  href={s.href}
                  className="mt-6 inline-flex items-center gap-2 font-bold text-brass-soft transition-colors hover:text-paper"
                >
                  {s.cta}
                  <span aria-hidden>-&gt;</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
