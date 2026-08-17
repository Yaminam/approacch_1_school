"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import {
  feeScope,
  feeGrades,
  feeRecords,
  feeRegistration,
  feeInstalments,
  feeConcessions,
  feeNotes,
  feePayment,
  type FeeModel,
} from "@/lib/content";

/* A structured comparison experience, not a static PDF dump. Campus, grade and
   residential format select an approved fee record.

   Only the New Chandigarh 2026 schedules are approved for publication. Every
   other combination says so plainly and routes to admissions rather than
   inventing a figure or re-publishing a superseded sheet. */

const CAMPUSES = ["New Chandigarh Campus", "Dalhousie Campus"] as const;
const MODELS: FeeModel[] = ["Boarding", "Day Boarding"];

const INCLUDED = [
  "Tuition for the academic year",
  "Boarding and lodging for residential students",
  "Day boarding facilities for day boarders",
  "Regular academic support within the designed day",
  "House, pastoral and mentor care",
];

const EXCLUDED = [
  "Clothing and uniforms",
  "Equipment",
  "Transport",
  "Books and stationery",
  "Specified miscellaneous expenses, charged as actuals",
  "Refundable deposits, shown separately",
];

/* Declared at module scope. Defining it inside FeeSelector would create a new
   component type on every render, which remounts the select and drops focus. */
function Select({
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
}) {
  return (
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
}

export default function FeeSelector() {
  const [campus, setCampus] = useState<string>(CAMPUSES[0]);
  const [grade, setGrade] = useState<string>(feeGrades[0]);
  const [model, setModel] = useState<FeeModel>(MODELS[0]);

  const record = feeRecords[model].find((r) => r.grades === grade);
  const published = campus === "New Chandigarh Campus" && !!record;

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
          <div className="rounded-3xl border border-pine/12 bg-paper p-7 soft-shadow-sm sm:p-9">
            <span className="eyebrow text-clay">Select a fee record</span>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <Select id="fee-campus" label="Select your campus" value={campus} onChange={setCampus} options={CAMPUSES} />
              <Select id="fee-grade" label="Select the child's grade" value={grade} onChange={setGrade} options={feeGrades} />
              <Select
                id="fee-model"
                label="Boarder or day boarder"
                value={model}
                onChange={(v) => setModel(v as FeeModel)}
                options={MODELS}
              />
            </div>

            <div className="mt-8 border-t hair pt-8">
              {published && record ? (
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-blush px-4 py-1.5 text-sm font-bold text-clay">{campus}</span>
                    <span className="rounded-full bg-blush px-4 py-1.5 text-sm font-bold text-clay">{record.grades}</span>
                    <span className="rounded-full bg-blush px-4 py-1.5 text-sm font-bold text-clay">{model}</span>
                    <span className="rounded-full border border-brass/40 px-4 py-1.5 text-sm font-bold text-brass">
                      Effective {feeScope.year}
                    </span>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {record.components.map((c) => (
                      <div key={c.label} className="rounded-2xl border border-pine/12 bg-cream p-6">
                        <p className="text-sm font-bold uppercase tracking-[0.1em] text-mist">{c.label}</p>
                        <p className="mt-2 font-display text-3xl text-clay [font-variant-numeric:tabular-nums]">
                          Rs. {c.amount}
                        </p>
                        {c.note && <p className="mt-1.5 text-sm text-mist">{c.note}</p>}
                      </div>
                    ))}
                  </div>

                  <p className="mt-8 text-sm leading-relaxed text-mist">
                    The registration fee for {model.toLowerCase()} is Rs. {feeRegistration[model]}, non-refundable,
                    and is charged before this schedule applies. Figures reflect the New Chandigarh Fee &amp; Dues
                    schedules for {feeScope.year} supplied by the School.
                  </p>
                </div>
              ) : (
                <div>
                  <span className="eyebrow text-brass">Issued by the admissions office</span>
                  <h3 className="mt-3 text-2xl text-pine">
                    The {campus} schedule is confirmed directly with admissions.
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-mist">
                    We publish a figure only once it has been formally approved for the current year, so
                    the approved 2026/27 schedule for {campus} is shared by the admissions team against the
                    grade and residential format that apply to your child.
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
                <h3 className="text-2xl text-pine">What is charged separately</h3>
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

      {/* Payment schedule and concessions */}
      <section className="bg-blush">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
          <span className="eyebrow text-clay">Payment schedule</span>
          <h2 className="mt-5 max-w-2xl text-3xl leading-[1.05] text-pine sm:text-4xl">
            Paid in three instalments.
          </h2>
          <div className="mt-11 grid gap-8 lg:grid-cols-3">
            {feeInstalments.map((t, i) => (
              <Reveal key={t.when} delay={i * 100}>
                <div className="h-full rounded-2xl border border-pine/12 bg-paper p-7">
                  <span className="font-display text-2xl text-brass [font-variant-numeric:tabular-nums]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl text-pine">{t.when}</h3>
                  <p className="mt-2.5 leading-relaxed text-mist">{t.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <h2 className="mt-16 max-w-2xl text-3xl leading-[1.05] text-pine sm:text-4xl">Concessions</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {feeConcessions.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="h-full border-t-2 border-brass/35 pt-5">
                  <h3 className="text-xl text-pine">{c.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-mist">{c.body}</p>
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
