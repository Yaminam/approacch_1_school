import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Campuses from "@/components/Campuses";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Our Campuses, Dalhousie Public School",
  description:
    "One school, two homes in the hills, the alpine Dalhousie campus and the modern New Chandigarh campus.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Our Campuses"
        title="One school, two homes"
        emphasis="in the hills."
        subtitle="The same Dalhousie method, in two very different settings. Explore each, or take the two-minute quiz to find the one that fits your child."
        image="/images/campus-wide.jpg"
      />
      <Campuses />
      <CTA />
    </main>
  );
}
