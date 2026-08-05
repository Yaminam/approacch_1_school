import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { lifeCode } from "@/lib/pageCopy";

export const metadata: Metadata = lifeCode.meta;

export default function Page() {
  return <CopyPage page={lifeCode} />;
}
