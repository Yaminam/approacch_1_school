"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { PAD, Eyebrow, PrimaryCta, GoldLink } from "./sections";
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
   inventing a figure or re-publishing a superseded sheet.

   Rebuilt onto the heritage editorial system. This page carried more of the
   old design system than any other — rounded-3xl panels with drop shadows,
   2xl cards inside them, and the mist grey used for every secondary line — so
   beside the converted inner pages it read as a different site. Money is the
   one thing on the site a parent will read closely, so the treatment here is
   the plainest in the system: hairlines, tabular figures set in the display
   face, and no card anywhere. */

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
      <label
        htmlFor={id}
        className="block text-[0.75rem] font-bold uppercase tracking-[0.16em] text-brass lg:text-[0.68rem]"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 min-h-11 w-full rounded-[3px] border border-sand bg-paper px-4 py-3 text-[1rem] text-pine outline-none transition-colors focus:border-brass"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Chip({ children, outline = false }: { children: React.ReactNode; outline?: boolean }) {
  return (
    <span
      className={`rounded-full px-4 py-1.5 text-[0.78rem] font-bold lg:text-[0.74rem] ${
        outline ? "border border-brass/45 text-brass" : "border border-clay/25 bg-blush/70 text-clay"
      }`}
    >
      {children}
    </span>
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
        <div className={`${PAD} py-16 sm:py-20`}>
          <div className="rounded-[4px] border border-brass/30 bg-blush/40 p-6 sm:p-9">
            <Eyebrow>Select a fee record</Eyebrow>
            <div className="mt-7 grid gap-6 md:grid-cols-3">
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

            <div className="mt-9 border-t border-brass/25 pt-9">
              {published && record ? (
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Chip>{campus}</Chip>
                    <Chip>{record.grades}</Chip>
                    <Chip>{model}</Chip>
                    <Chip outline>Effective {feeScope.year}</Chip>
                  </div>

                  {/* The figures carry themselves. Boxing each one in its own
                      bordered tile made three numbers look like a pricing page;
                      a rule above each is enough to separate them. */}
                  <div className="mt-9 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {record.components.map((c) => (
                      <div key={c.label} className="border-t border-brass/30 pt-5">
                        <p className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-brass lg:text-[0.66rem]">
                          {c.label}
                        </p>
                        <p className="mt-3 font-display text-[2rem] leading-none text-clay [font-variant-numeric:tabular-nums] sm:text-[2.3rem]">
                          Rs. {c.amount}
                        </p>
                        {c.note && <p className="mt-2.5 text-[0.9rem] text-pine/70">{c.note}</p>}
                      </div>
                    ))}
                  </div>

                  <p className="mt-9 max-w-[70ch] text-[0.95rem] leading-[1.75] text-pine/70">
                    The registration fee for {model.toLowerCase()} is Rs. {feeRegistration[model]}, non-refundable,
                    and is charged before this schedule applies. Figures reflect the New Chandigarh Fee &amp; Dues
                    schedules for {feeScope.year} supplied by the School.
                  </p>
                </div>
              ) : (
                <div>
                  <Eyebrow>Issued by the admissions office</Eyebrow>
                  <h3 className="mt-4 max-w-[26ch] font-display text-[1.5rem] leading-[1.18] text-clay sm:text-[1.8rem]">
                    The {campus} schedule is confirmed directly with admissions.
                  </h3>
                  <p className="mt-4 max-w-[62ch] text-[1.0625rem] leading-[1.75] text-pine/75 [text-wrap:pretty]">
                    We publish a figure only once it has been formally approved for the current year, so
                    the approved 2026/27 schedule for {campus} is shared by the admissions team against the
                    grade and residential format that apply to your child.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                    <PrimaryCta label="Request this fee schedule" href="/admissions/enquire" />
                    <GoldLink label="Book a visit" href="/admissions/book-a-visit" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Included / excluded */}
      <section className="bg-paper">
        <div className={`${PAD} py-16 sm:py-20`}>
          <div className="grid gap-x-14 gap-y-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <h3 className="font-display text-[1.5rem] leading-[1.2] text-clay sm:text-[1.8rem]">
                  What is included
                </h3>
                <ul className="mt-7">
                  {INCLUDED.map((i) => (
                    <li key={i} className="flex items-start gap-4 border-t border-sand py-4">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                      <span className="text-[1.0625rem] leading-[1.7] text-pine/80">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={110}>
              <div>
                <h3 className="font-display text-[1.5rem] leading-[1.2] text-clay sm:text-[1.8rem]">
                  What is charged separately
                </h3>
                <ul className="mt-7">
                  {EXCLUDED.map((i) => (
                    <li key={i} className="flex items-start gap-4 border-t border-sand py-4">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay/40" />
                      <span className="text-[1.0625rem] leading-[1.7] text-pine/70">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Payment schedule and concessions */}
      <section className="bg-blush/50">
        <div className={`${PAD} py-16 sm:py-20`}>
          <Eyebrow>Payment schedule</Eyebrow>
          <h2 className="mt-5 max-w-[22ch] font-display text-[1.85rem] leading-[1.14] text-clay sm:text-[2.35rem]">
            Paid in three instalments.
          </h2>
          <div className="mt-10 grid gap-x-14 gap-y-10 lg:grid-cols-3">
            {feeInstalments.map((t, i) => (
              <Reveal key={t.when} delay={i * 100}>
                <div className="h-full border-t border-brass/30 pt-6">
                  <span
                    aria-hidden
                    className="font-display text-[2rem] leading-none text-brass/45 [font-variant-numeric:tabular-nums]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-[1.3rem] leading-[1.2] text-clay">{t.when}</h3>
                  <p className="mt-3 text-[1rem] leading-[1.72] text-pine/75">{t.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <h2 className="mt-16 max-w-[22ch] font-display text-[1.85rem] leading-[1.14] text-clay sm:text-[2.35rem]">
            Concessions
          </h2>
          <div className="mt-8 grid gap-x-14 gap-y-10 lg:grid-cols-3">
            {feeConcessions.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="h-full border-t border-sand pt-5">
                  <h3 className="font-display text-[1.3rem] leading-[1.2] text-clay">{c.title}</h3>
                  <p className="mt-3 text-[1rem] leading-[1.72] text-pine/75">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Notes + payment + refund */}
      <section className="bg-cream">
        <div className={`${PAD} py-16 sm:py-20`}>
          <div className="grid gap-x-14 gap-y-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Eyebrow>Important information</Eyebrow>
              <h2 className="mt-5 font-display text-[1.85rem] leading-[1.14] text-clay sm:text-[2.35rem]">
                The details, plainly.
              </h2>
              <ul className="mt-8">
                {feeNotes.map((n) => (
                  <li key={n} className="flex items-start gap-4 border-t border-sand py-4">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                    <span className="text-[1.0625rem] leading-[1.7] text-pine/75">{n}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-brass/30 pt-6">
                <h3 className="font-display text-[1.3rem] leading-[1.2] text-clay">Refund and withdrawal</h3>
                <p className="mt-3 max-w-[62ch] text-[1rem] leading-[1.72] text-pine/75">
                  View the current approved policy for complete refund, withdrawal and notice-period terms.
                </p>
                <div className="mt-5">
                  <GoldLink label="Policies & disclosures" href="/policies-disclosures" />
                </div>
              </div>
            </div>

            {/* Sticky, and a direct child of the stretched grid cell. The
                notes column runs far past this panel, so ranged at the top it
                left 450px of empty ivory beside it; inside a Reveal wrapper
                the sticky had a box only as tall as itself and nowhere to
                travel. */}
            <div className="lg:sticky lg:top-28">
              <div className="rounded-[4px] border border-brass/30 bg-blush/40 p-7 sm:p-8">
                <Eyebrow>How to pay</Eyebrow>
                <h3 className="mt-4 font-display text-[1.4rem] leading-[1.2] text-clay sm:text-[1.6rem]">
                  Bank transfer, UPI or QR.
                </h3>
                <dl className="mt-7">
                  <div className="border-t border-brass/25 py-3.5">
                    <dt className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-brass lg:text-[0.66rem]">
                      Bank
                    </dt>
                    <dd className="mt-1.5 text-[1rem] text-pine/80">{feePayment.bank}</dd>
                  </div>
                  <div className="border-t border-brass/25 py-3.5">
                    <dt className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-brass lg:text-[0.66rem]">
                      Account number
                    </dt>
                    <dd className="mt-1.5 text-[1rem] text-pine/80 [font-variant-numeric:tabular-nums]">
                      {feePayment.account}
                    </dd>
                  </div>
                  <div className="border-t border-brass/25 py-3.5">
                    <dt className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-brass lg:text-[0.66rem]">
                      IFSC
                    </dt>
                    <dd className="mt-1.5 text-[1rem] text-pine/80">{feePayment.ifsc}</dd>
                  </div>
                </dl>
                <p className="mt-5 text-[0.95rem] leading-[1.7] text-pine/70">{feePayment.note}</p>
                <a
                  href={`mailto:${feePayment.email}`}
                  className="mt-4 inline-flex min-h-11 items-center text-[0.95rem] font-bold text-clay transition-colors hover:text-brass lg:min-h-0"
                >
                  {feePayment.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
