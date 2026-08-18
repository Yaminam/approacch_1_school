import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import LineIcon, { type IconName } from "@/components/LineIcon";
import { PAD, Eyebrow, GoldLink } from "@/components/sections";
import { contact as page } from "@/lib/pageCopy";
import { contact as details, school, whatsappHref } from "@/lib/content";

export const metadata: Metadata = page.meta;

/* Rebuilt onto the heritage editorial system. The page had been left on the
   old kit: rounded-3xl shadowed panels for the two campus contacts, the mist
   grey on every secondary line, and a 2xl sans heading where the rest of the
   site sets the display face. */

/* Marks are assigned here rather than derived from the label. The keyword
   matcher reads "admissions", "visit" and "fees" as the same enquiry family
   and would have drawn the same calendar three times out of four. */
const routes: { label: string; body: string; href: string; cta: string; icon: IconName }[] = [
  { label: "Admissions", body: "Enquiries are directed by campus, grade and residential preference.", href: "/admissions/enquire", cta: "Start an enquiry", icon: "people" },
  { label: "Book a visit", body: "Choose a campus and a preferred date, and we will confirm the schedule.", href: "/admissions/book-a-visit", cta: "Book a visit", icon: "calendar" },
  { label: "Fees", body: "Approved fees by campus, grade and residential model.", href: "/admissions/fees", cta: "View fees", icon: "chart" },
  { label: "Policies and disclosures", body: "Statutory disclosures, safeguarding, privacy and website terms.", href: "/policies-disclosures", cta: "Search documents", icon: "document" },
];

const CAMPUS_CONTACTS = [
  { ...details.dalhousie, anchor: "dalhousie", label: "The Mountain Campus" },
  { ...details.chandigarh, anchor: "new-chandigarh", label: "The Modern Campus" },
];

