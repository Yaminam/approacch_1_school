import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { SectionHead } from "./ui";

const items = [
  { title: "Academics & Pathways", href: "/academics", img: "/images/debate.jpg" },
  { title: "Sport & the Outdoors", href: "/student-life", img: "/images/trekking.jpg" },
  { title: "Residential Life", href: "/residential-life", img: "/images/chd-hostel.jpg" },
];

export default function Explore() {
  return (
    <section className="bg-blush">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <SectionHead eyebrow="More to discover" title="Step a little deeper in." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.href} delay={i * 100}>
              <Link href={it.href} className="group block">
                <div className="arch-sm relative aspect-[4/5] overflow-hidden soft-shadow-sm">
                  <Image
                    src={it.img}
                    alt={it.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine-800/85 via-pine-800/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                    <h3 className="font-display text-2xl text-paper">{it.title}</h3>
                    <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-brass-soft">
                      Explore
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">-&gt;</span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
