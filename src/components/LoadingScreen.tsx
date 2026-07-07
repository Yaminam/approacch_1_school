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
    timer.current = window.setTimeout(() => setShow(false), 1000);
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
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-pine-800 transition-opacity duration-500 ease-out ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="splash-logo flex flex-col items-center">
        <Image
          src="/images/logo.svg"
          alt="Dalhousie Public School"
          width={280}
          height={60}
          priority
          unoptimized
          className="h-14 w-auto [filter:brightness(0)_invert(1)]"
        />
        <span className="mt-6 text-[0.7rem] font-bold uppercase tracking-[0.35em] text-brass-soft">
          Exceptional by Nature
        </span>

        <div className="mt-8 h-px w-40 overflow-hidden bg-paper/15">
          <div className="splash-bar h-full w-1/4 rounded-full bg-brass-soft" />
        </div>
      </div>
    </div>
  );
}
