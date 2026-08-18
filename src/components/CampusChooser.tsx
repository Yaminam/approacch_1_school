"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { campuses, whatsappHref } from "@/lib/content";

const campusHref: Record<string, string> = {
  dalhousie: "/campuses/dalhousie",
  chandigarh: "/campuses/new-chandigarh",
};

type Campus = "dalhousie" | "chandigarh" | "both";

/* The six-question fit quiz from the reviewed content. Every answer carries
   points towards A (Dalhousie Campus, the Mountain Campus) and B (New
   Chandigarh Campus, the Modern Campus). The higher total suggests the closer
   fit; a close score means either campus could work.

   This is a guided fit quiz, not a test. There are no right or wrong answers,
   which is why no option is ever worth nothing on both sides. */

type Option = { label: string; a: number; b: number };
type Question = { q: string; options: Option[] };

const QUESTIONS: Question[] = [
  {
    q: "What stage is your child at?",
    options: [
      { label: "Toddler or Early Years", a: 2, b: 1 },
      { label: "Primary Years", a: 2, b: 2 },
      { label: "Middle School", a: 1, b: 2 },
      { label: "Senior School", a: 1, b: 3 },
    ],
  },
  {
    q: "What kind of school rhythm are you looking for?",
    options: [
      { label: "A deeply immersive residential experience", a: 3, b: 0 },
      { label: "A more flexible campus experience", a: 1, b: 3 },
      { label: "I am open to both", a: 2, b: 2 },
    ],
  },
  {
    q: "What would you most like school to build in your child right now?",
    options: [
      { label: "Greater independence and discipline", a: 3, b: 1 },
      { label: "Confidence and communication", a: 1, b: 3 },
      { label: "Academic direction and preparation", a: 2, b: 2 },
      { label: "Physical strength and resilience", a: 3, b: 1 },
      { label: "Wider exposure and future readiness", a: 1, b: 3 },
      { label: "A balance of all of these", a: 2, b: 2 },
    ],
  },
  {
    q: "Which environment feels closer to what your child needs?",
    options: [
      { label: "A quieter, more immersive environment away from urban distraction", a: 3, b: 1 },
      { label: "A contemporary environment with greater access, choice and flexibility", a: 1, b: 3 },
      { label: "I am not sure yet", a: 2, b: 2 },
    ],
  },
  {
    q: "How ready is your child for greater independence?",
    options: [
      { label: "Very ready", a: 3, b: 2 },
      { label: "Ready with support", a: 2, b: 2 },
      { label: "Still developing", a: 1, b: 3 },
      { label: "Not sure", a: 2, b: 2 },
    ],
  },
  {
    q: "What matters most when you think about the next few years?",
    options: [
      { label: "A true residential-school experience", a: 3, b: 1 },
      { label: "Academic choice and future pathways", a: 1, b: 3 },
      { label: "Defence-oriented preparation", a: 3, b: 1 },
      { label: "Confidence, leadership and exposure", a: 1, b: 3 },
      { label: "Strong academics without a second-shift childhood", a: 1, b: 3 },
      { label: "All-round development within one environment", a: 2, b: 2 },
    ],
  },
];

const TOTAL_QUESTIONS = QUESTIONS.length;

/* Within a point of each other and the decision is about lived experience,
   not preference. Anything wider is a genuine lean. */
const CLOSE_MARGIN = 1;

const RESULTS: Record<Campus, { heading: string; reason: string; why: string[] }> = {
  dalhousie: {
    heading: "Your responses point towards the Mountain Campus.",
    reason:
      "Your responses suggest a stronger alignment with immersive residential life, structured routine, independence, physical resilience and close-knit community living. Dalhousie Campus brings these together through full residential education, CBSE learning, house culture, mountain discipline, outdoor exposure and pastoral care.",
    why: [
      "You value deeper residential immersion",
      "Independence and self-management are priorities",
      "You prefer a structured, distraction-free environment",
      "Physical strength and resilience matter",
      "You are open to defence-oriented pathways",
    ],
  },
  chandigarh: {
    heading: "Your responses point towards the Modern Campus.",
    reason:
      "Your responses suggest a stronger alignment with academic choice, communication, flexibility, exposure and future readiness within a contemporary campus environment. New Chandigarh Campus brings these together while maintaining the Dalhousie philosophy of whole-child development.",
    why: [
      "You value academic choice and flexibility",
      "Confidence and communication are priorities",
      "You want wider exposure and future readiness",
      "You prefer a contemporary learning environment",
      "You want all-round development in one place",
    ],
  },
  both: {
    heading: "Both campuses could work for your family.",
    reason:
      "Your scores are close. This suggests your priorities are balanced across both residential immersion and contemporary flexibility. That is a strong position: it means the decision is less about better and more about fit of experience.",
    why: [
      "Your child may thrive in either environment",
      "The decision depends on lived experience, not just preference",
      "A campus visit will be especially valuable",
    ],
  },
};

