import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { chdMiddleSchool } from "@/lib/pageCopy";

export const metadata: Metadata = chdMiddleSchool.meta;

export default function Page() {
  return <CopyPage page={chdMiddleSchool} />;
}
