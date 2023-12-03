import HeadPage from "@/components/layout/HeadPage";
import { MessageCircle } from "lucide-react";

export default function Atendimentos() {
  return (
    <>
      <div className="max-w-7xl ml-72 mx-auto mt-12 pt-12 flex items-center gap-2">
        <MessageCircle className="text-sky-600 bg-sky-100 rounded border border-sky-100 shadow p-1.5 w-10 h-10" />
        <HeadPage>Atendimentos</HeadPage>
      </div>
    </>
  );
}
