"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import {
  feeScope,
  feeAnnual,
  feeOneTime,
  feeInstalments,
  feeNotes,
  feePayment,
} from "@/lib/content";

/* Page 33 of the copy deck: "A structured comparison experience, not a static
   PDF dump." Campus, grade and residential model select an approved fee record.

   Only one record is currently approved for publication: Dalhousie Campus,
   boarders, KG to Class X, 2026. Every other combination says so plainly and
   routes to admissions rather than inventing a figure. */

const CAMPUSES = ["Dalhousie Campus", "New Chandigarh Campus"] as const;
const MODELS = ["Full residential", "Weekly boarding", "Day-boarding", "Day school"] as const;

const INCLUDED = [
  "Tuition for the academic year",
  "Board and lodging for residential students",
  "Meals as per the campus dining schedule",
  "Regular academic support within the designed day",
  "House, pastoral and mentor care",
];

const EXCLUDED = [
  "Uniform and personal kit",
  "Books and stationery",
  "Board examination fees",
  "Travel, excursions and expeditions",
  "Specialist and elective programmes",
  "Refundable deposits, shown separately",
];

export default function FeeSelector() {
  const [campus, setCampus] = useState<string>(CAMPUSES[0]);
  const [grade, setGrade] = useState<string>(feeAnnual[0].grade);
  const [model, setModel] = useState<string>(MODELS[0]);

  const row = feeAnnual.find((r) => r.grade === grade);
  const published =
    campus === "Dalhousie Campus" && (model === "Full residential" || model === "Weekly boarding") && !!row;

  const Select = ({
    id,
    label,
    value,
    onChange,
    options,
  }: {
    id: string;
    label: string;
    value: string;
    onChange: (v: string) => void;
    options: readonly string[];
  }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-pine">{label}</label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-pine/20 bg-paper px-4 py-3 text-pine outline-none transition-colors focus:border-clay"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
          <div className="rounded-3xl border border-pine/12 bg-paper p-7 soft-shadow-sm sm:p-9">
            <span className="eyebrow text-clay">Select a fee record</span>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <Select id="fee-campus" label="Select your campus" value={campus} onChange={setCampus} options={CAMPUSES} />
              <Select id="fee-grade" label="Select the child's grade" value={grade} onChange={setGrade} options={feeAnnual.map((r) => r.grade)} />
              <Select id="fee-model" label="Select the residential model" value={model} onChange={setModel} options={MODELS} />
            </div>

            <div className="mt-8 border-t hair pt-8">
              {published && row ? (
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-blush px-4 py-1.5 text-sm font-bold text-clay">{campus}</span>
                    <span className="rounded-full bg-blush px-4 py-1.5 text-sm font-bold text-clay">{row.grade}</span>
                    <span className="rounded-full bg-blush px-4 py-1.5 text-sm font-bold text-clay">{model}</span>
                    <span className="rounded-full border border-brass/40 px-4 py-1.5 text-sm font-bold text-brass">
                      Effective {feeScope.year}
                    </span>
                  </div>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-2xl border border-pine/12 bg-cream p-6">
                      <p className="text-sm font-bold uppercase tracking-[0.1em] text-mist">Tuition fee</p>
                      <p className="mt-2 font-display text-3xl text-clay [font-variant-numeric:tabular-nums]">Rs. {row.tuition}</p>
                    </div>
                    <div className="rounded-2xl border border-pine/12 bg-cream p-6">
                      <p className="text-sm font-bold uppercase tracking-[0.1em] text-mist">Board &amp; lodging</p>
                      <p className="mt-2 font-display text-3xl text-clay [font-variant-numeric:tabular-nums]">Rs. {row.boarding}</p>
                    </div>
                  </div>

                  <h3 className="mt-10 text-xl text-pine">One-time charges</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {feeOneTime.map((o) => (
                      <div key={o.label} className="rounded-2xl border border-pine/12 p-5">
                        <div className="font-display text-xl text-clay [font-variant-numeric:tabular-nums]">Rs. {o.amount}</div>
                        <p className="mt-1.5 text-sm leading-relaxed text-mist">{o.label}</p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-8 text-sm leading-relaxed text-mist">
                    This is the published record for boarders at the Dalhousie campus, {feeScope.applies},
                    for {feeScope.year}.{" "}
                    <a href={feeScope.pdf} target="_blank" rel="noreferrer" className="font-bold text-clay hover:text-pine">
                      Download the full fee structure
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <div>
                  <span className="eyebrow text-brass">Not published online</span>
                  <h3 className="mt-3 text-2xl text-pine">
                    The schedule for this combination is issued by the admissions office.
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-mist">
                    Fees for {campus}
                    {model !== "Full residential" && ` on the ${model.toLowerCase()} model`} are confirmed
                    against current availability for {grade}. We publish a figure only once it is formally
                    approved, so ask admissions for the schedule that applies to your child.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/admissions/enquire"
                      className="rounded-full bg-clay px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-transform hover:-translate-y-0.5"
                    >
                      Request this fee schedule
                    </Link>
                    <Link
                      href="/admissions/book-a-visit"
                      className="rounded-full border-2 border-pine px-7 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-pine transition-colors hover:border-clay hover:text-clay"
                    >
                      Book a visit
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Included / excluded */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <h3 className="text-2xl text-pine">What is included</h3>
                <ul className="mt-6 space-y-3.5">
                  {INCLUDED.map((i) => (
                    <li key={i} className="flex items-start gap-3.5 border-t hair pt-3.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                      <span className="leading-relaxed text-pine">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={110}>
              <div>
                <h3 className="text-2xl text-pine">What is not included</h3>
                <ul className="mt-6 space-y-3.5">
                  {EXCLUDED.map((i) => (
                    <li key={i} className="flex items-start gap-3.5 border-t hair pt-3.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay/50" />
                      <span className="leading-relaxed text-mist">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Payment schedule */}
      <section className="bg-blush">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
          <span className="eyebrow text-clay">Payment schedule</span>
          <h2 className="mt-5 max-w-2xl text-3xl leading-[1.05] text-pine sm:text-4xl">
            Paid in three instalments.
          </h2>
          <div className="mt-11 grid gap-8 lg:grid-cols-2">
            {feeInstalments.map((t, i) => (
              <Reveal key={t.grades} delay={i * 100}>
                <div className="h-full rounded-2xl border border-pine/12 bg-paper p-7">
                  <h3 className="text-xl text-pine">{t.grades}</h3>
                  <div className="mt-5 space-y-5">
                    {t.rows.map((r) => (
                      <div key={r.when} className="border-t border-pine/10 pt-4">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <span className="font-bold text-pine">{r.when}</span>
                          <span className="font-display text-xl text-clay [font-variant-numeric:tabular-nums]">Rs. {r.total}</span>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-mist">{r.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Notes + payment + refund */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="eyebrow text-clay">Important information</span>
              <h2 className="mt-5 text-3xl leading-[1.05] text-pine sm:text-4xl">The details, plainly.</h2>
              <ul className="mt-9 space-y-4">
                {feeNotes.map((n) => (
                  <li key={n} className="flex items-start gap-3.5">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                    <span className="leading-relaxed text-mist">{n}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t hair pt-6">
                <h3 className="text-xl text-pine">Refund and withdrawal</h3>
                <p className="mt-2.5 leading-relaxed text-mist">
                  View the current approved policy for complete refund, withdrawal and notice-period terms.
                </p>
                <Link href="/policies-disclosures" className="mt-4 inline-block text-sm font-bold uppercase tracking-[0.1em] text-clay hover:text-pine">
                  Policies &amp; disclosures &rarr;
                </Link>
              </div>
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
                <a href={`mailto:${feePayment.email}`} className="mt-4 block text-sm font-bold text-clay hover:text-pine">
                  {feePayment.email}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
