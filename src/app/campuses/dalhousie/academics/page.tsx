import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { dalAcademics } from "@/lib/pageCopy";

export const metadata: Metadata = dalAcademics.meta;

export default function Page() {
  return <CopyPage page={dalAcademics} />;
}
