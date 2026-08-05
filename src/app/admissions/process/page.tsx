import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { admissionProcess } from "@/lib/pageCopy";

export const metadata: Metadata = admissionProcess.meta;

export default function Page() {
  return <CopyPage page={admissionProcess} />;
}
