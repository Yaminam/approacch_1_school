import Image from "next/image";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";
import { headWelcome } from "@/lib/content";

export default function HeadWelcome() {
  return (
    <section className="bg-blush">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-56 sm:w-64">
              <div className="arch relative aspect-[4/5] overflow-hidden soft-shadow">
                <Image
                  src={headWelcome.img}
                  alt={headWelcome.name}
                  fill
                  sizes="16rem"
                  className="object-cover"
                />
              </div>
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-pine px-5 py-2 text-sm font-bold text-paper">
                {headWelcome.name}
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <Eyebrow>A word from our Head</Eyebrow>
              <blockquote className="mt-6 font-display text-2xl leading-[1.3] text-pine sm:text-3xl">
                <span className="text-clay">&ldquo;</span>
                {headWelcome.quote}
                <span className="text-clay">&rdquo;</span>
              </blockquote>
              <p className="mt-6 font-semibold text-pine">
                {headWelcome.name}
                <span className="font-normal text-mist">, {headWelcome.role}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
