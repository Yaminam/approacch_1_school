import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { theDay } from "@/lib/pageCopy";

export const metadata: Metadata = theDay.meta;

export default function Page() {
  return <CopyPage page={theDay} />;
}
