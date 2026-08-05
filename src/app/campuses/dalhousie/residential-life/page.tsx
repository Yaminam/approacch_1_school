import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { dalResidential } from "@/lib/pageCopy";

export const metadata: Metadata = dalResidential.meta;

export default function Page() {
  return <CopyPage page={dalResidential} />;
}
