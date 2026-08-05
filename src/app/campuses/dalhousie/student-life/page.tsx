import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { dalStudentLife } from "@/lib/pageCopy";

export const metadata: Metadata = dalStudentLife.meta;

export default function Page() {
  return <CopyPage page={dalStudentLife} />;
}
