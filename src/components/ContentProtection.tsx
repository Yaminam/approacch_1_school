"use client";

import { useEffect, useState } from "react";

// Best-effort content protection.
//
// IMPORTANT: The web platform cannot truly prevent screenshots. The OS captures
// the screen before JavaScript can react, so a raw Print Screen, a phone photo,
// or screen recording will still capture the page. What we CAN do:
//  - block right-click, dev-tools / save / view-source shortcuts, image drag
//  - blank the screen the instant the window loses focus or is hidden, which is
//    when many capture tools (e.g. Snipping Tool) activate — so a grab taken
//    then lands on a blank screen. (This also blanks when you switch tabs/apps.)
export default function ContentProtection() {
  const [blanked, setBlanked] = useState(false);

  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => e.preventDefault();

    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const ctrl = e.ctrlKey || e.metaKey;

      if (e.key === "F12") {
        e.preventDefault();
        return;
      }
      if (ctrl && !e.shiftKey && ["s", "u", "p"].includes(key)) {
        e.preventDefault();
        return;
      }
      if (ctrl && e.shiftKey && ["i", "j", "c"].includes(key)) {
        e.preventDefault();
      }
    };

    // Print Screen: blank the page and wipe the clipboard (best effort).
    const onPrintScreen = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") {
        setBlanked(true);
        navigator.clipboard?.writeText("").catch(() => {});
        window.setTimeout(() => setBlanked(false), 1200);
      }
    };

    const onDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement)?.tagName === "IMG") e.preventDefault();
    };

    // Blank whenever the window loses focus / becomes hidden (capture tools,
    // alt-tab, etc.), restore when it comes back.
    const blank = () => setBlanked(true);
    const unblank = () => setBlanked(false);
    const onVisibility = () => (document.hidden ? blank() : unblank());

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keydown", onPrintScreen);
    document.addEventListener("keyup", onPrintScreen);
    document.addEventListener("dragstart", onDragStart);
    window.addEventListener("blur", blank);
    window.addEventListener("focus", unblank);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keydown", onPrintScreen);
      document.removeEventListener("keyup", onPrintScreen);
      document.removeEventListener("dragstart", onDragStart);
      window.removeEventListener("blur", blank);
      window.removeEventListener("focus", unblank);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  if (!blanked) return null;

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-4 bg-pine-800 text-paper">
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-brass-soft">
        <rect x="4" y="10" width="16" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-brass-soft">
        Content protected
      </p>
    </div>
  );
}
