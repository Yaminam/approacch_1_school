import Link from "next/link";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";
import Gallery from "./Gallery";
import { galleryPhotos } from "@/lib/content";

export default function GalleryTeaser() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <Eyebrow>Life in pictures</Eyebrow>
              <h2 className="mt-6 text-4xl leading-[1.02] text-pine sm:text-5xl">
                A year at Dalhousie, in a few frames.
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-clay transition-colors hover:text-pine"
            >
              See the full gallery
              <span aria-hidden>-&gt;</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-12">
          <Gallery photos={galleryPhotos.slice(0, 12)} />
        </div>
      </div>
    </section>
  );
}
