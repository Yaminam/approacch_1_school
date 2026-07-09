"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { whatsappHref, school, contact } from "@/lib/content";

type Props = { children: React.ReactNode; className?: string };

export default function BookVisitButton({ children, className = "" }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      {/* Portalled into <body> so the hero's stacking context and overflow-hidden
          cannot trap or clip the popover. */}
      {open && mounted
        ? createPortal(<VisitPopover onClose={() => setOpen(false)} />, document.body)
        : null}
    </>
  );
}

const CAMPUSES = ["Dalhousie Campus", "New Chandigarh Campus", "Not sure yet"];

function VisitPopover({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [campus, setCampus] = useState(CAMPUSES[0]);
  const [grade, setGrade] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const summary = () =>
    [
      `Visit request for ${school.name}`,
      `Parent: ${name}`,
      `Phone: ${phone}`,
      `Campus: ${campus}`,
      grade ? `Child's grade: ${grade}` : null,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Please add your name and a phone number.");
      return;
    }
    setError("");
    window.open(whatsappHref(summary()), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const mailto = `mailto:${contact.dalhousie.email}?subject=${encodeURIComponent(
    "Campus visit request",
  )}&body=${encodeURIComponent(summary())}`;

  const field =
    "w-full rounded-lg border border-pine/15 bg-paper px-3 py-2.5 text-sm text-pine outline-none transition-colors placeholder:text-mist/60 focus:border-clay";

  return (
    <div className="popup-in fixed bottom-4 right-4 z-[200] w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-pine/12 bg-cream soft-shadow sm:bottom-6 sm:right-6">
      <div className="flex items-start justify-between gap-3 border-b border-pine/10 px-5 py-4">
        <div>
          <span className="eyebrow text-clay">Visit Us</span>
          <h3 className="mt-1 font-display text-xl leading-tight text-pine">
            Book a visit
          </h3>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="rounded-full border border-pine/15 p-1.5 text-pine transition-colors hover:border-clay hover:text-clay"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
      </div>

      {sent ? (
        <div className="px-5 py-6 text-center">
          <h4 className="font-display text-lg text-pine">Your request is on its way.</h4>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            We opened WhatsApp with your details. Press send there and a real person
            will reply, usually the same day.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={mailto}
              className="rounded-full border border-pine/20 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-pine transition-colors hover:border-clay hover:text-clay"
            >
              Send by email instead
            </a>
            <button
              onClick={onClose}
              className="rounded-full bg-clay px-4 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-paper"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={submit} className="grid gap-3 px-5 py-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={field}
            placeholder="Your name"
            aria-label="Your name"
            required
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={field}
            placeholder="Phone number"
            aria-label="Phone number"
            inputMode="tel"
            required
          />
          <select
            value={campus}
            onChange={(e) => setCampus(e.target.value)}
            className={field}
            aria-label="Campus"
          >
            {CAMPUSES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <input
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className={field}
            placeholder="Child's grade (optional)"
            aria-label="Child's grade"
          />
          <textarea
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={field}
            placeholder="Anything you would like us to know (optional)"
            aria-label="Message"
          />

          {error && <p className="text-xs font-semibold text-clay">{error}</p>}

          <button
            type="submit"
            className="mt-1 rounded-full bg-clay px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-paper transition-transform hover:-translate-y-0.5"
          >
            Send request
          </button>
          <p className="text-center text-xs text-mist">
            A real person replies, usually the same day.
          </p>
        </form>
      )}
    </div>
  );
}
