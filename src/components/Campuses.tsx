import Image from "next/image";
import Link from "next/link";
import { campuses } from "@/lib/content";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";

export default function Campuses() {
  return (
    <section id="campuses" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <Eyebrow>Our Campuses</Eyebrow>
        <h2 className="mt-6 max-w-3xl text-4xl leading-[1.02] text-pine sm:text-5xl">
          One school, two homes in the hills.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-x-10 gap-y-14 lg:grid-cols-2">
        {campuses.map((c, i) => {
          const href = c.id === "dalhousie" ? "/campuses/dalhousie" : "/campuses/new-chandigarh";
          return (
            <Reveal key={c.id} delay={i * 120}>
              <article className="group">
                <Link href={href} className="arch-sm block overflow-hidden soft-shadow-sm">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={c.img}
                      alt={c.name}
                      fill
                      sizes="(max-width:1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="mt-6">
                  <span className="eyebrow text-clay">{c.kind}</span>
                  <h3 className="mt-3 text-3xl text-pine">{c.name}</h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-mist">{c.blurb}</p>
                  <Link
                    href={href}
                    className="mt-5 inline-flex items-center gap-2 whitespace-nowrap font-bold text-pine transition-colors hover:text-clay"
                  >
                    Explore {c.name.replace(/\s*Campus$/, "")}
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">-&gt;</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
