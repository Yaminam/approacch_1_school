import Reveal from "./Reveal";
import { Eyebrow } from "./ui";
import { pastoralTrust } from "@/lib/content";

export default function PastoralTrust() {
  return (
    <section className="bg-blush">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Pastoral care</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.03] text-pine sm:text-5xl">
              A parent&apos;s real fear is not the marks.{" "}
              <span className="italic text-clay">It is a child going unseen.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              So before anything else, we make sure your child is known. By name,
              every day, by adults who are awake when they are.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {pastoralTrust.map((t, i) => (
            <Reveal key={t.title} delay={i * 80}>
              <div className="border-t hair pt-5">
                <h3 className="text-lg text-pine">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
