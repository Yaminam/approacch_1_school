import Image from "next/image";
import Reveal from "./Reveal";
import { SectionHead } from "./ui";
import { onlyAt } from "@/lib/content";

export default function OnlyAt() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <SectionHead
          eyebrow="Only at Dalhousie"
          title="Things you simply will not find down in the plains."
          intro="A few of the experiences that make a Dalhousie childhood unlike any other."
        />
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {onlyAt.map((o, i) => (
            <Reveal key={o.title} delay={i * 70}>
              <article className="group">
                <div className="arch-sm relative aspect-[4/3] overflow-hidden soft-shadow-sm">
                  <Image
                    src={o.img}
                    alt={o.title}
                    fill
                    sizes="(max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-xl text-pine">{o.title}</h3>
                <p className="mt-2 leading-relaxed text-mist">{o.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
