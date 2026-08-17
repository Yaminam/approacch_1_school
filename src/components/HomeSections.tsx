import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";
import { img } from "@/lib/images";

/* Home page sections, transcribed from Final Reviewed Content - DPS, in the
   order the content runs: the parent problem, the Dalhousie environment, the
   seven pathways, no second shift, the Defence Pathway, boarding, the Whole
   Child Report and the admissions conversion panel. */

export function ParentProblem() {
  return (
    <section className="bg-clay text-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <h2 className="max-w-4xl font-display text-[2.3rem] leading-[1.06] text-paper sm:text-5xl lg:text-6xl">
            Children today are prepared <span className="italic">in fragments.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-paper/85 [text-wrap:pretty]">
              School handles academics. Tuition handles competitive preparation. Sport is fitted in
              when there is time. Confidence is expected to develop on its own. Independence is
              postponed. And parents are left coordinating a day that keeps getting longer.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="text-lg leading-relaxed text-paper/85 [text-wrap:pretty]">
              The child may be busy throughout the day. But being busy is not the same as growing.
              Dalhousie brings the child back together.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function MasterPromise() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>The Dalhousie environment</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.02] text-pine sm:text-5xl lg:text-6xl">
              The whole child for <span className="italic text-clay">the whole future.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-mist [text-wrap:pretty]">
              Academic success matters. But so does the ability to stand up and speak. To stay
              physically strong. To manage oneself. To make good decisions. To live with others. To
              recover from difficulty. To carry responsibility.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div>
              <p className="text-lg leading-relaxed text-mist [text-wrap:pretty]">
                Dalhousie prepares children across all of these dimensions, not as separate
                activities, but as part of one connected school experience. Because the future will
                demand more than marks. It will demand the overall growth, the whole child.
              </p>
              <Link
                href="/the-dalhousie-difference"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-clay underline decoration-brass decoration-2 underline-offset-4 hover:text-pine"
              >
                Discover the Dalhousie Difference
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const PATHWAYS = [
  { name: "Dalhousie Competitive Edge", line: "Serious preparation. Without the second shift.", href: "/competitive-edge" },
  { name: "Dalhousie Defence Pathway", line: "For those drawn to serve.", href: "/defence-pathway" },
  { name: "Dalhousie Sports Pathway", line: "Character in motion.", href: "/sports-pathway" },
  { name: "Dalhousie Confidence Code", line: "Every child learns to stand, speak and be heard.", href: "/confidence-code" },
  { name: "Dalhousie Life Code", line: "The things life demands, but most schools forget to teach.", href: "/life-code" },
  { name: "Dalhousie Residential Advantage", line: "Boarding is where children become.", href: "/residential-advantage" },
  { name: "The Dalhousie Whole Child Report", line: "Most schools report marks. Dalhousie reports growth.", href: "/whole-child-report" },
];

export function SevenPathways() {
  return (
    <section className="grain-pine">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow dark>The Dalhousie Preparation System</Eyebrow>
              <h2 className="mt-6 text-4xl leading-[1.02] text-paper sm:text-5xl">
                Seven pathways. <span className="italic text-brass-soft">One outcome.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-sage-soft">
                Preparation should develop more than one part of the child. The Dalhousie
                Preparation System brings together seven areas of growth within one clear
                framework. The first six build the child. The seventh makes that growth visible.
              </p>
            </div>
            <Link
              href="/preparation-system"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brass-soft transition-colors hover:text-paper"
            >
              Explore the pathways
              <span aria-hidden>-&gt;</span>
            </Link>
          </div>
        </Reveal>

        {/* Six that build the child, in a clean 3 x 2 grid. Seven items in a
            three-column grid stranded the last one beside two empty cells. */}
        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {PATHWAYS.slice(0, 6).map((m, i) => (
            <Reveal key={m.href} delay={i * 70}>
              <Link href={m.href} className="group flex h-full flex-col border-t border-paper/20 pt-6">
                <span className="font-display text-2xl text-brass-soft [font-variant-numeric:tabular-nums]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl leading-snug text-paper">{m.name}</h3>
                <p className="mt-2.5 flex-1 leading-relaxed text-sage-soft">{m.line}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brass-soft">
                  Explore
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* The seventh is the proof, not another pathway, so it gets its own
            full-width row rather than a lonely cell. */}
        <Reveal delay={120}>
          <Link
            href={PATHWAYS[6].href}
            className="group mt-10 grid items-center gap-y-5 border-t-2 border-brass-soft/40 pt-8 lg:grid-cols-12 lg:gap-x-12"
          >
            <div className="lg:col-span-7">
              <span className="font-display text-2xl text-brass-soft [font-variant-numeric:tabular-nums]">07</span>
              <h3 className="mt-3 font-display text-2xl leading-snug text-paper sm:text-[1.9rem]">
                {PATHWAYS[6].name}
              </h3>
            </div>
            <div className="lg:col-span-5">
              <p className="leading-relaxed text-sage-soft">{PATHWAYS[6].line}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brass-soft">
                View the Whole Child Report
                <span aria-hidden className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* Two argument bands, each with the deck's headline and its own call to action. */
function ArgumentBand({
  eyebrow,
  title,
  emphasis,
  paras,
  image,
  cta,
  ctaHref,
  alt,
  altHref,
  reverse = false,
  tone = "cream",
}: {
  eyebrow: string;
  title: string;
  emphasis: string;
  paras: string[];
  image: string;
  cta: string;
  ctaHref: string;
  alt?: string;
  altHref?: string;
  reverse?: boolean;
  tone?: "cream" | "blush";
}) {
  return (
    <section className={tone === "blush" ? "bg-blush" : "bg-cream"}>
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className={reverse ? "lg:order-2" : ""}>
            <div className="arch-sm relative aspect-[4/3] overflow-hidden soft-shadow-sm">
              <Image src={image} alt="" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={110} className={reverse ? "lg:order-1" : ""}>
            <div>
              <Eyebrow>{eyebrow}</Eyebrow>
              <h2 className="mt-5 text-3xl leading-[1.05] text-pine sm:text-4xl lg:text-5xl">
                {title} <span className="italic text-clay">{emphasis}</span>
              </h2>
              {paras.map((t, i) => (
                <p key={i} className="mt-5 text-lg leading-relaxed text-mist [text-wrap:pretty]">{t}</p>
              ))}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  href={ctaHref}
                  className="rounded-full bg-clay px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-transform hover:-translate-y-0.5"
                >
                  {cta}
                </Link>
                {alt && altHref && (
                  <Link
                    href={altHref}
                    className="text-sm font-bold uppercase tracking-[0.1em] text-clay underline decoration-brass decoration-2 underline-offset-4 hover:text-pine"
                  >
                    {alt}
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function NoSecondShift() {
  return (
    <ArgumentBand
      eyebrow="No second shift childhood"
      title="Serious preparation should not require a"
      emphasis="second life after school."
      paras={[
        "Ambition matters. But the solution does not have to be school, followed by tuition, followed by enrichment classes, followed by travel, followed by homework late into the evening.",
        "Dalhousie Competitive Edge brings stronger preparation into the academic rhythm itself. Concept strengthening. Guided practice. Tests. Doubt support. Mentoring. Progress tracking. The child still prepares seriously. The difference is that preparation belongs inside a better-designed day.",
      ]}
      image={img.edgeHero}
      cta="Explore Competitive Edge"
      ctaHref="/competitive-edge"
      alt="Speak to admissions"
      altHref="/admissions/enquire"
    />
  );
}

export function DrawnToServe() {
  return (
    <ArgumentBand
      eyebrow="For those drawn to serve"
      title="Before the uniform,"
      emphasis="the making of the person."
      paras={[
        "For some children, ambition has a specific direction. They are drawn towards service, leadership and the armed forces. The Dalhousie Defence Pathway develops the foundational qualities required before any examination can truly matter.",
        "Mind. Body. Voice. Bearing. Service. The pathway develops progressively, from early foundations in discipline and teamwork to deeper readiness for NDA and defence-oriented futures.",
      ]}
      image={img.defenceHero}
      cta="Explore the Defence Pathway"
      ctaHref="/defence-pathway"
      reverse
      tone="blush"
    />
  );
}

export function BoardingBecome() {
  return (
    <ArgumentBand
      eyebrow="Growing up is part of the education"
      title="Children learn to stand on their own,"
      emphasis="without standing alone."
      paras={[
        "Residential life gives children everyday opportunities to manage themselves. Their time. Their belongings. Their friendships. Their responsibilities. Their studies. Their decisions. This independence develops gradually, supported by house parents, mentors, teachers and pastoral care.",
        "Boarding is not simply where children stay after school. It is where responsibility becomes real. Where friendships deepen. Where manners are practised. Where routines become habits. Where children begin to discover that they are capable of more than they thought.",
      ]}
      image={img.residentialHero}
      cta="Explore the Residential Advantage"
      ctaHref="/residential-advantage"
      alt="View pastoral care"
      altHref="/pastoral-care"
    />
  );
}

export function ReportsGrowth() {
  return (
    <section className="grain-pine">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <Reveal>
            <div>
              <Eyebrow dark>The Dalhousie Whole Child Report</Eyebrow>
              <h2 className="mt-6 max-w-2xl text-3xl leading-[1.05] text-paper sm:text-4xl lg:text-5xl">
                What is your child <span className="italic text-brass-soft">becoming?</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sage-soft [text-wrap:pretty]">
                Marks can tell you how a child performed in a subject, but they cannot tell you
                everything. Is your child becoming fitter? More confident? More responsible? More
                independent? More willing to speak? Better able to work with others?
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-sage-soft">
                The Whole Child Report brings these dimensions of growth into one clearer picture.
                Most schools report marks. Dalhousie reports growth.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/whole-child-report"
                className="rounded-full bg-clay px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-transform hover:-translate-y-0.5"
              >
                See how growth is reported
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const NEXT_STEPS = [
  {
    h: "Find your campus",
    body: "Not sure which campus fits your family? Begin with the Campus Finder.",
    href: "/campuses/find-your-campus",
    cta: "Find your campus",
  },
  {
    h: "Book a visit",
    body: "See the classrooms, houses, sports spaces and the everyday rhythm of Dalhousie.",
    href: "/admissions/book-a-visit",
    cta: "Book a visit",
  },
  {
    h: "Speak to admissions",
    body: "Discuss your child's age, stage, academic needs and preferred campus experience.",
    href: "/admissions/enquire",
    cta: "Start an enquiry",
  },
  {
    h: "Ready to apply?",
    body: "Begin registration and we will guide you through the step that applies to the grade.",
    href: "/admissions/apply",
    cta: "Apply now",
  },
];

export function FindYourExperience() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Admissions</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.02] text-pine sm:text-5xl lg:text-6xl">
              Find your <span className="italic text-clay">Dalhousie experience.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist [text-wrap:pretty]">
              The next step is to see where your child could grow.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {NEXT_STEPS.map((s, i) => (
            <Reveal key={s.href} delay={i * 70}>
              <article className="flex h-full flex-col border-t hair pt-6">
                <span className="font-display text-2xl text-brass">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl leading-snug text-pine">{s.h}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-mist">{s.body}</p>
                <Link href={s.href} className="mt-5 text-sm font-bold uppercase tracking-[0.1em] text-clay hover:text-pine">
                  {s.cta} &rarr;
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-col gap-6 border-t hair pt-10 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-2xl font-display text-2xl leading-snug text-pine sm:text-[1.75rem]">
              A child should not have to choose between achievement and childhood.
            </p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/admissions/book-a-visit"
                className="rounded-full bg-clay px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-transform hover:-translate-y-0.5"
              >
                Book a visit
              </Link>
              <Link
                href="/campuses/find-your-campus"
                className="rounded-full border-2 border-pine px-7 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-pine transition-colors hover:border-clay hover:text-clay"
              >
                Find your campus
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
