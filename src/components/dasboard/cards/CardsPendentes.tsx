import { Users } from "lucide-react";

export default function CardsPendentes() {
  return (
    <>
      <div className="p-4 bg-white shadow-lg h-32 rounded-2xl dark:bg-gray-800">
        <div className="flex items-center">
          <span className="relative p-2 bg-red-200 rounded-xl">
            <Users className="text-red-500" />
          </span>
          <p className="ml-2 text-black text-md dark:text-white">
            Atendimentos <br />
            Pendentes
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="my-4 text-4xl font-bold text-left text-gray-700 dark:text-gray-100">
            5
          </p>
        </div>
      </div>
    </>
  );
}
