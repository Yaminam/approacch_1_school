import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { alumni } from "@/lib/pageCopy";

export const metadata: Metadata = alumni.meta;

export default function Page() {
  return <CopyPage page={alumni} />;
}
