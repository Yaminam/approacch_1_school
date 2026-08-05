import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { Eyebrow, Section } from "@/components/ui";
import { contact as page } from "@/lib/pageCopy";
import { contact as details, school, whatsappHref } from "@/lib/content";

export const metadata: Metadata = page.meta;

const routes = [
  { label: "Admissions", body: "Enquiries are directed by campus, grade and residential preference.", href: "/admissions/enquire", cta: "Start an enquiry" },
  { label: "Book a visit", body: "Choose a campus and a preferred date, and we will confirm the schedule.", href: "/admissions/book-a-visit", cta: "Book a visit" },
  { label: "Fees", body: "Approved fees by campus, grade and residential model.", href: "/admissions/fees", cta: "View fees" },
  { label: "Policies and disclosures", body: "Statutory disclosures, safeguarding, privacy and website terms.", href: "/policies-disclosures", cta: "Search documents" },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow={page.nav}
        title={page.title}
        emphasis={page.emphasis}
        subtitle={page.subhead}
        image={page.image}
      />

      {/* Group and campus contacts */}
      <Section tone="cream">
        <Eyebrow>{page.kicker}</Eyebrow>
        <h2 className="mt-5 max-w-2xl text-3xl leading-[1.05] text-pine sm:text-4xl">
          Dalhousie Public School, group and campus contacts.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[details.dalhousie, details.chandigarh].map((c, i) => (
            <Reveal key={c.name} delay={i * 100}>
              <article className="h-full rounded-3xl border border-pine/12 bg-paper p-8 soft-shadow-sm">
                <h3 className="text-2xl text-pine">{c.name}</h3>
                <p className="mt-4 leading-relaxed text-mist">{c.address}</p>
                <dl className="mt-6 space-y-3 text-sm">
                  <div>
                    <dt className="font-bold text-pine">Admissions and general office</dt>
                    <dd className="mt-1">
                      <a href={`mailto:${c.email}`} className="block font-bold text-clay hover:text-pine">{c.email}</a>
                      <a href={`tel:${c.phone.replace(/[^0-9+]/g, "")}`} className="block font-bold text-clay hover:text-pine">{c.phone}</a>
                    </dd>
                  </div>
                </dl>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={whatsappHref(`Hi! I would like to contact the ${c.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-clay px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-paper transition-transform hover:-translate-y-0.5"
                  >
                    WhatsApp
                  </a>
                  <Link
                    href="/admissions/book-a-visit"
                    className="rounded-full border-2 border-pine px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-pine transition-colors hover:border-clay hover:text-clay"
                  >
                    Book a visit
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 rounded-3xl border border-pine/12 bg-blush/60 p-8">
            <span className="eyebrow text-clay">Group contact</span>
            <h3 className="mt-3 text-2xl text-pine">Dalhousie Public School</h3>
            <p className="mt-3 text-mist">
              <a href={`mailto:${school.email}`} className="font-bold text-clay hover:text-pine">{school.email}</a>
              {"  ·  "}
              <a href={`tel:${school.phoneRaw}`} className="font-bold text-clay hover:text-pine">{school.phone}</a>
            </p>
            <p className="mt-3 text-sm text-mist">
              Office timings and department-specific routes are confirmed by the School office.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Route by purpose */}
      <Section tone="paper">
        <Eyebrow>By purpose</Eyebrow>
        <h2 className="mt-5 max-w-2xl text-3xl leading-[1.05] text-pine sm:text-4xl">
          Department-specific contact.
        </h2>
        <div className="mt-11 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((r, i) => (
            <Reveal key={r.label} delay={i * 70}>
              <article className="flex h-full flex-col border-t hair pt-6">
                <span className="font-display text-2xl text-brass">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl text-pine">{r.label}</h3>
                <p className="mt-2.5 flex-1 leading-relaxed text-mist">{r.body}</p>
                <Link href={r.href} className="mt-5 text-sm font-bold uppercase tracking-[0.1em] text-clay hover:text-pine">
                  {r.cta} &rarr;
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* General contact form */}
      <Section tone="cream" id="form">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <Eyebrow>General contact form</Eyebrow>
            <h2 className="mt-5 max-w-xl text-3xl leading-[1.05] text-pine sm:text-4xl">
              Send us a message and we will route it.
            </h2>
            <div className="mt-9">
              <EnquiryForm variant="contact" />
            </div>
          </div>
          <aside className="lg:pt-2">
            <Reveal>
              <div className="border-t hair py-7">
                <h3 className="text-xl text-pine">Privacy</h3>
                <p className="mt-2.5 leading-relaxed text-mist">
                  Your information is used to respond to the enquiry in accordance with the approved
                  privacy notice.
                </p>
                <Link href="/policies-disclosures" className="mt-4 inline-block text-sm font-bold uppercase tracking-[0.1em] text-clay hover:text-pine">
                  Read the privacy notice &rarr;
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>
    </main>
  );
}
