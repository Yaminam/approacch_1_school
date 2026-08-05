import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { compareCampuses } from "@/lib/pageCopy";
import { img } from "@/lib/images";

export const metadata: Metadata = compareCampuses.meta;

const p = compareCampuses;

/* Page 16 of the copy deck: "a mobile-friendly comparison matrix with plain
   language, expandable detail and direct links to each campus", and explicit
   that neither campus may be presented as superior.

   The comparison is grouped into three clusters rather than run as ten ruled
   rows. A long spec table with a hairline under every row is the laziest
   possible layout for this, and it buries the one thing a parent is here for:
   which experience fits their child. Both columns keep identical structure,
   weight and photography so neither reads as the better option. */

const CAMPUSES = [
  {
    key: "dal" as const,
    name: "Dalhousie Campus",
    label: "The Mountain Campus",
    line: "Formed for life. Far from distraction. Close to what matters.",
    image: img.dalHero,
    href: "/campuses/dalhousie",
    marks: ["Full residential", "CBSE", "Himalayan setting"],
  },
  {
    key: "chd" as const,
    name: "New Chandigarh Campus",
    label: "The Modern Campus",
    line: "Built for tomorrow. All-Round. Without the Running Around.",
    image: img.chdHero,
    href: "/campuses/new-chandigarh",
    marks: ["Day to full residential", "Toddler to Senior", "City-connected"],
  },
];

const CLUSTERS: {
  title: string;
  rows: { dimension: string; dal: string; chd: string }[];
}[] = [
  {
    title: "Setting and daily rhythm",
    rows: [
      {
        dimension: "Campus role",
        dal: "The original Himalayan home of the School.",
        chd: "The contemporary Dalhousie experience.",
      },
      {
        dimension: "Environment",
        dal: "Terrain, weather and distance participate in the education, and reduce distraction.",
        chd: "A contemporary campus with greater flexibility and proximity to the city.",
      },
      {
        dimension: "Residential model",
        dal: "Full residential immersion. Boarding is preparation, not separation.",
        chd: "Day, day-boarding, weekly and full residential models.",
      },
    ],
  },
  {
    title: "Academics and pathways",
    rows: [
      {
        dimension: "Academic journey",
        dal: "CBSE with concept depth, guided prep, testing and mentoring inside a residential rhythm.",
        chd: "A stage ladder from Toddler and Early Years through Primary, Middle and Senior School.",
      },
      {
        dimension: "Preparation pathways",
        dal: "Competitive Edge, with a natural fit for the Defence Pathway through discipline and service.",
        chd: "Competitive Edge, Scholars Track, Achievers Track and wider routes by age and stage.",
      },
      {
        dimension: "Sport and student life",
        dal: "House sport, competitive teams, outdoor education and the mountain itself.",
        chd: "Sport, clubs, speaking, leadership and confirmed specialist opportunities.",
      },
    ],
  },
  {
    title: "Fit, outcome and care",
    rows: [
      {
        dimension: "Parent fit",
        dal: "Families seeking a true boarding experience, distance from distraction and residential immersion.",
        chd: "Families seeking academic choice, communication, confidence, exposure and flexibility.",
      },
      {
        dimension: "Student outcome",
        dal: "Grounded. Resilient. Respectful. Independent. Physically confident.",
        chd: "Articulate. Adaptive. Confident. Choice-ready. Globally aware.",
      },
      {
        dimension: "Pastoral care",
        dal: "House parents, mentors and campus teams, with clear communication and escalation.",
        chd: "Mentors, supervision, medical support and safeguarding on the same parent-connect system.",
      },
    ],
  },
];

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow={p.nav}
        title={p.title}
        emphasis={p.emphasis}
        subtitle={p.subhead}
        image={p.image}
      />

      <div className="tone-1 lit">
        {/* The two campuses, given identical treatment */}
        <section className="mx-auto max-w-7xl px-6 pt-20 sm:px-8 sm:pt-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {CAMPUSES.map((c, i) => (
              <Reveal key={c.key} delay={i * 110}>
                <Link href={c.href} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] soft-shadow">
                    <Image
                      src={c.image}
                      alt={`${c.name}, ${c.label}`}
                      fill
                      sizes="(max-width:1024px) 100vw, 46vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-6">
                    <span className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-brass">
                      {c.label}
                    </span>
                    <h2 className="mt-3 font-display text-[1.7rem] leading-tight text-pine sm:text-[2.1rem]">
                      {c.name}
                    </h2>
                    <p className="mt-3 max-w-[46ch] leading-relaxed text-mist">{c.line}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {c.marks.map((m) => (
                        <li
                          key={m}
                          className="rounded-full border border-pine/15 bg-paper px-3.5 py-1.5 text-sm font-semibold text-pine"
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-clay underline decoration-brass decoration-2 underline-offset-[6px]">
                      Explore the campus
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Grouped comparison. Three clusters, no hairline under every row. */}
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
          {CLUSTERS.map((cluster, ci) => (
            <div key={cluster.title} className={ci > 0 ? "mt-16" : ""}>
              <Reveal>
                <div className="flex items-center gap-5">
                  <h2 className="font-display text-[1.5rem] leading-tight text-clay sm:text-[1.8rem]">
                    {cluster.title}
                  </h2>
                  <span className="h-px flex-1 bg-pine/15" />
                </div>
              </Reveal>

              <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-10">
                {CAMPUSES.map((c) => (
                  <Reveal key={c.key}>
                    <div
                      className={`h-full rounded-[1.25rem] p-7 ${
                        c.key === "dal" ? "tone-2" : "bg-paper"
                      }`}
                    >
                      <p className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-brass lg:hidden">
                        {c.name}
                      </p>
                      <dl className="mt-2 space-y-6 lg:mt-0">
                        {cluster.rows.map((r) => (
                          <div key={r.dimension}>
                            <dt className="font-display text-[0.95rem] uppercase tracking-[0.1em] text-mist">
                              {r.dimension}
                            </dt>
                            <dd className="mt-2 leading-relaxed text-pine/85">{r[c.key]}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Close */}
      <section className="grain-pine lit-deep">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-16">
            <Reveal className="lg:col-span-7">
              <div>
                <span className="eyebrow text-brass-soft">Neither is the lesser</span>
                <h2 className="mt-6 font-display text-[2rem] leading-[1.08] text-paper sm:text-[2.6rem] lg:text-[3rem]">
                  The question is not which campus is better.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5">
              <div className="border-t border-paper/20 pt-8">
                <p className="max-w-[60ch] text-lg leading-relaxed text-sage-soft [text-wrap:pretty]">
                  It is which experience is right for the child and family. Six short questions will
                  get you closer to an answer than any table can.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-x-9 gap-y-4">
                  <Link
                    href="/campuses/find-your-campus"
                    className="inline-flex items-center justify-center rounded-full bg-brass-soft px-8 py-4 text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-pine-800 transition-transform hover:-translate-y-0.5"
                  >
                    Find Your Campus
                  </Link>
                  <Link
                    href="/admissions/book-a-visit"
                    className="text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-brass-soft underline decoration-brass-soft/50 decoration-2 underline-offset-[6px] transition-colors hover:text-paper hover:decoration-paper"
                  >
                    Visit a campus
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
