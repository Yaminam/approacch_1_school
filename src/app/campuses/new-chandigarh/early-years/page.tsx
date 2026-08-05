import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { chdEarlyYears } from "@/lib/pageCopy";

export const metadata: Metadata = chdEarlyYears.meta;

export default function Page() {
  return <CopyPage page={chdEarlyYears} />;
}
