import Image from "next/image";
import { Eyebrow } from "./ui";

const VIDEO_ID = "9KE9ECO87gc";
const WATCH_URL = `https://youtu.be/${VIDEO_ID}`;
const embedSrc =
  `https://www.youtube-nocookie.com/embed/${VIDEO_ID}` +
  `?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0` +
  `&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3`;

export default function BrandVideo() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-pine-800">
      {/* poster fallback behind the video */}
      <Image src="/images/hero-student.jpg" alt="" fill sizes="100vw" className="object-cover object-[center_25%]" />

      {/* full-bleed YouTube background, scaled to cover */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src={embedSrc}
          title="Dalhousie Public School film"
          allow="autoplay; encrypted-media; picture-in-picture"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-pine-800/85 via-pine-800/40 to-pine-800/55" />

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-10">
        <Eyebrow dark>In motion</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[1.0] text-paper sm:text-7xl">
          See Dalhousie <span className="italic text-brass-soft">for yourself.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/85">
          A website can only say so much. This is everyday life on the mountain,
          in motion.
        </p>
        <div className="mt-9">
          <a
            href={WATCH_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-brass-soft px-7 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-pine-800 transition-transform hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 4 L20 12 L6 20 Z" />
            </svg>
            Watch with sound
          </a>
        </div>
      </div>
    </section>
  );
}
