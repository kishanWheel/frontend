import AlertRow from "./AlertRow";
import { alertData } from "./alertData";

export default function FleetHealthAlerts() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-bold">
          Fleet Health Alerts
        </h2>

        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          View All
        </button>

      </div>

      <div className="space-y-4">

        {alertData.map((alert) => (
          <AlertRow
            key={alert.id}
            alert={alert}
          />
        ))}

      </div>

    </section>
  );
}