export default function CampusChooser() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Option[]>([]);

  const done = step >= TOTAL_QUESTIONS;
  const question = done ? undefined : QUESTIONS[step];

  function choose(o: Option) {
    setAnswers((prev) => [...prev.slice(0, step), o]);
    setStep(step + 1);
  }
  function back() {
    if (step === 0) return;
    setStep(step - 1);
    setAnswers((prev) => prev.slice(0, -1));
  }
  function restart() {
    setStep(0);
    setAnswers([]);
  }

  const progress = done ? 1 : Math.min(step / TOTAL_QUESTIONS, 0.95);

  const a = answers.reduce((n, o) => n + o.a, 0);
  const b = answers.reduce((n, o) => n + o.b, 0);
  const winner: Campus =
    Math.abs(a - b) <= CLOSE_MARGIN ? "both" : a > b ? "dalhousie" : "chandigarh";

  return (
    <section id="chooser" className="bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="text-center">
          <div className="flex justify-center">
            <span className="flex items-center gap-3">
              <span className="block text-[0.75rem] font-bold uppercase tracking-[0.22em] text-brass lg:text-[0.68rem]">Find your campus</span>
            </span>
          </div>
          <h2 className="mt-6 text-4xl leading-[1.02] text-pine sm:text-5xl">
            Which Dalhousie experience fits your child?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-[1.75] text-pine/75 [text-wrap:pretty]">
            Answer six questions about your child and your family&apos;s priorities. This is a
            guided fit quiz, not a test. There are no right or wrong answers.
          </p>
        </div>

        <div className="mt-12 rounded-[4px] border border-brass/30 bg-cream p-6 sm:p-10">
          {question ? (
            <div>
              {/* progress */}
              <div className="mb-8 flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-sand">
                  <div
                    className="h-full rounded-full bg-clay transition-all duration-500"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
                <span className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-brass [font-variant-numeric:tabular-nums]">
                  {step + 1} / {TOTAL_QUESTIONS}
                </span>
              </div>

              <h3 key={step} className="pop font-display text-[1.5rem] leading-[1.2] text-clay sm:text-[1.9rem]">
                {question.q}
              </h3>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {question.options.map((o, oi) => (
                  <button
                    key={o.label}
                    onClick={() => choose(o)}
                    className="group flex min-h-11 items-center gap-4 rounded-[3px] border border-sand bg-paper p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-brass hover:bg-blush/50"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-sage-soft font-display text-lg font-semibold text-pine transition-colors group-hover:border-clay group-hover:bg-clay group-hover:text-paper">
                      {String.fromCharCode(65 + oi)}
                    </span>
                    <span className="font-semibold leading-snug text-pine">{o.label}</span>
                  </button>
                ))}
              </div>

              {step > 0 && (
                <button
                  onClick={back}
                  className="mt-7 inline-flex min-h-11 items-center text-[0.85rem] font-bold text-pine/70 transition-colors hover:text-clay lg:min-h-0"
                >
                  &larr; Back
                </button>
              )}
            </div>
          ) : (
            <Result winner={winner} onRestart={restart} />
          )}
        </div>
      </div>
    </section>
  );
}

function Result({ winner, onRestart }: { winner: Campus; onRestart: () => void }) {
  const showBoth = winner === "both";
  const list = showBoth ? campuses : campuses.filter((c) => c.id === winner);
  const r = RESULTS[winner];

  return (
    <div className="pop">
      <div className="text-center">
        <span className="block text-[0.75rem] font-bold uppercase tracking-[0.22em] text-brass lg:text-[0.68rem]">Your result</span>
        <h3 className="mt-4 font-display text-[1.5rem] leading-[1.2] text-clay sm:text-[1.9rem]">{r.heading}</h3>
        <p className="mx-auto mt-4 max-w-xl text-[1.0625rem] leading-[1.75] text-pine/75 [text-wrap:pretty]">{r.reason}</p>
      </div>

      <div className="mx-auto mt-8 max-w-md text-left">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-brass">
          {showBoth ? "What this means" : "Why it may suit your child"}
        </p>
        <ul className="mt-4 space-y-2.5">
          {r.why.map((w) => (
            <li key={w} className="flex items-start gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
              <span className="text-[1rem] leading-[1.7] text-pine/75">{w}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`mt-8 grid gap-5 ${showBoth ? "sm:grid-cols-2" : ""}`}>
        {list.map((c) => (
          <div
            key={c.id}
            className="overflow-hidden rounded-[3px] border border-sand bg-paper text-left"
          >
            <div className="relative h-44">
              <Image
                src={c.img}
                alt={c.name}
                fill
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-xs font-bold text-pine">
                {c.kind}
              </span>
            </div>
            <div className="p-6">
              <h4 className="font-display text-[1.35rem] leading-[1.2] text-clay">{c.name}</h4>
              <p className="mt-2.5 text-[0.95rem] leading-[1.7] text-pine/75">{c.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={campusHref[c.id]}
                  className="inline-block rounded-full bg-clay px-5 py-2.5 text-sm font-bold text-paper transition-transform hover:-translate-y-0.5"
                >
                  Explore {c.name.replace(/ Campus$/, "")} &rarr;
                </Link>
                <a
                  href={whatsappHref(
                    `Hi! The campus finder suggested ${c.name}. I'd love to know more about admission.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-full border border-pine/25 px-5 py-2.5 text-sm font-bold text-pine transition-colors hover:border-clay hover:text-clay"
                >
                  Enquire
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-[0.95rem] leading-[1.7] text-pine/70">
        Still have questions? This quiz guides you. Conversation completes it, and our admissions
        team can help interpret the result with you.
      </p>

      <div className="mt-5 text-center">
        <button
          onClick={onRestart}
          className="text-sm font-bold text-pine underline decoration-clay decoration-2 underline-offset-4 hover:text-clay"
        >
          Take the quiz again
        </button>
      </div>
    </div>
  );
}
