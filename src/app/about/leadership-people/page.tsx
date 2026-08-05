import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { leadership } from "@/lib/pageCopy";

export const metadata: Metadata = leadership.meta;

export default function Page() {
  return <CopyPage page={leadership} />;
}
