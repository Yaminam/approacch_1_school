import { learnerValues } from "@/lib/content";
import { SectionHead, FeatureGrid } from "./ui";

export default function Values() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <SectionHead
          eyebrow="How our learners grow"
          title="The kind of person a Dalhousie child becomes."
          intro="We are clear about what we are growing here. These are the qualities we nurture, deliberately, from the very first day."
        />
        <FeatureGrid items={learnerValues} cols={3} />
      </div>
    </section>
  );
}
