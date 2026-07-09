"use client";

import { useEffect } from "react";

// Light content protection.
//
// IMPORTANT: a web page CANNOT prevent screenshots. The OS captures the frame
// before any JavaScript runs (Print Screen), and Snipping Tool freezes the
// screen before the page can react — so blanking the page on focus-loss never
// lands in the capture, it only annoys real visitors when they switch tabs.
// Screen recording and a phone photo are likewise untouchable.
//
// So we only do what actually works: block right-click, the dev-tools / save /
// view-source shortcuts, and image dragging. Long-press "save image" and text
// selection on touch devices are handled in globals.css.
export default function ContentProtection() {
  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => e.preventDefault();

    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const ctrl = e.ctrlKey || e.metaKey;

      // F12 → dev tools
      if (e.key === "F12") {
        e.preventDefault();
        return;
      }
      // Ctrl/Cmd + S (save), U (view source), P (print)
      if (ctrl && !e.shiftKey && ["s", "u", "p"].includes(key)) {
        e.preventDefault();
        return;
      }
      // Ctrl/Cmd + Shift + I / J / C → dev tools / console / inspector
      if (ctrl && e.shiftKey && ["i", "j", "c"].includes(key)) {
        e.preventDefault();
      }
    };

    const onDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement)?.tagName === "IMG") e.preventDefault();
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("dragstart", onDragStart);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return null;
}
