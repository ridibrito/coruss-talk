import CardVencimento from "@/components/dasboard/cards/CardVencimento";
import CardsPendentes from "@/components/dasboard/cards/CardsPendentes";
import ChartColumn from "@/components/dasboard/ChartColumn";
import HeadPage from "@/components/layout/HeadPage";
import { PieChart } from "lucide-react";
import dynamic from "next/dynamic";
import ListUsers from "@/components/dasboard/ListUsers";
import CardsAtdAcontecendo from "@/components/dasboard/cards/CardAtendimentoAcontecendo";
import CardsAtendimentoRealizado from "@/components/dasboard/cards/CardsAtendimentoRealizado";
import CardsLeads from "@/components/dasboard/cards/CardsLeads";
import CardTMAtendimento from "@/components/dasboard/cards/CardTMAtendimento";
import CardTMEspera from "@/components/dasboard/cards/CardTMEspera";

const DynamicChartColumn = dynamic(
  () => import("@/components/dasboard/ChartColumn"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function Dashboard() {
  return (
    <>
      <div className="p-2 ml-72 mt-12 pt-12 flex items-center gap-2 justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <PieChart className="text-sky-600 bg-sky-100 rounded border border-sky-100 shadow p-1.5 w-10 h-10" />
          <HeadPage>Dashboard</HeadPage>
        </div>
        <CardVencimento />
      </div>
      <main className="block ml-72  p-2 pr-3 items-center gap-2 justify-between max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
          <DynamicChartColumn />
        </div>
        <div className="mt-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg   p-4">
          <p>Tipo de filtro</p>
          <div className="flex items-center gap-3  mt-3">
            <div className="flex flex-col w-1/3">
              <span>Filtro por data</span>
              <input
                type="date"
                className="dark:bg-gray-800 p-3 bg-transparent border rounded-lg text-xs text-gray-800"
              />
            </div>
            <div className="flex flex-col w-1/3">
              <span>Data inicial</span>
              <input
                type="date"
                className="dark:bg-gray-800 p-3 bg-transparent border rounded text-xs text-gray-800"
              />{" "}
            </div>
            <div className="flex flex-col w-1/3">
              <span>Data final</span>
              <input
                type="date"
                className="dark:bg-gray-800 p-3 bg-transparent border rounded text-xs text-gray-800"
              />{" "}
            </div>
            <div className="flex flex-col mt-6">
              <button className="bg-sky-600 text-white px-4 py-2 rounded ">
                Filtrar
              </button>
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <div className="w-1/3">
            <CardsPendentes />
          </div>
          <div className="w-1/3">
            <CardsAtdAcontecendo />
          </div>
          <div className="w-1/3">
            <CardsAtendimentoRealizado />
          </div>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <div className="w-1/3">
            <CardsLeads />
          </div>
          <div className="w-1/3">
            <CardTMAtendimento />
          </div>
          <div className="w-1/3">
            <CardTMEspera />
          </div>
        </div>
        <div>
          <ListUsers />
        </div>
      </main>
    </>
  );
}
