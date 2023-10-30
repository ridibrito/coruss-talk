import HeadPage from "@/components/layout/HeadPage";
import { Landmark } from "lucide-react";

export default function Financeiro() {
  return (
    <>
      <div className="ml-72 max-w-7xl mx-auto mt-12 pt-12 flex items-center gap-2">
        <Landmark className="text-sky-600 bg-sky-100 rounded p-1.5 w-10 h-10" />
        <HeadPage>Financeiro</HeadPage>
      </div>
    </>
  );
}
