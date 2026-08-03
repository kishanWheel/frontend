import FleetCard from "./FleetCard";
import { fleetVehicles } from "./fleetData";

export default function FleetGrid() {
  return (
    <section>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-900">
          Fleet Overview
        </h2>

        <p className="text-slate-500">
          Monitor all your registered vehicles.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {fleetVehicles.map((vehicle) => (
          <FleetCard
            key={vehicle.id}
            vehicle={vehicle}
          />
        ))}
      </div>
    </section>
  );
}