export type { PageCopy, Block, Pull, PullSlot } from "./copy/types";

export * from "./copy/pathways";
export * from "./copy/campuses";
export * from "./copy/admissions";
export * from "./copy/utility";

import { pathwayPages } from "./copy/pathways";
import { campusPages } from "./copy/campuses";
import { admissionsPages } from "./copy/admissions";
import { utilityPages } from "./copy/utility";
import type { PageCopy } from "./copy/types";

/** Every page of Website Copy Draft 2 that has a route, in deck order. */
export const allPages: PageCopy[] = [
  ...pathwayPages,
  ...campusPages,
  ...admissionsPages,
  ...utilityPages,
];

export const pageBySlug = new Map(allPages.map((p) => [p.slug, p]));
