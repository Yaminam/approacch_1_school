"use client";

import { useState } from "react";
import { whatsappHref, school } from "@/lib/content";

/* The admissions forms from pages 34, 35 and 44 of the copy deck.

   There is no backend on this site yet, so submit() hands the completed
   enquiry to the admissions team over WhatsApp or email and shows the deck's
   confirmation copy. When an endpoint or CRM exists, replace the body of
   submit() only; every field, label, consent line and confirmation message
   below already matches the approved copy. */

export type Variant = "visit" | "enquire" | "contact";

const CAMPUSES = [
  { value: "Dalhousie Campus", label: "Dalhousie Campus", note: "The Mountain Campus. Full residential, CBSE." },
  { value: "New Chandigarh Campus", label: "New Chandigarh Campus", note: "The Modern Campus. Boarding or day boarding." },
  { value: "Help me choose", label: "Help me choose", note: "We will talk it through with you." },
];

const INTERESTS = [
  "Academics",
  "Competitive Edge",
  "Defence Pathway",
  "Residential life",
  "Early years",
  "Sport",
  "Confidence",
  "Care and pastoral",
  "Fees",
];

const RESIDENTIAL = ["Boarding", "Day boarding", "Not sure yet"];

const CONSENT: Record<Variant, string> = {
  visit:
    "I agree that Dalhousie Public School may use these details to arrange the visit and respond to this admissions enquiry.",
  enquire:
    "I agree that Dalhousie Public School may use these details to respond to my enquiry. Optional updates and marketing communication are requested separately.",
  contact:
    "I agree that Dalhousie Public School may use these details to respond to my enquiry, in accordance with the approved privacy notice.",
};

const CONFIRMATION: Record<Variant, { h: string; p: string }> = {
  visit: {
    h: "Thank you for requesting a Dalhousie visit.",
    p: "Our admissions team will contact you to confirm the campus, date, time and anything you need to carry.",
  },
  enquire: {
    h: "Thank you for contacting Dalhousie Public School.",
    p: "Your enquiry has been routed to the relevant admissions team. We will respond through your preferred contact method.",
  },
  contact: {
    h: "Thank you for contacting Dalhousie Public School.",
    p: "Your message has been routed to the relevant team.",
  },
};

const SUBMIT_LABEL: Record<Variant, string> = {
  visit: "Book my visit",
  enquire: "Submit enquiry",
  contact: "Send message",
};

const field =
  "w-full rounded-xl border border-pine/20 bg-paper px-4 py-3 text-pine outline-none transition-colors placeholder:text-mist/60 focus:border-clay";
const label = "block text-sm font-bold text-pine";

