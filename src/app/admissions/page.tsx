import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { SectionHead, Section } from "@/components/ui";
import { admissionSteps, admissionDocs, whatsappHref, brochurePdf, feeScope } from "@/lib/content";

export const metadata: Metadata = {
  title: "Admissions, Dalhousie Public School",
  description:
    "Admissions are open for LKG to Class XII across both campuses. A simple, human process: register, assess, spend a day on campus, and enrol.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Admissions"
        title="Joining the Dalhousie"
        emphasis="family."
        subtitle="Admissions are open across both campuses, for LKG through Class XII. We look for character and curiosity first, and we try to make the process feel human at every step."
        image="/images/campus-hero.jpg"
      />

      <Section tone="cream">
        <SectionHead
          eyebrow="The process"
          title="Four steps, thoughtfully done."
        />
        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {admissionSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 90}>
              <article className="h-full rounded-[1.5rem] border border-sand bg-paper p-7 soft-shadow-sm">
                <span className="font-display text-3xl text-brass">{s.step}</span>
                <h3 className="mt-3 text-xl text-pine">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-mist">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="blush">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="eyebrow text-clay">What to bring</p>
              <h2 className="mt-4 text-3xl text-pine sm:text-4xl">Documents we will need.</h2>
              <ul className="mt-6 space-y-3">
                {admissionDocs.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-clay" />
                    <span className="font-semibold text-pine">{d}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 leading-relaxed text-mist">
                Age is taken as on 31 March of the admission year. Terms begin in June, October and January, and class sizes are capped at twenty-two to keep every child known.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="eyebrow text-clay">What we look for</p>
              <h2 className="mt-4 text-3xl text-pine sm:text-4xl">Character over cramming.</h2>
              <p className="mt-6 leading-relaxed text-mist">
                In the early years we look for curiosity and engagement; for Grades III to X there is a short entrance exam. Shortlisted children then spend a day on campus across six activities, so we can see character, drive and how they get along with others, not just what they can memorise.
              </p>
              <p className="mt-4 leading-relaxed text-mist">
                Children of armed-forces families are warmly welcomed.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHead
          eyebrow="Downloads"
          title="Read it before you decide."
          intro="Two documents answer most of what parents ask us first. Both open straight away, with no form to fill in."
        />
        <div className="mt-11 grid gap-5 md:grid-cols-2">
          <Reveal>
            <a
              href={brochurePdf}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-[1.5rem] border border-sand bg-paper p-8 soft-shadow-sm transition-transform hover:-translate-y-1"
            >
              <span className="eyebrow text-clay">Brochure</span>
              <h3 className="mt-4 text-2xl text-pine">The school, in full.</h3>
              <p className="mt-2 flex-1 leading-relaxed text-mist">
                Both campuses, the academic programme, boarding life and everything in between.
              </p>
              <span className="mt-6 font-bold text-clay group-hover:text-pine">Download the brochure</span>
            </a>
          </Reveal>
          <Reveal delay={100}>
            <a
              href={feeScope.pdf}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-[1.5rem] border border-sand bg-paper p-8 soft-shadow-sm transition-transform hover:-translate-y-1"
            >
              <span className="eyebrow text-clay">Fee structure {feeScope.year}</span>
              <h3 className="mt-4 text-2xl text-pine">What it costs, plainly.</h3>
              <p className="mt-2 flex-1 leading-relaxed text-mist">
                Fees and dues for boarders at the Dalhousie campus, KG to Class X, with the three
                instalment dates and payment details.
              </p>
              <span className="mt-6 font-bold text-clay group-hover:text-pine">Download the fee structure</span>
            </a>
          </Reveal>
        </div>
        <p className="mt-8 text-sm text-mist">
          You can also{" "}
          <Link href="/fees" className="font-bold text-clay hover:text-pine">
            read the fees on this site
          </Link>
          . Schedules for Classes XI and XII, and for New Chandigarh, are issued by the admissions office.
        </p>
      </Section>

      <Section tone="pine">
        <div className="text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-4xl text-paper sm:text-5xl">Ready when you are.</h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-sage-soft">
              Start an application, or simply book a visit. We are glad to help.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/apply" className="rounded-full bg-clay px-7 py-3.5 font-bold text-paper transition-transform hover:-translate-y-0.5">
                Apply now
              </Link>
              <Link href="/visit-us" className="rounded-full border border-paper/50 px-7 py-3.5 font-bold text-paper transition-colors hover:bg-paper/10">
                Book a visit
              </Link>
              <a href={whatsappHref("Hi! I would like to begin admission at Dalhousie Public School.")} target="_blank" rel="noreferrer" className="rounded-full border border-paper/50 px-7 py-3.5 font-bold text-paper transition-colors hover:bg-paper/10">
                Ask on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTA />
    </main>
  );
}
