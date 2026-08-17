"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Full-screen branded splash. Shown on first load / refresh, and again briefly
// on every client-side navigation (route change) so moving between pages always
// passes through the Dalhousie loading screen.
export default function LoadingScreen() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const first = useRef(true);
  const timer = useRef<number | undefined>(undefined);

  // Whenever the splash is shown, hide it again after a short beat.
  useEffect(() => {
    if (!show) return;
    /* 1000ms was a full second added to every single navigation, which is
       what made the site feel slow to move around. Long enough to register
       as a deliberate brand moment, short enough not to be a toll. */
    timer.current = window.setTimeout(() => setShow(false), 380);
    return () => window.clearTimeout(timer.current);
  }, [show]);

  // Re-show the splash on client navigation (skip the very first render).
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setShow(true);
  }, [pathname]);

  // Allow anything (e.g. the intro's "Continue") to summon the splash on demand.
  useEffect(() => {
    const onShow = () => setShow(true);
    window.addEventListener("dps:loading", onShow);
    return () => window.removeEventListener("dps:loading", onShow);
  }, []);

  return (
    <div
      aria-hidden
      /* overflow-hidden and horizontal padding: the splash sits above every
         page, so any content wider than the screen here gives the whole site a
         horizontal scrollbar. The wordmark and its wide letter-spacing did
         exactly that on a 320px phone. */
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-pine-800 px-6 transition-opacity duration-500 ease-out ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="splash-logo flex w-full max-w-full flex-col items-center">
        <Image
          src="/images/logo.svg"
          alt="Dalhousie Public School"
          width={280}
          height={60}
          priority
          unoptimized
          className="h-10 w-auto max-w-full [filter:brightness(0)_invert(1)] sm:h-14"
        />
        <span className="mt-6 max-w-full text-center text-[0.6rem] font-bold uppercase tracking-[0.22em] text-brass-soft sm:text-[0.7rem] sm:tracking-[0.35em]">
          Exceptional by Nature
        </span>

        <div className="mt-8 h-px w-32 max-w-full overflow-hidden bg-paper/15 sm:w-40">
          <div className="splash-bar h-full w-1/4 rounded-full bg-brass-soft" />
        </div>
      </div>
    </div>
  );
}
