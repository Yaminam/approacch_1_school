import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PAD, Eyebrow, PrimaryCta, GoldLink } from "@/components/sections";
import { Ridge, Botanical } from "@/components/Ornament";
import { compareCampuses } from "@/lib/pageCopy";
import { img } from "@/lib/images";

export const metadata: Metadata = compareCampuses.meta;

const p = compareCampuses;

/* Page 16 of the copy deck: "a mobile-friendly comparison matrix with plain
   language, expandable detail and direct links to each campus", and explicit
   that neither campus may be presented as superior.

   Rebuilt onto the heritage editorial system, which this page had been left
   behind by. Three things were wrong with it beyond the styling:

   - Each column stacked its own list, so the dimension was printed twice, side
     by side. A comparison states the thing being compared ONCE and puts the
     two answers under it; printing it twice makes the reader match labels
     across a 56px gutter to work out what lines up with what.
   - Because the columns stacked separately, two answers of different lengths
     pushed everything below them out of step, so the rows stopped aligning
     after the first one.
   - The campus names were lg:hidden. On a desktop nothing on screen said
     which column was which; you had to scroll back to the photographs. The
     names now sit in a header that sticks under the site header for as long
     as the comparison is on screen.

   Both columns keep identical structure, weight and photography so neither
   reads as the better option. */

const CAMPUSES = [
  {
    key: "dal" as const,
    name: "Dalhousie Campus",
    label: "The Mountain Campus",
    line: "A World Away. Ready For The World.",
    image: img.dalHero,
    href: "/campuses/dalhousie",
    marks: ["Full residential", "CBSE", "Himalayan setting"],
  },
  {
    key: "chd" as const,
    name: "New Chandigarh Campus",
    label: "The Modern Campus",
    line: "All-Round. Without the Running Around.",
    image: img.chdHero,
    href: "/campuses/new-chandigarh",
    marks: ["Boarding & day boarding", "Early Years to Senior", "City-connected"],
  },
];

