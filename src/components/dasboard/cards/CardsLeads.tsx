import { UserPlus } from "lucide-react";

export default function CardsLeads() {
  return (
    <>
      <div className="p-4 bg-white shadow-lg h-32 rounded-2xl dark:bg-gray-800">
        <div className="flex items-center">
          <span className="relative p-2 bg-green-200 rounded-xl">
            <UserPlus className="text-green-500" />
          </span>
          <p className="ml-2 text-black text-md dark:text-white">Leads</p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="my-4 text-4xl font-bold text-left text-gray-700 dark:text-gray-100">
            0
          </p>
        </div>
      </div>
    </>
  );
}
