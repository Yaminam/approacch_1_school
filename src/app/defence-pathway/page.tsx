import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { defencePathway } from "@/lib/pageCopy";

export const metadata: Metadata = defencePathway.meta;

export default function Page() {
  return <CopyPage page={defencePathway} />;
}
