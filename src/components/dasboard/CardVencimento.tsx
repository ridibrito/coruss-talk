import { Calendar } from "lucide-react";

export default function CardVencimento() {
  return (
    <>
      <div className="flex items-center gap-2 rounded border p-2">
        <div>
          <Calendar className="w-8 h-8" />
        </div>
        <div>
          <p>Data de vencimento</p>
          <p>02/11/2013</p>
        </div>
      </div>
    </>
  );
}
