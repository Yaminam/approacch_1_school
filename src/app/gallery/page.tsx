import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Gallery from "@/components/Gallery";
import { Section } from "@/components/ui";
import { galleryPhotos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery, Dalhousie Public School",
  description:
    "Life at Dalhousie in pictures, from the shooting range to the summit, the stage to the stables, across both campuses.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        title="Life at Dalhousie,"
        emphasis="in pictures."
        subtitle="From the shooting range to the summit, the stage to the stables. A glimpse of everyday life across both campuses."
        image="/images/gallery/mountaineering.jpg"
      />
      <Section tone="cream">
        <Gallery photos={galleryPhotos} />
      </Section>
      <CTA />
    </main>
  );
}
