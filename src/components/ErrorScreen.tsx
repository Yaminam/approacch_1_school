import Link from "next/link";
import { PAD, PrimaryCta, GoldLink } from "./sections";
import { Ridge, Botanical, Crest } from "./Ornament";

/* The error screens.

   Shared shell so a 404 and a failed render are recognisably the same school:
   the burgundy ground the site already uses for its transitions, the crest,
   the gold rule, and a very large tabular numeral set as an editorial marker
   rather than as an apology. Both offer real routes onward instead of leaving
   the reader at a dead end. */

export default function ErrorScreen({
  code,
  eyebrow,
  title,
  body,
  primary,
  secondary,
  action,
  links,
}: {
  code: string;
  eyebrow: string;
  title: string;
  body: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  /* The retry button, which only the runtime error screen has. */
  action?: React.ReactNode;
  links?: { label: string; href: string }[];
}) {
  return (
    <main className="relative flex min-h-[78vh] items-center overflow-hidden bg-pine-800">
      <Ridge
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full text-brass-soft/20"
      />
      <Botanical
        aria-hidden
        className="pointer-events-none absolute -left-8 top-0 hidden h-full w-28 text-brass-soft/10 lg:block"
      />
      <Botanical
        aria-hidden
        className="pointer-events-none absolute -right-10 top-0 hidden h-full w-28 rotate-180 text-brass-soft/10 xl:block"
      />

      <div className={`${PAD} relative w-full py-20 sm:py-24`}>
        <div className="mx-auto max-w-[46rem] text-center">
          <div className="flex justify-center">
            <Crest className="h-12 w-11 text-brass-soft/80" />
          </div>

          <p
            aria-hidden
            className="mt-8 font-display text-[5.5rem] leading-none text-brass-soft/25 [font-variant-numeric:tabular-nums] sm:text-[7.5rem]"
          >
            {code}
          </p>

          <p className="mt-6 text-[0.75rem] font-bold uppercase tracking-[0.24em] text-brass-soft lg:text-[0.68rem]">
            {eyebrow}
          </p>

          <h1 className="mt-5 font-display text-[1.9rem] leading-[1.14] text-paper sm:text-[2.5rem] [text-wrap:balance]">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-[52ch] text-[1.0625rem] leading-[1.75] text-sage-soft/85 [text-wrap:balance]">
            {body}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {action}
            {primary && <PrimaryCta label={primary.label} href={primary.href} dark />}
            {secondary && <GoldLink label={secondary.label} href={secondary.href} dark />}
          </div>

          {links && links.length > 0 && (
            <div className="mt-12 border-t border-brass-soft/25 pt-7">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brass-soft/80 lg:text-[0.66rem]">
                Or pick up the story here
              </p>
              <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group inline-flex min-h-11 items-center gap-2 text-[0.78rem] font-semibold text-sage-soft transition-colors hover:text-brass-soft lg:min-h-0 lg:text-[0.82rem]"
                    >
                      {l.label}
                      <span
                        aria-hidden
                        className="text-brass-soft/60 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        &rarr;
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
