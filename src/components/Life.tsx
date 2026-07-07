import Image from "next/image";
import { activities } from "@/lib/content";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";

export default function Life() {
  return (
    <section id="life" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <div className="max-w-3xl">
          <Eyebrow>Outside the Classroom</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.02] text-pine sm:text-5xl">
            Where a child discovers what they love.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mist">
            From the shooting range to the stage, the summit to the debate
            floor, there is room here to try everything.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
        {activities.map((a, i) => (
          <Reveal key={a.title} delay={i * 50}>
            <figure className="group relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src={a.img}
                alt={a.title}
                fill
                sizes="(max-width:768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-800/85 via-pine-800/10 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4 font-display text-lg text-paper">
                {a.title}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
