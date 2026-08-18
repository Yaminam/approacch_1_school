import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { Eyebrow, Section } from "@/components/ui";
import { bookAVisit } from "@/lib/pageCopy";
import { contact as contactDetails, school } from "@/lib/content";

export const metadata: Metadata = bookAVisit.meta;

const p = bookAVisit;
// The blocks that describe the form itself are rendered as the form; the rest
// become the reassurance column beside it.
const aside = p.blocks.filter((b) =>
  ["Choose a preferred date", "Consent and privacy", "Before you come", "Alternative contact"].includes(b.h),
);

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
              Choose a campus, tell us about your child, and pick a morning.
            </h2>
            {/* The confirmation line used to sit here as well as in the aside's
                "Choose a preferred date" block, so the same sentence appeared
                twice within one screen. The deck owns it; this copy went. */}
            <div className="mt-9">
              <EnquiryForm variant="visit" />
            </div>
          </div>

          <aside className="lg:pt-2">
            {aside.map((b) => (
              <Reveal key={b.h}>
                <div className="border-t hair py-7 first:border-t-0 first:pt-0">
                  <h3 className="text-xl text-pine">{b.h}</h3>
                  {b.p.map((t, i) => (
                    <p key={i} className="mt-2.5 leading-relaxed text-mist">{t}</p>
                  ))}
                </div>
              </Reveal>
            ))}

            <Reveal>
              <div className="mt-4 rounded-3xl border border-pine/12 bg-paper p-7">
                <span className="eyebrow text-clay">Campus contacts</span>
                {[contactDetails.dalhousie, contactDetails.chandigarh].map((c) => (
                  <div key={c.name} className="mt-5 border-t hair pt-5 first:border-t-0 first:pt-0">
                    <div className="font-bold text-pine">{c.name}</div>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist">{c.address}</p>
                    <a href={`mailto:${c.email}`} className="mt-1 inline-flex min-h-11 items-center py-1.5 text-sm font-bold text-clay hover:text-pine">
                      {c.email}
                    </a>
                    <a href={`tel:${c.phone.replace(/[^0-9+]/g, "")}`} className="inline-flex min-h-11 items-center py-1.5 text-sm font-bold text-clay hover:text-pine">
                      {c.phone}
                    </a>
                  </div>
                ))}
                <a
                  href={`tel:${school.phoneRaw}`}
                  className="mt-7 block rounded-full border-2 border-pine px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.1em] text-pine transition-colors hover:border-clay hover:text-clay"
                >
                  Call admissions
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <section className="grain-pine">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <Reveal>
              <div>
                <Eyebrow dark>Still deciding</Eyebrow>
                <h2 className="mt-6 max-w-2xl text-3xl leading-[1.05] text-paper sm:text-4xl lg:text-5xl">
                  Not sure which campus to visit?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sage-soft">
                  Six short questions consider your child&apos;s stage, your residential preference and
                  your family&apos;s priorities, then explain which experience may fit and why.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href="/campuses/find-your-campus"
                  className="rounded-full bg-clay px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-transform hover:-translate-y-0.5"
                >
                  Find Your Campus
                </Link>
                <Link
                  href="/campuses/compare"
                  className="rounded-full border border-paper/45 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:border-brass-soft hover:text-brass-soft"
                >
                  Compare Campuses
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
