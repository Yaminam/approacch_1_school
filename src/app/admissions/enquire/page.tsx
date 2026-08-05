import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { Eyebrow, Section } from "@/components/ui";
import { enquire } from "@/lib/pageCopy";
import { brochurePdf, feeScope, prospectusIncludes } from "@/lib/content";

export const metadata: Metadata = enquire.meta;

const p = enquire;

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow={p.nav}
        title={p.title}
        emphasis={p.emphasis}
        subtitle={p.subhead}
        image={p.image}
      />

      <Section tone="cream" id="form">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <Eyebrow>{p.kicker}</Eyebrow>
            <h2 className="mt-5 max-w-xl text-3xl leading-[1.05] text-pine sm:text-4xl">
              A few details, and your enquiry reaches the right campus team.
            </h2>
            <div className="mt-9">
              <EnquiryForm variant="enquire" />
            </div>
          </div>

          <aside className="lg:pt-2" id="prospectus">
            <Reveal>
              <div className="rounded-3xl border border-pine/12 bg-paper p-7 soft-shadow-sm">
                <span className="eyebrow text-clay">Prospectus access</span>
                <h3 className="mt-4 text-2xl text-pine">Download the current prospectus.</h3>
                <p className="mt-2 leading-relaxed text-mist">
                  Prospectus access should not create unnecessary friction. Open it now, no form required.
                </p>
                <a
                  href={brochurePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block rounded-full bg-clay px-6 py-3.5 text-center text-sm font-bold uppercase tracking-[0.12em] text-paper transition-transform hover:-translate-y-0.5"
                >
                  Download prospectus
                </a>
                <a
                  href={feeScope.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block rounded-full border-2 border-pine px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.1em] text-pine transition-colors hover:border-clay hover:text-clay"
                >
                  Fee structure {feeScope.year}
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-8">
                <h3 className="text-xl text-pine">Inside the prospectus</h3>
                <ul className="mt-4 space-y-3">
                  {prospectusIncludes.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                      <span className="leading-relaxed text-mist">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-x-16 gap-y-0 lg:grid-cols-2">
          {p.blocks.map((b) => (
            <Reveal key={b.h}>
              <article className="border-t hair py-8">
                <h3 className="text-xl text-pine">{b.h}</h3>
                {b.p.map((t, i) => (
                  <p key={i} className="mt-2.5 leading-relaxed text-mist">{t}</p>
                ))}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="grain-pine">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <Reveal>
              <div>
                <Eyebrow dark>When you are ready</Eyebrow>
                <h2 className="mt-6 max-w-2xl text-3xl leading-[1.05] text-paper sm:text-4xl lg:text-5xl">
                  Most families decide after they visit.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sage-soft">
                  A prospectus tells you what we offer. A morning on campus tells you whether it is right
                  for your child.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href="/admissions/book-a-visit"
                  className="rounded-full bg-clay px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-transform hover:-translate-y-0.5"
                >
                  Book a visit
                </Link>
                <Link
                  href="/admissions/apply"
                  className="rounded-full border border-paper/45 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:border-brass-soft hover:text-brass-soft"
                >
                  Apply now
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
