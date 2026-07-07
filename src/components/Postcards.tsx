import Image from "next/image";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";

const cards = [
  { img: "/images/trekking.jpg", caption: "First summit, second wind", rot: "-2deg", w: "w-60" },
  { img: "/images/theatre.jpg", caption: "Opening-night nerves", rot: "1.5deg", w: "w-56" },
  { img: "/images/shooting.jpg", caption: "Steady hands", rot: "-1deg", w: "w-56" },
  { img: "/images/yoga.jpg", caption: "Sunrise at seven thousand feet", rot: "2deg", w: "w-60" },
  { img: "/images/basketball.jpg", caption: "Full-court friendships", rot: "-1.5deg", w: "w-56" },
  { img: "/images/debate.jpg", caption: "The floor is yours", rot: "1deg", w: "w-56" },
  { img: "/images/music.jpg", caption: "Practice, then magic", rot: "-2deg", w: "w-60" },
  { img: "/images/campus-wide.jpg", caption: "Home, for now", rot: "1.5deg", w: "w-56" },
];

export default function Postcards() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <Eyebrow>From the mountain</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.02] text-pine sm:text-5xl">
            Little moments, sent from{" "}
            <span className="italic text-clay">seven thousand feet.</span>
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-12 sm:gap-x-10">
          {cards.map((c, i) => (
            <Reveal key={c.caption} delay={i * 70}>
              <figure
                className={`group relative ${c.w} bg-paper p-3 pb-4 soft-shadow-sm transition-all duration-300 hover:z-10 hover:-translate-y-1.5 hover:rotate-0`}
                style={{ rotate: c.rot }}
              >
                <div className="arch-sm relative aspect-square overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.caption}
                    fill
                    sizes="(max-width:640px) 55vw, 15rem"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-center font-display text-lg italic text-pine">
                  {c.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