export default function EnquiryForm({ variant = "enquire" }: { variant?: Variant }) {
  const [campus, setCampus] = useState("");
  const [parent, setParent] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [child, setChild] = useState("");
  const [grade, setGrade] = useState("");
  const [current, setCurrent] = useState("");
  const [residential, setResidential] = useState("");
  const [date, setDate] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const toggle = (i: string) =>
    setInterests((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  function summary() {
    const rows: [string, string][] = [
      ["Campus", campus],
      ["Parent", parent],
      ["Email", email],
      ["Telephone", phone],
      ["City", city],
      ["Student", child],
      ["Intended grade", grade],
      ["Current school", current],
      ["Residential preference", residential],
      ["Preferred date", date],
      ["Interested in", interests.join(", ")],
      ["Message", message],
    ];
    const head =
      variant === "visit"
        ? "Dalhousie visit request"
        : variant === "contact"
          ? "Website enquiry"
          : "Admissions enquiry";
    return [head, ...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`)].join("\n");
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!parent.trim() || !(email.trim() || phone.trim())) {
      setError("Please give us your name and either an email address or a telephone number.");
      return;
    }
    if (!consent) {
      setError("Please tick the consent box so we are allowed to reply.");
      return;
    }
    setError("");
    // Swap this line for a POST to the admissions endpoint when one exists.
    window.open(whatsappHref(summary()), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    const c = CONFIRMATION[variant];
    return (
      <div className="rounded-3xl border border-pine/12 bg-paper p-8 soft-shadow-sm sm:p-10">
        <span className="eyebrow text-clay">Confirmation</span>
        <h3 className="mt-4 text-2xl text-pine sm:text-3xl">{c.h}</h3>
        <p className="mt-3 leading-relaxed text-mist">{c.p}</p>
        <div className="mt-7 flex flex-wrap gap-4 border-t hair pt-6 text-sm">
          <a href={`mailto:${school.email}`} className="font-bold text-clay hover:text-pine">
            {school.email}
          </a>
          <a href={`tel:${school.phoneRaw}`} className="font-bold text-clay hover:text-pine">
            {school.phone}
          </a>
        </div>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-bold text-mist underline decoration-brass decoration-2 underline-offset-4 hover:text-clay"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-pine/12 bg-paper p-7 soft-shadow-sm sm:p-9">
      {/* Campus */}
      <fieldset>
        <legend className={label}>
          {variant === "contact" ? "Which campus is your enquiry about?" : "Choose a campus"}
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {CAMPUSES.map((c) => (
            <button
              type="button"
              key={c.value}
              onClick={() => setCampus(c.value)}
              className={`rounded-2xl border p-4 text-left transition-colors ${
                campus === c.value
                  ? "border-clay bg-blush/50"
                  : "border-pine/15 bg-cream hover:border-clay/50"
              }`}
            >
              <span className="block font-bold text-pine">{c.label}</span>
              <span className="mt-1 block text-xs leading-snug text-mist">{c.note}</span>
            </button>
          ))}
        </div>
      </fieldset>

      {/* Parent */}
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="parent">Your name</label>
          <input id="parent" className={`${field} mt-2`} value={parent} onChange={(e) => setParent(e.target.value)} placeholder="Parent or guardian" />
        </div>
        <div>
          <label className={label} htmlFor="email">Email</label>
          <input id="email" type="email" className={`${field} mt-2`} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
        </div>
        <div>
          <label className={label} htmlFor="phone">Telephone</label>
          <input id="phone" inputMode="tel" className={`${field} mt-2`} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91" />
        </div>
        <div>
          <label className={label} htmlFor="city">City</label>
          <input id="city" className={`${field} mt-2`} value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
      </div>

      {/* Student */}
      {variant !== "contact" && (
        <>
          <p className="mt-8 eyebrow text-clay">Tell us about your child</p>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            <div>
              <label className={label} htmlFor="child">Student name</label>
              <input id="child" className={`${field} mt-2`} value={child} onChange={(e) => setChild(e.target.value)} />
            </div>
            <div>
              <label className={label} htmlFor="grade">Intended entry grade</label>
              <input id="grade" className={`${field} mt-2`} value={grade} onChange={(e) => setGrade(e.target.value)} placeholder="e.g. Class VI" />
            </div>
            <div>
              <label className={label} htmlFor="current">Current school</label>
              <input id="current" className={`${field} mt-2`} value={current} onChange={(e) => setCurrent(e.target.value)} />
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="residential">Residential preference</label>
              <select id="residential" className={`${field} mt-2`} value={residential} onChange={(e) => setResidential(e.target.value)}>
                <option value="">Select an option</option>
                {RESIDENTIAL.map((r) => <option key={r}>{r}</option>)}
              </select>
            </div>
            {variant === "visit" && (
              <div>
                <label className={label} htmlFor="date">Preferred date</label>
                <input id="date" type="date" className={`${field} mt-2`} value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
            )}
          </div>

          <p className="mt-8 eyebrow text-clay">
            {variant === "visit" ? "What would you like to understand better?" : "What would you like to know more about?"}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {INTERESTS.map((i) => (
              <button
                type="button"
                key={i}
                onClick={() => toggle(i)}
                className={`min-h-11 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
                  interests.includes(i)
                    ? "border-clay bg-clay text-paper"
                    : "border-pine/20 text-pine hover:border-clay hover:text-clay"
                }`}
              >
                {i}
              </button>
            ))}
          </div>
        </>
      )}

      <div className="mt-7">
        <label className={label} htmlFor="message">
          {variant === "contact" ? "Your message" : "Your question"}
        </label>
        <textarea
          id="message"
          rows={4}
          className={`${field} mt-2 resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Anything that will help us understand your family's priorities."
        />
      </div>

      {/* Consent */}
      <label className="mt-7 flex cursor-pointer items-start gap-3 border-t hair pt-6">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 accent-[#6b0630]"
        />
        <span className="text-sm leading-relaxed text-mist">{CONSENT[variant]}</span>
      </label>

      {error && <p className="mt-4 text-sm font-semibold text-clay">{error}</p>}

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-clay px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-paper transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        {SUBMIT_LABEL[variant]}
      </button>

      <p className="mt-5 text-sm text-mist">
        Need help sooner? Call{" "}
        <a href={`tel:${school.phoneRaw}`} className="font-bold text-clay hover:text-pine">{school.phone}</a>{" "}
        or write to{" "}
        <a href={`mailto:${school.email}`} className="font-bold text-clay hover:text-pine">{school.email}</a>.
      </p>
    </form>
  );
}
