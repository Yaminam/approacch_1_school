/* Website Copy Draft 2, transcribed. One entry per page of the deck.

   `title` + `emphasis` split the headline so the italic brass tail lands on the
   phrase the copy is actually leaning on. `kicker` is the small caps line the
   deck sets above each headline. `primary` / `secondary` are the CTA labels the
   deck prescribes; they resolve to routes through src/lib/cta.ts.

   `pulls` are the extra calls to action, placed by hand at the point in the
   page where the argument has just earned the ask. A pull is written in the
   page's own language, not a generic "learn more". */

export type Block = { h: string; p: string[] };

/** Where a pull-CTA sits in the run of bands. */
export type PullSlot = "lead" | "grid" | "split" | "list";

export type Pull = {
  slot: PullSlot;
  /** The sentence that earns the click. Written in the page's voice. */
  line: string;
  /** CTA label, resolved through src/lib/cta.ts. */
  label: string;
  /** Optional second, quieter option alongside it. */
  alt?: string;
};

/* How the run of blocks should be rendered.

   "sequence" is for genuinely ordered content: the moments of a day, the eight
   steps of admission, Toddler through Senior School. The numeral carries
   meaning, so it gets a numbered spine.

   "set" is for parallel aspects that have no order: emotional care, medical
   support, safeguarding, food, supervision. Numbering these would tell the
   reader that safeguarding follows medical support, which is false. They get
   an unnumbered two-column grid instead. */
export type BlockKind = "sequence" | "set";

export type PageCopy = {
  slug: string;
  kind?: BlockKind;
  nav: string;
  kicker: string;
  title: string;
  emphasis?: string;
  subhead: string;
  primary: string;
  secondary: string;
  image: string;
  image2?: string;
  closeEyebrow?: string;
  pulls?: Pull[];
  meta: { title: string; description: string };
  blocks: Block[];
};
