import Reveal from "./Reveal";
import { SectionHead, FeatureGrid, Pills, Section } from "./ui";
import type { CampusDetail } from "@/lib/content";

export default function CampusSections({ detail }: { detail: CampusDetail }) {
  const half = Math.ceil(detail.routine.length / 2);
  const cols: [typeof detail.routine, typeof detail.routine] = [
    detail.routine.slice(0, half),
    detail.routine.slice(half),
  ];

  return (
    <>
      {/* Academics */}
      <Section tone="cream">
        <SectionHead eyebrow="Academics" title={detail.academicsTitle} intro={detail.academicsBody} />
        <Pills items={detail.academicsPoints} />
      </Section>

      {/* Sport */}
      <Section tone="blush">
        <SectionHead eyebrow="Sport" title="Sport is part of the everyday." intro={detail.sportsNote} />
        <Pills items={detail.sports} />
      </Section>

      {/* Daily routine */}
      <Section tone="cream">
        <SectionHead eyebrow="A day here" title={detail.routineLabel} />
        <div className="mt-11 grid gap-x-16 gap-y-0 sm:grid-cols-2">
          {cols.map((col, ci) => (
            <ol key={ci}>
              {col.map((r) => (
                <Reveal key={r.time + r.title}>
                  <li className="flex gap-6 border-t hair py-3.5 first:border-t-0 sm:first:border-t">
                    <span className="w-16 shrink-0 font-display text-lg text-clay [font-variant-numeric:tabular-nums]">
                      {r.time}
                    </span>
                    <span className="pt-0.5 font-semibold text-pine">{r.title}</span>
                  </li>
                </Reveal>
              ))}
            </ol>
          ))}
        </div>
      </Section>

      {/* Pastoral & wellbeing */}
      <Section tone="blush">
        <SectionHead eyebrow="Care & wellbeing" title="Safe, known and well looked after." />
        <FeatureGrid items={detail.pastoral} cols={3} />
      </Section>

      {/* Outdoor / beyond the classroom */}
      <Section tone="cream">
        <SectionHead eyebrow="Beyond the classroom" title="The outdoors as a teacher." />
        <FeatureGrid items={detail.outdoor} cols={detail.outdoor.length >= 4 ? 4 : 3} />
      </Section>

      {/* Facilities */}
      <Section tone="pine">
        <SectionHead eyebrow="On campus" title="Facilities that make it possible." dark />
        <div className="mt-10 flex flex-wrap gap-2.5">
          {detail.facilities.map((f) => (
            <span key={f} className="rounded-full border border-paper/25 px-4 py-2 text-sm font-semibold text-paper">
              {f}
            </span>
          ))}
        </div>
      </Section>

      {/* Extra (e.g. community platforms) */}
      {detail.extra && (
        <Section tone="blush">
          <SectionHead eyebrow="Parent connect" title={detail.extra.title} intro={detail.extra.intro} />
          <FeatureGrid items={detail.extra.items} cols={2} />
        </Section>
      )}
    </>
  );
}
