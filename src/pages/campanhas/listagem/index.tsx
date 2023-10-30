import HeadPage from "@/components/layout/HeadPage";
import { ListTodo } from "lucide-react";

export default function Listagem() {
  return (
    <>
      <div className="ml-72 mt-12 pt-12 flex items-center gap-2">
        <ListTodo className="text-sky-600 bg-sky-100 rounded p-1.5 w-10 h-10" />
        <HeadPage>Listagem</HeadPage>
      </div>
    </>
  );
}
