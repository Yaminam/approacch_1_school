import Image from "next/image";
import { school } from "@/lib/content";
import BookVisitButton from "./BookVisitButton";

export default function CTA() {
  return (
    <section id="visit" className="relative overflow-hidden bg-pine-800">
      <Image src="/images/campus-wide.jpg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-pine-800/82" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center sm:px-8">
        <div className="flex justify-center">
          <span className="flex items-center gap-3">
            <span className="h-px w-8 bg-brass-soft" />
            <span className="eyebrow text-brass-soft">Visit Us</span>
            <span className="h-px w-8 bg-brass-soft" />
          </span>
        </div>

        <h2 className="mt-6 font-display text-4xl leading-[1.02] text-paper sm:text-6xl">
          You will not lie awake <span className="italic text-brass-soft">wondering.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sage-soft">
          Because you will have met the people who will know your child by name,
          seen the room where they will sleep, and stood in the air they will
          breathe every morning. Choosing a school is a big decision. Come and
          make it with your own eyes.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <BookVisitButton className="rounded-full bg-brass-soft px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-pine-800 transition-transform hover:-translate-y-0.5">
            Book a visit
          </BookVisitButton>
          <a
            href={`tel:${school.phoneRaw}`}
            className="rounded-full border border-paper/45 px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:border-brass-soft hover:text-brass-soft"
          >
            Call {school.phone}
          </a>
        </div>

        <p className="mt-7 text-sm text-paper/60">
          A real person replies, usually the same day.
        </p>
      </div>
    </section>
  );
}
