import CardVencimento from "@/components/dasboard/CardVencimento";
import HeadPage from "@/components/layout/HeadPage";
import { PieChart } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="ml-72 mt-12 pt-12 flex items-center gap-2 justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <PieChart className="text-sky-600 bg-sky-100 rounded p-1.5 w-10 h-10" />
          <HeadPage>Dashboard</HeadPage>
        </div>
        <CardVencimento />
      </div>
    </>
  );
}
