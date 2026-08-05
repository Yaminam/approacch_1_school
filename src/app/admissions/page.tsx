import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { admissions } from "@/lib/pageCopy";

export const metadata: Metadata = admissions.meta;

export default function Page() {
  return <CopyPage page={admissions} />;
}
