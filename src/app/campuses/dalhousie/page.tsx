import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { dalhousieCampus } from "@/lib/pageCopy";

export const metadata: Metadata = dalhousieCampus.meta;

export default function Page() {
  return <CopyPage page={dalhousieCampus} />;
}
