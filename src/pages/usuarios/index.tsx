import HeadPage from "@/components/layout/HeadPage";
import { UserPlus } from "lucide-react";

export default function Usuarios() {
  return (
    <>
      <div className="ml-72 max-w-7xl mx-auto mt-12 pt-12 flex items-center gap-2">
        <UserPlus className="text-sky-600 bg-sky-100 rounded border border-sky-100 shadow p-1.5 w-10 h-10" />
        <HeadPage>Usuários</HeadPage>
      </div>
    </>
  );
}
