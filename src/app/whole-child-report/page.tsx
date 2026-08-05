import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { wholeChildReport } from "@/lib/pageCopy";

export const metadata: Metadata = wholeChildReport.meta;

export default function Page() {
  return <CopyPage page={wholeChildReport} />;
}
