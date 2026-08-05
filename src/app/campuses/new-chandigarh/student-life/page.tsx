import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { chdStudentLife } from "@/lib/pageCopy";

export const metadata: Metadata = chdStudentLife.meta;

export default function Page() {
  return <CopyPage page={chdStudentLife} />;
}
