import Image from "next/image";
import { daySchedule } from "@/lib/content";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";

export default function DalhousieDay() {
  return (
    <section id="day" className="bg-blush">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/outside.jpg"
              alt="A day outside the classroom at Dalhousie"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Eyebrow>The Dalhousie Day</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.02] text-pine sm:text-5xl">
            A day that grows a whole person.
          </h2>

          <ol className="mt-10">
            {daySchedule.map((d, i) => (
              <Reveal key={d.time} delay={i * 70}>
                <li className="flex gap-6 border-t hair py-4 first:border-t-0">
                  <span className="w-16 shrink-0 pt-0.5 font-display text-lg text-clay [font-variant-numeric:tabular-nums]">
                    {d.time}
                  </span>
                  <span>
                    <span className="block font-semibold text-pine">{d.title}</span>
                    <span className="block text-sm text-mist">{d.body}</span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
