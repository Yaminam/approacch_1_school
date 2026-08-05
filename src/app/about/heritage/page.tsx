import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { heritage } from "@/lib/pageCopy";

export const metadata: Metadata = heritage.meta;

export default function Page() {
  return <CopyPage page={heritage} />;
}
