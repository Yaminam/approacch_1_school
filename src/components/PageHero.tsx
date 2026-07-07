import Image from "next/image";
import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  emphasis,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  emphasis?: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[66vh] w-full items-end overflow-hidden bg-pine-800">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-pine-800/60 via-pine-800/25 to-pine-800/90" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-32 sm:px-8">
        <nav className="mb-6 flex items-center gap-2 text-sm text-paper/70">
          <Link href="/" className="hover:text-brass-soft">Home</Link>
          <span aria-hidden>/</span>
          <span className="text-brass-soft">{eyebrow}</span>
        </nav>
        <h1 className="max-w-5xl font-display text-[2.9rem] leading-[0.98] text-paper sm:text-6xl lg:text-7xl">
          {title} {emphasis && <span className="italic text-brass-soft">{emphasis}</span>}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl border-t border-paper/20 pt-6 text-lg leading-relaxed text-paper/85">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
