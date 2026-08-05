import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { competitiveEdge } from "@/lib/pageCopy";

export const metadata: Metadata = competitiveEdge.meta;

export default function Page() {
  return <CopyPage page={competitiveEdge} />;
}
