import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { residentialAdvantage } from "@/lib/pageCopy";

export const metadata: Metadata = residentialAdvantage.meta;

export default function Page() {
  return <CopyPage page={residentialAdvantage} />;
}
