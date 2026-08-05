import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { policiesDisclosures } from "@/lib/pageCopy";

export const metadata: Metadata = policiesDisclosures.meta;

export default function Page() {
  return <CopyPage page={policiesDisclosures} />;
}
