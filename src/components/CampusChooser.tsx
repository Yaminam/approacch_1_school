"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { campuses, whatsappHref } from "@/lib/content";

const campusHref: Record<string, string> = {
  dalhousie: "/campuses/dalhousie",
  chandigarh: "/campuses/new-chandigarh",
};

type Lean = "dalhousie" | "chandigarh";
type Campus = "dalhousie" | "chandigarh" | "both";

type Node =
  | { type: "question"; q: string; options: { label: string; lean: Lean; next: string }[] }
  | { type: "result" };

// Adaptive branching tree: the first answers change which questions come next
// (mountain path vs city path), then every path funnels through shared
// questions. All six answers are tallied to reach the conclusion.
const tree: Record<string, Node> = {
  start: {
    type: "question",
    q: "What setting do you picture for your child?",
    options: [
      { label: "High in the alpine mountains, fully immersed in nature", lean: "dalhousie", next: "mtnBoarding" },
      { label: "A modern campus near the city, well connected", lean: "chandigarh", next: "cityPathway" },
    ],
  },

  // ── Mountain branch (Q2, Q3) ──────────────────────────────────────
  mtnBoarding: {
    type: "question",
    q: "Dalhousie in the mountains is a full residential school. How should boarding work for your family?",
    options: [
      { label: "Full residential boarding, the complete experience", lean: "dalhousie", next: "mtnStage" },
      { label: "We'd prefer flexible day, weekly or full boarding", lean: "chandigarh", next: "mtnStage" },
    ],
  },
  mtnStage: {
    type: "question",
    q: "How is your child starting out?",
    options: [
      { label: "Old enough to board and thrive independently", lean: "dalhousie", next: "excite" },
      { label: "Just beginning, we'd like a play-based Early Years start", lean: "chandigarh", next: "excite" },
    ],
  },

  // ── City branch (Q2, Q3) ──────────────────────────────────────────
  cityPathway: {
    type: "question",
    q: "New Chandigarh offers a choice of curriculum. Which pathway fits your plans?",
    options: [
      { label: "A focused CBSE route towards Indian universities", lean: "dalhousie", next: "cityStage" },
      { label: "An international IB and Cambridge pathway", lean: "chandigarh", next: "cityStage" },
    ],
  },
  cityStage: {
    type: "question",
    q: "How is your child starting out?",
    options: [
      { label: "Already independent and settled in school", lean: "dalhousie", next: "excite" },
      { label: "Just beginning, we'd like a play-based Early Years start", lean: "chandigarh", next: "excite" },
    ],
  },

  // ── Shared questions (Q4, Q5, Q6) ─────────────────────────────────
  excite: {
    type: "question",
    q: "What are you most excited for?",
    options: [
      { label: "Mountaineering, treks and the outdoors as a classroom", lean: "dalhousie", next: "connect" },
      { label: "Equestrian, golf and farm-to-table learning", lean: "chandigarh", next: "connect" },
    ],
  },
  connect: {
    type: "question",
    q: "How much does being well connected to a city matter to you?",
    options: [
      { label: "Not much, the remoteness of the mountains is a plus", lean: "dalhousie", next: "everyday" },
      { label: "A lot, we value easy travel and access", lean: "chandigarh", next: "everyday" },
    ],
  },
  everyday: {
    type: "question",
    q: "What matters most in the everyday?",
    options: [
      { label: "Character, resilience and nature woven through each day", lean: "dalhousie", next: "result" },
      { label: "Modern facilities and a choice of academic pathways", lean: "chandigarh", next: "result" },
    ],
  },

  result: { type: "result" },
};

const TOTAL_QUESTIONS = 6;

const reasons: Record<Campus, string> = {
  dalhousie:
    "Your answers lean to the mountains, full boarding, the outdoors and independence. Dalhousie Campus is where your child would flourish.",
  chandigarh:
    "Your answers point to flexibility, a choice of curricula and modern, city-close facilities. New Chandigarh is your fit.",
  both:
    "Your answers are split evenly between the mountains and the city. Either campus could suit your child, let's talk it through.",
};

export default function CampusChooser() {
  const [current, setCurrent] = useState("start");
  const [history, setHistory] = useState<string[]>([]);
  const [leans, setLeans] = useState<Lean[]>([]);

  const node = tree[current];

  function choose(lean: Lean, next: string) {
    setHistory((h) => [...h, current]);
    setLeans((l) => [...l, lean]);
    setCurrent(next);
  }
  function back() {
    if (history.length === 0) return;
    setCurrent(history[history.length - 1]);
    setHistory((h) => h.slice(0, -1));
    setLeans((l) => l.slice(0, -1));
  }
  function restart() {
    setHistory([]);
    setLeans([]);
    setCurrent("start");
  }

  const answered = leans.length;
  const progress =
    node.type === "result" ? 1 : Math.min(answered / TOTAL_QUESTIONS, 0.95);

  // conclusion: tally the six answers
  const dal = leans.filter((l) => l === "dalhousie").length;
  const chd = leans.length - dal;
  const winner: Campus = dal === chd ? "both" : dal > chd ? "dalhousie" : "chandigarh";

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
            Answer six quick questions, each one shaped by your last, and
            we&apos;ll point you to the Dalhousie that fits your family best.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-pine/12 bg-cream p-6 sm:p-10">
          {node.type === "question" ? (
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
                  {answered + 1} / {TOTAL_QUESTIONS}
                </span>
              </div>

              <h3 key={current} className="pop text-2xl text-pine sm:text-3xl">
                {node.q}
              </h3>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {node.options.map((o, oi) => (
                  <button
                    key={o.label}
                    onClick={() => choose(o.lean, o.next)}
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

              {answered > 0 && (
                <button
                  onClick={back}
                  className="mt-7 text-sm font-bold text-mist transition-colors hover:text-clay"
                >
                  &larr; Back
                </button>
              )}
            </div>
          ) : (
            <Result winner={winner} reason={reasons[winner]} onRestart={restart} />
          )}
        </div>
      </div>
    </section>
  );
}

function Result({
  winner,
  reason,
  onRestart,
}: {
  winner: Campus;
  reason: string;
  onRestart: () => void;
}) {
  const showBoth = winner === "both";
  const list = showBoth ? campuses : campuses.filter((c) => c.id === winner);

  return (
    <div className="pop text-center">
      <span className="eyebrow text-clay">Your result</span>
      <h3 className="mt-3 text-2xl text-pine sm:text-3xl">
        {showBoth ? "You're torn, and that's okay." : "We found your Dalhousie."}
      </h3>
      <p className="mx-auto mt-3 max-w-md text-mist">{reason}</p>

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
