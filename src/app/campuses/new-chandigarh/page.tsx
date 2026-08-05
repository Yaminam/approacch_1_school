import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { newChandigarhCampus } from "@/lib/pageCopy";

export const metadata: Metadata = newChandigarhCampus.meta;

export default function Page() {
  return <CopyPage page={newChandigarhCampus} />;
}
