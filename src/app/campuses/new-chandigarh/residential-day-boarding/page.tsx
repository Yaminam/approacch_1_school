import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { chdBoarding } from "@/lib/pageCopy";

export const metadata: Metadata = chdBoarding.meta;

export default function Page() {
  return <CopyPage page={chdBoarding} />;
}
