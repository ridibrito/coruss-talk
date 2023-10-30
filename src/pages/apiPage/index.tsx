import HeadPage from "@/components/layout/HeadPage";
import { PlugZap } from "lucide-react";

export default function Api() {
  return (
    <>
      <div className="ml-72 max-w-7xl mx-auto mt-12 pt-12 flex items-center gap-2">
        <PlugZap className="text-sky-600 bg-sky-100 rounded p-1.5 w-10 h-10" />
        <HeadPage>API</HeadPage>
      </div>
    </>
  );
}
