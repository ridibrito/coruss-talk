import { Calendar } from "lucide-react";

export default function CardVencimento() {
  return (
    <>
      <div className="p-4 flex items-center justify-center gap-2 h-16 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
        <span className="relative p-2 bg-yellow-200 rounded-xl">
          <Calendar className="text-yellow-600" />
        </span>

        <p className="ml-2 text-black text-md dark:text-white">Vencimento</p>

        <span className="my-4 text-sm font-bold text-left text-gray-700 dark:text-gray-100">
          14/12/2023
        </span>
      </div>
    </>
  );
}