export default function Page() {
  return (
    <main className="bg-cream">
      <PageHero
        eyebrow={page.nav}
        title={page.title}
        emphasis={page.emphasis}
        subtitle={page.subhead}
        image={page.image}
      />

      {/* Group and campus contacts */}
      <section className={`${PAD} py-16 sm:py-20`}>
        <Eyebrow>{page.kicker}</Eyebrow>
        <h2 className="mt-5 max-w-[26ch] font-display text-[1.85rem] leading-[1.14] text-clay sm:text-[2.35rem]">
          Dalhousie Public School, group and campus contacts.
        </h2>

        {/* Two campuses, identical weight. Hairline-ruled columns rather than
            shadowed panels, so neither reads as the primary one. */}
        <div className="mt-12 grid gap-x-14 gap-y-12 lg:grid-cols-2">
          {CAMPUS_CONTACTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 100}>
              <article
                id={c.anchor}
                className={`flex h-full scroll-mt-28 flex-col border-t border-brass/30 pt-7 ${
                  i ? "lg:-ml-7 lg:border-l lg:border-l-sand lg:pl-7" : ""
                }`}
              >
                <Eyebrow>{c.label}</Eyebrow>
                <h3 className="mt-4 font-display text-[1.5rem] leading-[1.18] text-clay sm:text-[1.75rem]">
                  {c.name}
                </h3>
                <p className="mt-4 max-w-[42ch] text-[1.0625rem] leading-[1.75] text-pine/75 [text-wrap:pretty]">
                  {c.address}
                </p>
                <dl className="mt-6 flex-1">
                  <dt className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-brass lg:text-[0.66rem]">
                    Admissions and general office
                  </dt>
                  <dd className="mt-2 flex flex-col">
                    <a
                      href={`mailto:${c.email}`}
                      className="inline-flex min-h-11 items-center text-[1rem] font-bold text-clay transition-colors hover:text-brass lg:min-h-0 lg:py-1"
                    >
                      {c.email}
                    </a>
                    <a
                      href={`tel:${c.phone.replace(/[^0-9+]/g, "")}`}
                      className="inline-flex min-h-11 items-center text-[1rem] font-bold text-clay transition-colors hover:text-brass lg:min-h-0 lg:py-1 [font-variant-numeric:tabular-nums]"
                    >
                      {c.phone}
                    </a>
                  </dd>
                </dl>
                <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
                  {/* A plain anchor, not PrimaryCta: this leaves the site for
                      WhatsApp and has to keep target/rel, which the Link-based
                      component does not carry. Styling matches PrimaryCta. */}
                  <a
                    href={whatsappHref(`Hi! I would like to contact the ${c.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2.5 rounded-full bg-clay px-7 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-paper transition-transform hover:-translate-y-0.5 lg:min-h-0"
                  >
                    WhatsApp
                    <span aria-hidden>&rarr;</span>
                  </a>
                  <GoldLink label="Book a visit" href="/admissions/book-a-visit" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 rounded-[4px] border border-brass/30 bg-blush/45 p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-7 bg-brass" />
              <p className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-brass lg:text-[0.66rem]">
                Group contact
              </p>
            </div>
            <h3 className="mt-4 font-display text-[1.5rem] leading-[1.18] text-clay sm:text-[1.75rem]">
              Dalhousie Public School
            </h3>
            <p className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1">
              <a
                href={`mailto:${school.email}`}
                className="inline-flex min-h-11 items-center text-[1rem] font-bold text-clay transition-colors hover:text-brass lg:min-h-0"
              >
                {school.email}
              </a>
              <a
                href={`tel:${school.phoneRaw}`}
                className="inline-flex min-h-11 items-center text-[1rem] font-bold text-clay transition-colors hover:text-brass lg:min-h-0 [font-variant-numeric:tabular-nums]"
              >
                {school.phone}
              </a>
            </p>
            <p className="mt-3 max-w-[58ch] text-[0.95rem] leading-[1.7] text-pine/70">
              Office timings and department-specific routes are confirmed by the School office.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Route by purpose */}
      <section className="bg-paper">
        <div className={`${PAD} py-16 sm:py-20`}>
          <Eyebrow>By purpose</Eyebrow>
          <h2 className="mt-5 max-w-[26ch] font-display text-[1.85rem] leading-[1.14] text-clay sm:text-[2.35rem]">
            Department-specific contact.
          </h2>
          <div className="mt-11 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {routes.map((r, i) => (
              <Reveal key={r.label} delay={i * 70} className="h-full">
                {/* The whole column is the link, not just the line at the
                    bottom of it, and the rule over it goes gold on approach. */}
                <Link
                  href={r.href}
                  className="group flex h-full flex-col border-t border-sand pt-6 transition-colors duration-300 hover:border-brass"
                >
                  <div className="flex items-center gap-4">
                    <LineIcon name={r.icon} className="shrink-0 text-brass" size={40} />
                    <span
                      aria-hidden
                      className="font-display text-[1.7rem] leading-none text-brass/40 [font-variant-numeric:tabular-nums]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-[1.25rem] leading-[1.2] text-clay transition-colors duration-300 group-hover:text-brass">
                    {r.label}
                  </h3>
                  <p className="mt-3 flex-1 text-[1rem] leading-[1.7] text-pine/75">{r.body}</p>
                  <span className="mt-6 inline-flex min-h-11 items-center gap-2.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-clay lg:min-h-0 lg:text-[0.68rem]">
                    <span className="border-b border-current pb-1">{r.cta}</span>
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* General contact form */}
      <section id="form" className="bg-cream">
        <div className={`${PAD} py-16 sm:py-20`}>
          <div className="grid gap-x-14 gap-y-12 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <Eyebrow>General contact form</Eyebrow>
              <h2 className="mt-5 max-w-[22ch] font-display text-[1.85rem] leading-[1.14] text-clay sm:text-[2.35rem]">
                Send us a message and we will route it.
              </h2>
              <div className="mt-9">
                <EnquiryForm variant="contact" />
              </div>
            </div>
            {/* Sticky on desktop. The form runs past a thousand pixels and the
                aside is four lines, so ranged at the top it left most of the
                right-hand column empty for the whole scroll. Travelling with
                the form, it stays beside whatever field is being filled. */}
            <aside className="lg:pt-2">
              {/* The sticky element must be a direct child of the stretched
                  grid cell. Wrapped in Reveal it sat in a box only as tall as
                  its own four lines and had nowhere to travel, so it scrolled
                  away like static content. */}
              <div className="border-t border-brass/30 pt-7 lg:sticky lg:top-28">
                  <h3 className="font-display text-[1.3rem] leading-[1.2] text-clay">Privacy</h3>
                  <p className="mt-3 max-w-[46ch] text-[1rem] leading-[1.72] text-pine/75">
                    Your information is used to respond to the enquiry in accordance with the approved
                    privacy notice.
                  </p>
                  <div className="mt-5">
                    <GoldLink label="Read the privacy notice" href="/policies-disclosures" />
                  </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
