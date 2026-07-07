import Image from "next/image";
import Reveal from "./Reveal";

/* Editorial building blocks. Restraint over chrome: hairlines, index numerals,
   generous whitespace, one gold accent. No em dashes, no emoji. */

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="h-px w-8 bg-brass" />
      <span className={`eyebrow ${dark ? "text-brass-soft" : "text-clay"}`}>{children}</span>
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <Reveal>
      <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}>
        <div className={center ? "flex justify-center" : ""}>
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        </div>
        <h2 className={`mt-6 text-4xl leading-[1.02] sm:text-5xl lg:text-6xl ${dark ? "text-paper" : "text-pine"}`}>
          {title}
        </h2>
        {intro && (
          <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${center ? "mx-auto" : ""} ${dark ? "text-sage-soft" : "text-mist"}`}>
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export function FeatureGrid({
  items,
  cols = 3,
  dark = false,
}: {
  items: { title: string; body: string }[];
  cols?: 2 | 3 | 4;
  dark?: boolean;
}) {
  const colClass =
    cols === 2 ? "sm:grid-cols-2" : cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`mt-12 grid gap-x-10 gap-y-12 ${colClass}`}>
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 70}>
          <article className={`border-t pt-6 ${dark ? "border-paper/15" : "hair"}`}>
            <span className="font-display text-2xl text-brass">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={`mt-4 text-xl ${dark ? "text-paper" : "text-pine"}`}>{it.title}</h3>
            <p className={`mt-2.5 leading-relaxed ${dark ? "text-sage-soft" : "text-mist"}`}>{it.body}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function SplitFeature({
  image,
  eyebrow,
  title,
  body,
  points,
  reverse = false,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  body: string;
  points?: string[];
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={reverse ? "lg:order-2" : ""}>
        <div className="arch-sm relative aspect-[4/3] overflow-hidden soft-shadow-sm">
          <Image src={image} alt="" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
        </div>
      </Reveal>
      <Reveal className={reverse ? "lg:order-1" : ""}>
        <div>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="mt-5 text-3xl leading-[1.05] text-pine sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-mist">{body}</p>
          {points && (
            <ul className="mt-7 space-y-3.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                  <span className="text-pine">{p}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Reveal>
    </div>
  );
}

export function Pills({ items }: { items: string[] }) {
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      {items.map((it, i) => (
        <Reveal key={it} delay={i * 35}>
          <span className="inline-block rounded-full border border-pine/20 px-4 py-2 text-sm font-semibold text-pine">
            {it}
          </span>
        </Reveal>
      ))}
    </div>
  );
}

export function Section({
  children,
  tone = "cream",
  id,
}: {
  children: React.ReactNode;
  tone?: "cream" | "blush" | "pine" | "paper";
  id?: string;
}) {
  const bg =
    tone === "blush" ? "bg-blush" : tone === "pine" ? "grain-pine" : tone === "paper" ? "bg-paper" : "bg-cream";
  return (
    <section id={id} className={bg}>
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24">{children}</div>
    </section>
  );
}
