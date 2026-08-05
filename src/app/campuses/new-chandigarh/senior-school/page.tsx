import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { chdSeniorSchool } from "@/lib/pageCopy";

export const metadata: Metadata = chdSeniorSchool.meta;

export default function Page() {
  return <CopyPage page={chdSeniorSchool} />;
}
