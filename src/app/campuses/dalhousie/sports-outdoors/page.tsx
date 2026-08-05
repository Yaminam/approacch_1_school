import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { dalSports } from "@/lib/pageCopy";

export const metadata: Metadata = dalSports.meta;

export default function Page() {
  return <CopyPage page={dalSports} />;
}
