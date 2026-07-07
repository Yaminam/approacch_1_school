import Image from "next/image";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";
import { headWelcome, testimonial } from "@/lib/content";

export default function Voices() {
  return (
    <section className="bg-blush">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Voices from the Dalhousie family</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.02] text-pine sm:text-5xl">
              The people who make it a family.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Head of School */}
          <Reveal>
            <figure className="flex h-full flex-col gap-6 rounded-3xl border border-sand bg-paper p-8 soft-shadow-sm sm:flex-row sm:items-center sm:p-9">
              <div className="arch-sm relative h-40 w-32 shrink-0 overflow-hidden">
                <Image src={headWelcome.img} alt={headWelcome.name} fill sizes="8rem" className="object-cover" />
              </div>
              <div>
                <blockquote className="font-display text-lg italic leading-snug text-pine sm:text-xl">
                  &ldquo;{headWelcome.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-bold text-pine">{headWelcome.name}</span>
                  <span className="text-mist">, {headWelcome.role}</span>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          {/* Alumnus */}
          <Reveal delay={120}>
            <figure className="flex h-full flex-col justify-center rounded-3xl bg-clay p-8 text-paper soft-shadow-sm sm:p-9">
              <span className="font-display text-5xl leading-none text-brass-soft">&ldquo;</span>
              <blockquote className="mt-2 font-display text-xl leading-snug sm:text-2xl">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-bold text-paper">{testimonial.name}</span>
                <span className="text-paper/70">, {testimonial.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
