import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { dalHouseCulture } from "@/lib/pageCopy";

export const metadata: Metadata = dalHouseCulture.meta;

export default function Page() {
  return <CopyPage page={dalHouseCulture} />;
}
