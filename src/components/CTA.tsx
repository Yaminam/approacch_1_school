import Image from "next/image";
import { whatsappHref, school } from "@/lib/content";

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
          Come and feel the mountain air.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sage-soft">
          The best way to understand Dalhousie is to stand in it. Book a visit,
          or message us on WhatsApp, and we will reply personally.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappHref(`Hi! I would like to book a campus visit at ${school.name}.`)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brass-soft px-7 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-pine-800 transition-transform hover:-translate-y-0.5"
          >
            Book a visit on WhatsApp
          </a>
          <a
            href={`tel:${school.phoneRaw}`}
            className="rounded-full border border-paper/40 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-paper transition-colors hover:border-brass-soft hover:text-brass-soft"
          >
            Call {school.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
