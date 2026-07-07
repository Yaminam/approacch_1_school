import Image from "next/image";
import { filmUrl } from "@/lib/content";

export default function FilmMoment() {
  return (
    <section className="relative overflow-hidden bg-pine-800">
      <Image src="/images/hero-student.jpg" alt="" fill sizes="100vw" className="object-cover object-[center_25%]" />
      <div className="absolute inset-0 bg-pine-800/65" />
      <a
        href={filmUrl}
        target="_blank"
        rel="noreferrer"
        className="group relative z-10 mx-auto flex min-h-[62vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center"
      >
        <span className="grid h-20 w-20 place-items-center rounded-full border border-paper/50 bg-paper/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-paper">
            <path d="M6 4 L20 12 L6 20 Z" />
          </svg>
        </span>
        <span className="eyebrow mt-8 text-brass-soft">In motion</span>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] text-paper sm:text-6xl">
          See life at Dalhousie for yourself.
        </h2>
        <span className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-paper/80">
          Watch our world on Instagram
        </span>
      </a>
    </section>
  );
}