const CLUSTERS: {
  title: string;
  rows: { dimension: string; dal: string; chd: string }[];
}[] = [
  {
    title: "Campus character and daily rhythm",
    rows: [
      {
        dimension: "Campus character",
        dal: "Immersive. Residential. Mountain-shaped. The environment and residential rhythm are central to the child's formation.",
        chd: "Contemporary. Connected. Future-facing. The campus brings a wider range of learning and developmental opportunities together within one ecosystem.",
      },
      {
        dimension: "Daily rhythm",
        dal: "A deeply structured residential day shaped by classrooms, guided preparation, sport, house life, shared meals, mentoring and routine.",
        chd: "A connected campus rhythm designed to bring academics, preparation, sport, confidence and wider development together with less running around.",
      },
      {
        dimension: "Residential experience",
        dal: "Full residential immersion sits at the heart of the campus experience. House life, routines, prep, friendships and everyday responsibility become part of the education.",
        chd: "Greater flexibility across the campus formats available to the relevant age and stage, designed to bring more continuity to the child's day.",
      },
    ],
  },
  {
    title: "Academics, pathways and sport",
    rows: [
      {
        dimension: "Academic experience",
        dal: "CBSE education within a protected residential rhythm, supported by Competitive Edge, guided preparation, testing and mentoring.",
        chd: "An age-and-stage academic journey with increasing choice, confidence and pathway readiness from the early years through senior school.",
      },
      {
        dimension: "Defence Pathway",
        dal: "A particularly natural connection with the Defence Pathway through residential discipline, physical environment, service orientation and NDA relevance.",
        chd: "Students may engage with relevant Defence Pathway elements subject to stage, programme and campus availability.",
      },
      {
        dimension: "Sports & physical development",
        dal: "Mountain terrain, outdoor movement, sport and physical challenge naturally support fitness, courage and resilience.",
        chd: "Sport and physical development sit within the wider all-round campus experience, alongside confidence, leadership and exposure.",
      },
    ],
  },
  {
    title: "Independence, confidence and fit",
    rows: [
      {
        dimension: "Independence",
        dal: "Independence grows through full residential life, house responsibility, self-management and distance from everyday parental supervision.",
        chd: "Independence develops progressively through age-appropriate responsibility, participation and the available campus experience.",
      },
      {
        dimension: "Confidence & communication",
        dal: "Confidence grows through residential participation, house culture, assemblies, outdoor challenge, speaking and responsibility.",
        chd: "Communication, participation and leadership are particularly visible within the contemporary campus experience.",
      },
      {
        dimension: "The child who steps out",
        dal: "Grounded. Resilient. Respectful. Independent. Physically confident. Designed to help children become stronger from within.",
        chd: "Articulate. Adaptive. Confident. Choice-ready. Globally aware. Designed to help children become more expressive, adaptable and ready to respond to wider possibilities.",
      },
    ],
  },
  {
    title: "What does not change",
    rows: [
      {
        dimension: "Closer to your family if you are seeking",
        dal: "A true residential-school experience, greater independence and self-reliance, distance from urban distraction, strong routine and house culture, outdoor strength and resilience, academic seriousness within a protected residential day, and strong alignment with defence-oriented aspirations.",
        chd: "Academic choice, confidence and communication, wider exposure, greater flexibility, contemporary learning, future pathway readiness, and all-round development without a fragmented schedule.",
      },
      {
        dimension: "One Dalhousie philosophy",
        dal: "The whole child, serious preparation, confidence that is trained, responsibility that grows, care that stays close and growth that becomes visible.",
        chd: "The whole child, serious preparation, confidence that is trained, responsibility that grows, care that stays close and growth that becomes visible.",
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

      <div className="bg-cream">
        {/* The two campuses, given identical treatment */}
        <section className={`${PAD} pt-16 sm:pt-20`}>
          <div className="grid gap-x-14 gap-y-12 lg:grid-cols-2">
            {CAMPUSES.map((c, i) => (
              <Reveal key={c.key} delay={i * 110}>
                <Link href={c.href} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[3px]">
                    <Image
                      src={c.image}
                      alt={`${c.name}, ${c.label}`}
                      fill
                      sizes="(max-width:1024px) 100vw, 46vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-6">
                    <Eyebrow>{c.label}</Eyebrow>
                    <h2 className="mt-4 font-display text-[1.7rem] leading-[1.14] text-clay sm:text-[2.1rem]">
                      {c.name}
                    </h2>
                    <p className="mt-3 max-w-[42ch] font-display text-[1.15rem] italic leading-[1.4] text-pine/70">
                      {c.line}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {c.marks.map((m) => (
                        <li
                          key={m}
                          className="rounded-full border border-brass/35 px-3.5 py-1.5 text-[0.78rem] font-semibold text-pine/75 lg:text-[0.72rem]"
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-7 inline-flex min-h-11 items-center gap-2.5 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-clay transition-colors group-hover:text-brass lg:min-h-0 lg:text-[0.68rem]">
                      <span className="border-b border-current pb-1">Explore the campus</span>
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* The comparison. Dimension stated once, the two answers beneath it. */}
        <section className={`${PAD} pb-20 pt-14 sm:pb-24 sm:pt-16`}>
          {/* Which column is which, held under the site header for the length
              of the comparison. Desktop only: on a phone the columns stack, so
              each answer carries its own campus name instead. */}
          {/* 4.25rem is the site header's measured height. Opaque, not a tint:
              at 95% the copy scrolling underneath ghosted through it. */}
          <div className="sticky top-[4.25rem] z-30 hidden border-b border-brass/30 bg-cream py-3.5 lg:block">
            <div className="grid grid-cols-2 gap-x-14">
              {CAMPUSES.map((c, i) => (
                <div
                  key={c.key}
                  className={`flex items-center gap-3.5 ${i ? "-ml-7 border-l border-sand pl-7" : ""}`}
                >
                  {/* The crop is what makes the pinned bar readable at a glance:
                      by the time you are four screens into the comparison the
                      photographs at the top are long gone. */}
                  <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
                    <Image src={c.image} alt="" fill sizes="36px" className="object-cover" />
                  </span>
                  <span className="font-display text-[1.05rem] leading-tight text-clay">{c.name}</span>
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-brass">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {CLUSTERS.map((cluster, ci) => (
            <div key={cluster.title} className={ci > 0 ? "mt-16" : "mt-12"}>
              <Reveal>
                <div className="flex items-baseline gap-5">
                  <span
                    aria-hidden
                    className="font-display text-[1.4rem] leading-none text-brass/45 [font-variant-numeric:tabular-nums]"
                  >
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-[1.5rem] leading-[1.2] text-clay sm:text-[1.8rem]">
                    {cluster.title}
                  </h2>
                  <span aria-hidden className="h-px flex-1 bg-brass/35" />
                </div>
              </Reveal>

              <div className="mt-6">
                {cluster.rows.map((r, ri) => {
                  /* Both columns carry the same words. Printing them twice is
                     the worst possible way to say "these are the same" — and
                     this row sits under a heading that reads "What does not
                     change". Said once, across the full width, it becomes the
                     point of the section rather than a duplication. */
                  if (r.dal === r.chd) {
                    return (
                      <Reveal key={r.dimension}>
                        <div className="mt-6 rounded-[4px] border border-brass/30 bg-blush/45 px-6 py-8 sm:px-9 sm:py-10">
                          <div className="flex items-center gap-3">
                            <span aria-hidden className="h-px w-7 bg-brass" />
                            <p className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-brass lg:text-[0.66rem]">
                              Both campuses &middot; {r.dimension}
                            </p>
                          </div>
                          <p className="mt-5 max-w-[54ch] font-display text-[1.3rem] italic leading-[1.4] text-clay sm:text-[1.5rem]">
                            {r.dal}
                          </p>
                        </div>
                      </Reveal>
                    );
                  }

                  /* A quiet alternating ground. With nothing but hairlines the
                     run read as one undifferentiated block of text; the band
                     gives the eye a row to hold on to without adding a border
                     to every cell. */
                  const tint = ri % 2 === 1;
                  return (
                    <Reveal key={r.dimension}>
                      <div
                        className={`rounded-[4px] px-5 py-8 sm:px-7 sm:py-9 ${
                          tint ? "bg-blush/35" : "border-t border-sand"
                        }`}
                      >
                        <div className="flex items-baseline gap-4">
                          <span
                            aria-hidden
                            className="font-display text-[1.15rem] leading-none text-brass/50 [font-variant-numeric:tabular-nums]"
                          >
                            {String(ri + 1).padStart(2, "0")}
                          </span>
                          <h3 className="font-display text-[1.15rem] leading-[1.25] text-clay sm:text-[1.3rem]">
                            {r.dimension}
                          </h3>
                        </div>
                        {/* One grid per row, so the two answers always start on
                            the same line however long either of them runs. */}
                        <div className="mt-5 grid gap-x-14 gap-y-7 lg:grid-cols-2">
                          {CAMPUSES.map((c, i) => (
                            <div
                              key={c.key}
                              /* The rule sits in the middle of the gutter; the
                                 negative margin cancels the padding so neither
                                 column's text shifts off its own edge. */
                              className={i ? "lg:-ml-7 lg:border-l lg:border-sand lg:pl-7" : ""}
                            >
                              <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-clay/60 lg:hidden">
                                {c.name}
                              </p>
                              <p className="text-[1.0625rem] leading-[1.75] text-pine/75 [text-wrap:pretty]">
                                {r[c.key]}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Close */}
      <section className="relative overflow-hidden bg-pine-800">
        <Ridge className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-brass-soft/20" />
        <Botanical className="pointer-events-none absolute -left-6 top-0 hidden h-full w-20 text-brass-soft/12 lg:block" />
        <div className={`${PAD} relative py-16 sm:py-20`}>
          <Reveal>
            <div className="flex items-center gap-6">
              <Eyebrow gold>Neither is the lesser</Eyebrow>
              <span aria-hidden className="h-px flex-1 bg-brass-soft/25" />
            </div>
          </Reveal>

          <div className="mt-10 grid gap-y-10 lg:grid-cols-12 lg:gap-x-16">
            <Reveal className="lg:col-span-6">
              <h2 className="font-display text-[1.9rem] leading-[1.12] text-brass-soft sm:text-[2.4rem]">
                The question is not which campus is better.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-6">
              <div>
                <p className="max-w-[54ch] text-[1.0625rem] leading-[1.75] text-sage-soft/85 [text-wrap:pretty]">
                  It is which experience is right for the child and family. Six short questions will
                  get you closer to an answer than any table can.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <PrimaryCta label="Find Your Campus" href="/campuses/find-your-campus" dark />
                  <GoldLink label="Visit a campus" href="/admissions/book-a-visit" dark />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
