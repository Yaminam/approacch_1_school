import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { chdAcademicJourney } from "@/lib/pageCopy";

export const metadata: Metadata = chdAcademicJourney.meta;

export default function Page() {
  return <CopyPage page={chdAcademicJourney} />;
}
