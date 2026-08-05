import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { pastoralCare } from "@/lib/pageCopy";

export const metadata: Metadata = pastoralCare.meta;

export default function Page() {
  return <CopyPage page={pastoralCare} />;
}
