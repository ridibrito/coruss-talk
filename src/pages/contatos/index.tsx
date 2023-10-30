import HeadPage from "@/components/layout/HeadPage";
import { Users } from "lucide-react";

export default function Contatos() {
  return (
    <>
      <div className="max-w-7xl ml-72 mx-auto mt-12 pt-12 flex items-center gap-2">
        <Users className="text-sky-600 bg-sky-100 rounded p-1.5 w-10 h-10" />
        <HeadPage>Contatos</HeadPage>
      </div>
    </>
  );
}
