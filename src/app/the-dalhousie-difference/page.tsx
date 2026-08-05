import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { theDifference } from "@/lib/pageCopy";

export const metadata: Metadata = theDifference.meta;

export default function Page() {
  return <CopyPage page={theDifference} />;
}
