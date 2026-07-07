"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { campuses, whatsappHref } from "@/lib/content";

const campusHref: Record<string, string> = {
  dalhousie: "/campuses/dalhousie",
  chandigarh: "/campuses/new-chandigarh",
};

type Pick = "dalhousie" | "chandigarh";

type Question = {
  q: string;
  options: { label: string; pick: Pick }[];
};

const questions: Question[] = [
  {
    q: "What setting do you picture for your child?",
    options: [
      { label: "High in the alpine mountains, fully immersed in nature", pick: "dalhousie" },
      { label: "A modern campus near the city, well connected", pick: "chandigarh" },
    ],
  },
  {
    q: "How would you like boarding to work?",
    options: [
      { label: "Full residential boarding, the complete experience", pick: "dalhousie" },
      { label: "Flexible day, weekly or full boarding, as it suits us", pick: "chandigarh" },
    ],
  },
  {
    q: "Which academic pathway fits your plans?",
    options: [
      { label: "A focused CBSE route towards Indian universities", pick: "dalhousie" },
      { label: "A choice of CBSE or an international IB and Cambridge pathway", pick: "chandigarh" },
    ],
  },
  {
    q: "How is your child starting out?",
    options: [
      { label: "Old enough to board and thrive independently", pick: "dalhousie" },
      { label: "Just beginning, we would like a play-based Early Years start", pick: "chandigarh" },
    ],
  },
  {
    q: "What are you most excited for?",
    options: [
      { label: "Mountaineering, treks and the outdoors as a classroom", pick: "dalhousie" },
      { label: "Equestrian, golf and farm-to-table learning", pick: "chandigarh" },
    ],
  },
];

export default function CampusChooser() {
  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<Pick[]>([]);

  const done = step >= questions.length;
  const dal = picks.filter((p) => p === "dalhousie").length;
  const chd = picks.length - dal;
  const winner = dal === chd ? "both" : dal > chd ? "dalhousie" : "chandigarh";

  function choose(pick: Pick) {
    setPicks((prev) => [...prev, pick]);
    setStep((s) => s + 1);
  }
  function restart() {
    setPicks([]);
    setStep(0);
  }

  const progress = Math.min(step, questions.length) / questions.length;

  return (
    <section id="chooser" className="bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="text-center">
          <div className="flex justify-center">
            <span className="flex items-center gap-3">
              <span className="h-px w-8 bg-brass" />
              <span className="eyebrow text-clay">Find your campus</span>
              <span className="h-px w-8 bg-brass" />
            </span>
          </div>
          <h2 className="mt-6 text-4xl leading-[1.02] text-pine sm:text-5xl">
            Two campuses. One is right for your child.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist">
            Answer five quick questions and we&apos;ll point you to the Dalhousie
            that fits your family best.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-pine/12 bg-cream p-6 sm:p-10">
          {!done ? (
            <div>
              {/* progress */}
              <div className="mb-8 flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-sand">
                  <div
                    className="h-full rounded-full bg-clay transition-all duration-500"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-mist">
                  {step + 1} / {questions.length}
                </span>
              </div>

              <h3 key={step} className="pop text-2xl text-pine sm:text-3xl">
                {questions[step].q}
              </h3>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {questions[step].options.map((o, oi) => (
                  <button
                    key={o.label}
                    onClick={() => choose(o.pick)}
                    className="group flex items-center gap-4 rounded-2xl border border-pine/15 bg-paper p-6 text-left transition-all duration-200 hover:-translate-y-1 hover:border-clay hover:bg-brass-soft/10"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-sage-soft font-display text-lg font-semibold text-pine transition-colors group-hover:border-clay group-hover:bg-clay group-hover:text-paper">
                      {oi === 0 ? "A" : "B"}
                    </span>
                    <span className="font-semibold leading-snug text-pine">
                      {o.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <Result winner={winner} onRestart={restart} />
          )}
        </div>
      </div>
    </section>
  );
}

function Result({
  winner,
  onRestart,
}: {
  winner: "dalhousie" | "chandigarh" | "both";
  onRestart: () => void;
}) {
  const showBoth = winner === "both";
  const list = showBoth
    ? campuses
    : campuses.filter((c) => c.id === winner);

  return (
    <div className="pop text-center">
      <span className="eyebrow text-clay">Your result</span>
      <h3 className="mt-3 text-2xl text-pine sm:text-3xl">
        {showBoth ? "You're torn, and that's okay." : "We found your Dalhousie."}
      </h3>
      <p className="mx-auto mt-3 max-w-md text-mist">
        {showBoth
          ? "Both campuses could suit your child. Here's a look at each, let's talk it through."
          : "Based on your answers, this is where your child would flourish."}
      </p>

      <div className={`mt-8 grid gap-5 ${showBoth ? "sm:grid-cols-2" : ""}`}>
        {list.map((c) => (
          <div
            key={c.id}
            className="overflow-hidden rounded-2xl border border-pine/15 bg-paper text-left"
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
              <h4 className="text-2xl text-pine">{c.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-mist">{c.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={campusHref[c.id]}
                  className="inline-block rounded-full bg-clay px-5 py-2.5 text-sm font-bold text-paper transition-transform hover:-translate-y-0.5"
                >
                  Explore {c.name.split(" ")[0]} &rarr;
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

      <button
        onClick={onRestart}
        className="mt-8 text-sm font-bold text-pine underline decoration-clay decoration-2 underline-offset-4 hover:text-clay"
      >
        Take the quiz again
      </button>
    </div>
  );
}
