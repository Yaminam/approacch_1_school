import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { Section } from "@/components/ui";
import { policies } from "@/lib/content";

export function generateStaticParams() {
  return policies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const policy = policies.find((p) => p.slug === slug);
  if (!policy) return { title: "Policy, Dalhousie Public School" };
  return { title: `${policy.title}, Dalhousie Public School`, description: policy.summary };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const policy = policies.find((p) => p.slug === slug);
  if (!policy) notFound();

  return (
    <main>
      <PageHero
        eyebrow="Policies"
        title={policy.title}
        subtitle={policy.summary}
        image="/images/aerial.jpg"
      />

      <Section tone="cream">
        <div className="mx-auto max-w-3xl">
          <Link href="/policies" className="text-sm font-bold text-clay hover:text-pine">
            &larr; All policies
          </Link>
          <div className="mt-10 space-y-12">
            {policy.sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 60}>
                <section className="border-t hair pt-8">
                  <h2 className="text-2xl text-pine sm:text-3xl">{s.heading}</h2>
                  {s.body && <p className="mt-4 text-lg leading-relaxed text-mist">{s.body}</p>}
                  {s.points && (
                    <ul className="mt-5 space-y-3.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-3.5">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                          <span className="leading-relaxed text-pine">{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}
          </div>
          <p className="mt-14 border-t hair pt-6 text-sm text-mist">
            Effective August 2025. Reviewed on a two-year cycle, next in the 2027-28 session. For the
            full policy document, please contact the school office.
          </p>
        </div>
      </Section>

      <CTA />
    </main>
  );
}
