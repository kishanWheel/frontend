import { fleetVehicles } from "./fleetData";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function FleetTable() {
  const badgeStyle = {
    Active: "bg-green-100 text-green-700",
    Maintenance: "bg-orange-100 text-orange-700",
    Idle: "bg-blue-100 text-blue-700",
  };

  return (
    <section className="rounded-3xl bg-white shadow-sm">
      {/* Header */}
      <div className="border-b p-6">
        <h2 className="text-2xl font-bold">
          Fleet List
        </h2>
        <p className="mt-1 text-slate-500">
          Complete overview of your registered vehicles
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr className="text-left">

              <th className="px-6 py-4 font-semibold">
                Vehicle
              </th>

              <th className="px-6 py-4 font-semibold">
                Driver
              </th>

              <th className="px-6 py-4 font-semibold">
                Status
              </th>

              <th className="px-6 py-4 font-semibold">
                Fuel
              </th>

              <th className="px-6 py-4 font-semibold">
                Health
              </th>

              <th className="px-6 py-4 font-semibold">
                Next Service
              </th>

              <th className="px-6 py-4 font-semibold">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {fleetVehicles.map((vehicle) => (

              <tr
                key={vehicle.id}
                className="border-b transition hover:bg-slate-50"
              >

                <td className="px-6 py-5">

                  <div>

                    <h3 className="font-semibold">
                      {vehicle.vehicleNo}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {vehicle.type}
                    </p>

                  </div>

                </td>

                <td className="px-6">

                  {vehicle.driver}

                </td>

                <td className="px-6">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeStyle[vehicle.status]}`}
                  >
                    {vehicle.status}
                  </span>

                </td>

                <td className="px-6">

                  {vehicle.fuel}%

                </td>

                <td className="px-6">

                  {vehicle.health}%

                </td>

                <td className="px-6">

                  {vehicle.service}

                </td>

                <td className="px-6">

                  <div className="flex gap-3">

                    <button className="rounded-lg p-2 hover:bg-slate-100">

                      <Eye size={18} />

                    </button>

                    <button className="rounded-lg p-2 hover:bg-slate-100">

                      <Pencil size={18} />

                    </button>

                    <button className="rounded-lg p-2 text-red-600 hover:bg-red-50">

                      <Trash2 size={18} />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}