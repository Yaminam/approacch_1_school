import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { SectionHead, Section } from "@/components/ui";
import { admissionSteps, admissionDocs, whatsappHref, school, contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Apply Now, Dalhousie Public School",
  description:
    "Start your child's application to Dalhousie Public School. Message us on WhatsApp, email, or call, and we will guide you from here.",
};

const applyMsg =
  "Hi! I would like to start an application at Dalhousie Public School. My child is entering Grade ___ .";

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Apply Now"
        title="Let's begin"
        emphasis="your child's story."
        subtitle="Starting is simple. Reach out in whichever way suits you, and a member of our admissions team will walk you through every step."
        image="/images/campus-hero.jpg"
      />

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div>
              <p className="eyebrow text-clay">How it goes</p>
              <h2 className="mt-4 text-3xl text-pine sm:text-4xl">Four gentle steps.</h2>
              <ol className="mt-8 space-y-5">
                {admissionSteps.map((s) => (
                  <li key={s.step} className="flex gap-5">
                    <span className="font-display text-2xl font-semibold text-brass">{s.step}</span>
                    <span className="border-l-2 border-sage-soft pl-5">
                      <span className="block font-bold text-pine">{s.title}</span>
                      <span className="block text-mist">{s.body}</span>
                    </span>
                  </li>
                ))}
              </ol>

              <p className="mt-10 eyebrow text-clay">Keep these handy</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {admissionDocs.map((d) => (
                  <li key={d} className="rounded-full bg-blush px-4 py-2 text-sm font-semibold text-pine">{d}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-sand bg-paper p-8 soft-shadow">
              <h3 className="text-2xl text-pine">Start now</h3>
              <p className="mt-2 leading-relaxed text-mist">Pick whatever is easiest. We reply personally, often the same day.</p>
              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={whatsappHref(applyMsg)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-clay px-6 py-3.5 text-center font-bold text-paper transition-transform hover:-translate-y-0.5"
                >
                  Apply on WhatsApp
                </a>
                <a
                  href={`mailto:${school.email}?subject=Admission%20Enquiry&body=Hi,%20I%20would%20like%20to%20apply%20for%20my%20child.`}
                  className="rounded-full border-2 border-pine px-6 py-3 text-center font-bold text-pine transition-colors hover:border-clay hover:text-clay"
                >
                  Email admissions
                </a>
                <a
                  href={`tel:${school.phoneRaw}`}
                  className="rounded-full border-2 border-pine px-6 py-3 text-center font-bold text-pine transition-colors hover:border-clay hover:text-clay"
                >
                  Call {school.phone}
                </a>
              </div>
              <div className="mt-7 border-t border-sand pt-5 text-sm text-mist">
                <div className="font-bold text-pine">{contact.dalhousie.name}</div>
                <div>{contact.dalhousie.email}</div>
                <div className="mt-3 font-bold text-pine">{contact.chandigarh.name}</div>
                <div>{contact.chandigarh.email}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTA />
    </main>
  );
}
