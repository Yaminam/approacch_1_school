import Image from "next/image";
import { school, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="grain-pine text-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo.svg"
              alt="Dalhousie Public School"
              width={230}
              height={48}
              unoptimized
              className="h-11 w-auto [filter:brightness(0)_invert(1)]"
            />
            <p className="mt-5 max-w-sm leading-relaxed text-sage-soft">
              Exceptional by Nature. A 54-year-old alpine boarding school in the
              Himachal Himalayas, and a modern campus in New Chandigarh.
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-brass-soft">Explore</h3>
            <ul className="mt-5 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sage-soft transition-colors hover:text-paper"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-brass-soft">Get in touch</h3>
            <ul className="mt-5 space-y-2.5 text-sage-soft">
              <li>
                <a href={`tel:${school.phoneRaw}`} className="hover:text-paper">
                  {school.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${school.email}`} className="hover:text-paper">
                  {school.email}
                </a>
              </li>
              <li>
                <a href={`mailto:${school.emailChd}`} className="hover:text-paper">
                  {school.emailChd}
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a href={school.instagram} target="_blank" rel="noreferrer" className="hover:text-paper">
                  Instagram
                </a>
                <a href={school.facebook} target="_blank" rel="noreferrer" className="hover:text-paper">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-paper/15 pt-6 text-sm text-sage-soft sm:flex-row">
          <span>© {school.established}-2026 Dalhousie Public School. All rights reserved.</span>
          <span className="text-brass-soft">Exceptional by Nature</span>
        </div>
      </div>
    </footer>
  );
}
