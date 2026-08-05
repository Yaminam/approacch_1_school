import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { academics } from "@/lib/pageCopy";

export const metadata: Metadata = academics.meta;

export default function Page() {
  return <CopyPage page={academics} />;
}
