import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { SectionHead, Section } from "@/components/ui";
import {
  feeScope,
  feeOneTime,
  feeAnnual,
  feeInstalments,
  feeNotes,
  feePayment,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Fees, Dalhousie Public School",
  description:
    "Fees and dues for boarders at the Dalhousie Campus, KG to Class X, for 2026, with the instalment schedule and payment details.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Fees"
        title="Clear and fair,"
        emphasis="no surprises."
        subtitle="The published fees and dues for boarders at our Dalhousie campus, KG to Class X, for 2026."
        image="/images/campus-wide.jpg"
      />

      <Section tone="cream">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blush px-4 py-1.5 text-sm font-bold text-clay">
              {feeScope.campus}
            </span>
            <span className="rounded-full bg-blush px-4 py-1.5 text-sm font-bold text-clay">
              {feeScope.applies}
            </span>
            <span className="rounded-full bg-blush px-4 py-1.5 text-sm font-bold text-clay">
              {feeScope.year}
            </span>
          </div>
        </Reveal>

        {/* Annual fees */}
        <div className="mt-12">
          <h2 className="text-2xl text-pine sm:text-3xl">Annual fees</h2>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-pine/12 bg-paper">
            <table className="w-full min-w-[520px] text-left">
              <thead>
                <tr className="border-b border-pine/10 text-xs uppercase tracking-[0.12em] text-mist">
                  <th className="px-6 py-4 font-bold">Class</th>
                  <th className="px-6 py-4 font-bold">Tuition fee</th>
                  <th className="px-6 py-4 font-bold">Board &amp; lodging</th>
                </tr>
              </thead>
              <tbody>
                {feeAnnual.map((r) => (
                  <tr key={r.grade} className="border-b border-pine/10 last:border-0">
                    <td className="px-6 py-4 font-semibold text-pine">{r.grade}</td>
                    <td className="px-6 py-4 text-mist [font-variant-numeric:tabular-nums]">Rs. {r.tuition}</td>
                    <td className="px-6 py-4 text-mist [font-variant-numeric:tabular-nums]">Rs. {r.boarding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* One-time */}
        <div className="mt-14">
          <h2 className="text-2xl text-pine sm:text-3xl">One-time charges</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {feeOneTime.map((o, i) => (
              <Reveal key={o.label} delay={i * 70}>
                <div className="h-full rounded-2xl border border-pine/12 bg-paper p-6">
                  <div className="font-display text-2xl text-clay [font-variant-numeric:tabular-nums]">
                    Rs. {o.amount}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{o.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Instalments */}
      <Section tone="blush">
        <SectionHead
          eyebrow="Payment schedule"
          title="Paid in three instalments."
          intro="Tuition and board and lodging are spread across the year. All other dues are cleared in the first instalment."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {feeInstalments.map((t, i) => (
            <Reveal key={t.grades} delay={i * 100}>
              <div className="h-full rounded-2xl border border-pine/12 bg-paper p-7">
                <h3 className="text-xl text-pine">{t.grades}</h3>
                <div className="mt-5 space-y-5">
                  {t.rows.map((r) => (
                    <div key={r.when} className="border-t border-pine/10 pt-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span className="font-bold text-pine">{r.when}</span>
                        <span className="font-display text-xl text-clay [font-variant-numeric:tabular-nums]">
                          Rs. {r.total}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-mist">{r.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Notes + payment */}
      <Section tone="cream">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHead eyebrow="Good to know" title="The details, plainly." />
            <ul className="mt-10 space-y-4">
              {feeNotes.map((n) => (
                <li key={n} className="flex items-start gap-3.5">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                  <span className="leading-relaxed text-mist">{n}</span>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-pine/12 bg-paper p-8 soft-shadow-sm">
              <span className="eyebrow text-clay">How to pay</span>
              <h3 className="mt-4 text-2xl text-pine">Bank transfer, UPI or QR.</h3>
              <dl className="mt-6 space-y-3 text-sm">
                <div>
                  <dt className="font-bold text-pine">Bank</dt>
                  <dd className="text-mist">{feePayment.bank}</dd>
                </div>
                <div>
                  <dt className="font-bold text-pine">Account number</dt>
                  <dd className="text-mist [font-variant-numeric:tabular-nums]">{feePayment.account}</dd>
                </div>
                <div>
                  <dt className="font-bold text-pine">IFSC</dt>
                  <dd className="text-mist">{feePayment.ifsc}</dd>
                </div>
              </dl>
              <p className="mt-5 text-sm leading-relaxed text-mist">{feePayment.note}</p>
              <div className="mt-5 space-y-1 text-sm">
                <a href={`mailto:${feePayment.email}`} className="block font-bold text-clay hover:text-pine">
                  {feePayment.email}
                </a>
                <span className="block text-mist">WhatsApp {feePayment.whatsapp}</span>
              </div>

              <a
                href={feeScope.pdf}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-paper transition-transform hover:-translate-y-0.5"
              >
                Download the fee structure
              </a>
            </div>
          </Reveal>
        </div>

        <p className="mt-12 max-w-3xl text-sm leading-relaxed text-mist">
          These figures are the published fees and dues for boarders at the Dalhousie
          campus, KG to Class X, for 2026. Fees for Classes XI and XII, and for the
          New Chandigarh campus, are issued separately. Please ask the admissions
          office for the schedule that applies to your child.
        </p>
      </Section>

      <CTA />
    </main>
  );
}
