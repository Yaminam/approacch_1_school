import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { sportsPathway } from "@/lib/pageCopy";

export const metadata: Metadata = sportsPathway.meta;

export default function Page() {
  return <CopyPage page={sportsPathway} />;
}
