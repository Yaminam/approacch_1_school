import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqSearch from "@/components/FaqSearch";
import { admissionsFaqs, admissionsFaqItems } from "@/lib/pageCopy";

export const metadata: Metadata = admissionsFaqs.meta;

const p = admissionsFaqs;

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow={p.nav}
        title={p.title}
        emphasis={p.emphasis}
        subtitle={p.subhead}
        image={p.image}
      />
      <FaqSearch items={admissionsFaqItems} kicker={p.kicker} />
    </main>
  );
}
