import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { apply } from "@/lib/pageCopy";

export const metadata: Metadata = apply.meta;

export default function Page() {
  return <CopyPage page={apply} />;
}
