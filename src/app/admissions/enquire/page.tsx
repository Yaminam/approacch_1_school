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
            {/* Sticky, and a direct child of the stretched grid cell: the form
                beside it runs far longer, so ranged at the top this left 735px
                of empty column for the whole scroll. */}
            <div className="lg:sticky lg:top-28">
              <div className="rounded-[4px] border border-brass/30 bg-blush/40 p-7">
                <span className="block text-[0.75rem] font-bold uppercase tracking-[0.22em] text-brass lg:text-[0.68rem]">
                  Prospectus access
                </span>
                <h3 className="mt-4 font-display text-[1.4rem] leading-[1.2] text-clay sm:text-[1.6rem]">
                  Download the current prospectus.
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.72] text-pine/75">
                  Prospectus access should not create unnecessary friction. Open it now, no form required.
                </p>
                <a
                  href={brochurePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block min-h-11 rounded-full bg-clay px-6 py-3.5 text-center text-[0.68rem] font-bold uppercase tracking-[0.16em] text-paper transition-transform hover:-translate-y-0.5"
                >
                  Download prospectus
                </a>
                <Link
                  href="/admissions/fees"
                  className="mt-3 block min-h-11 rounded-full border border-clay/45 px-6 py-3 text-center text-[0.66rem] font-bold uppercase tracking-[0.13em] text-clay transition-colors hover:border-clay hover:bg-blush/60"
                >
                  Fees &amp; dues {feeScope.year}
                </Link>
              </div>

              <div className="mt-8 border-t border-sand pt-7">
                <h3 className="font-display text-[1.3rem] leading-[1.2] text-clay">Inside the prospectus</h3>
                <ul className="mt-4 space-y-3">
                  {prospectusIncludes.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                      <span className="text-[1rem] leading-[1.7] text-pine/75">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
