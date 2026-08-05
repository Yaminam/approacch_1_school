import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { about } from "@/lib/pageCopy";

export const metadata: Metadata = about.meta;

export default function Page() {
  return <CopyPage page={about} />;
}
