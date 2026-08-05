import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { confidenceCode } from "@/lib/pageCopy";

export const metadata: Metadata = confidenceCode.meta;

export default function Page() {
  return <CopyPage page={confidenceCode} />;
}
