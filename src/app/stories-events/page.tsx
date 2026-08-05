import type { Metadata } from "next";
import CopyPage from "@/components/CopyPage";
import { storiesEvents } from "@/lib/pageCopy";

export const metadata: Metadata = storiesEvents.meta;

export default function Page() {
  return <CopyPage page={storiesEvents} />;
}
