import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function FleetCard({ vehicle }) {
  const badgeColor =
    vehicle.status === "Active"
      ? "bg-green-100 text-green-700"
      : vehicle.status === "Maintenance"
      ? "bg-orange-100 text-orange-700"
      : "bg-blue-100 text-blue-700";

  return (
    <Card className="overflow-hidden rounded-3xl border-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={vehicle.image}
        alt={vehicle.type}
        className="h-48 w-full object-cover"
      />

      <CardContent className="space-y-5 p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold">
              {vehicle.vehicleNo}
            </h3>

            <p className="text-sm text-slate-500">
              {vehicle.type}
            </p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}
          >
            {vehicle.status}
          </span>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">Driver</span>

            <span className="font-medium">
              {vehicle.driver}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Fuel</span>

            <span>{vehicle.fuel}%</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">
              Next Service
            </span>

            <span>{vehicle.service}</span>
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span>Vehicle Health</span>

            <span>{vehicle.health}%</span>
          </div>

          <Progress value={vehicle.health} />
        </div>

        <div className="flex justify-between border-t pt-4">
          <button className="rounded-xl p-2 transition hover:bg-slate-100">
            <Eye size={18} />
          </button>

          <button className="rounded-xl p-2 transition hover:bg-slate-100">
            <Pencil size={18} />
          </button>

          <button className="rounded-xl p-2 text-red-600 transition hover:bg-red-50">
            <Trash2 size={18} />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}