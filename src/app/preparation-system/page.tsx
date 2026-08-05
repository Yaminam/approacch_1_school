import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { preparationSystem } from "@/lib/pageCopy";

export const metadata: Metadata = preparationSystem.meta;

export default function Page() {
  return <CopyPage page={preparationSystem} />;
}
