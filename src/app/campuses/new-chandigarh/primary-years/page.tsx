import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { chdPrimaryYears } from "@/lib/pageCopy";

export const metadata: Metadata = chdPrimaryYears.meta;

export default function Page() {
  return <CopyPage page={chdPrimaryYears} />;
}
