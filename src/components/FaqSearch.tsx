"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";

/* Page 37 of the copy deck asks for FAQs that are "searchable, filterable
   structured FAQs that can also appear contextually on relevant pages", so
   this is a search box plus topic filters rather than a plain accordion. */

export default function FaqSearch({
  items,
  kicker,
}: {
  items: { topic: string; q: string; a: string }[];
  kicker: string;
}) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All topics");

  const topics = useMemo(() => ["All topics", ...new Set(items.map((i) => i.topic))], [items]);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((i) => {
      const byTopic = topic === "All topics" || i.topic === topic;
      const byQuery = !q || `${i.q} ${i.a} ${i.topic}`.toLowerCase().includes(q);
      return byTopic && byQuery;
    });
  }, [items, query, topic]);

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
          <Eyebrow>{kicker}</Eyebrow>

          <div className="mt-8 max-w-2xl">
            <label htmlFor="faq-search" className="block text-sm font-bold text-pine">
              Search by campus or topic
            </label>
            <input
              id="faq-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try boarding, fees, safeguarding, Competitive Edge"
              className="mt-2 w-full rounded-full border border-pine/20 bg-paper px-6 py-4 text-pine outline-none transition-colors placeholder:text-mist/60 focus:border-clay"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setTopic(t)}
                className={`min-h-11 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
                  topic === t
                    ? "border-clay bg-clay text-paper"
                    : "border-pine/20 text-pine hover:border-clay hover:text-clay"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <p className="mt-6 text-sm text-mist">
            {shown.length} {shown.length === 1 ? "answer" : "answers"}
            {topic !== "All topics" && ` in ${topic}`}
            {query && ` matching "${query}"`}
          </p>

          <div className="mt-8 space-y-4">
            {shown.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <details className="group rounded-[1.25rem] border border-pine/12 bg-paper p-6 soft-shadow-sm">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span>
                      <span className="eyebrow text-brass">{f.topic}</span>
                      <span className="mt-2 block font-display text-xl text-pine">{f.q}</span>
                    </span>
                    <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-sage-soft text-clay transition-transform group-open:rotate-45">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="7" y1="2.5" x2="7" y2="11.5" />
                        <line x1="2.5" y1="7" x2="11.5" y2="7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-mist">{f.a}</p>
                </details>
              </Reveal>
            ))}

            {shown.length === 0 && (
              <div className="rounded-[1.25rem] border border-pine/12 bg-paper p-8 text-center">
                <p className="text-lg text-pine">No answer matches that yet.</p>
                <p className="mt-2 text-mist">
                  If the answer affects eligibility, fees, policy or a child-specific decision, ask
                  admissions for the current approved information.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="grain-pine">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <Eyebrow dark>Still need help?</Eyebrow>
              <h2 className="mt-6 max-w-2xl text-3xl leading-[1.05] text-paper sm:text-4xl lg:text-5xl">
                Some answers should come from a person.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sage-soft">
                If your question affects eligibility, fees, policy or a decision about your own child,
                contact admissions for the current approved information.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/admissions/enquire"
                className="rounded-full bg-clay px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-transform hover:-translate-y-0.5"
              >
                Ask admissions
              </Link>
              <Link
                href="/admissions/book-a-visit"
                className="rounded-full border border-paper/45 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:border-brass-soft hover:text-brass-soft"
              >
                Book a visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
