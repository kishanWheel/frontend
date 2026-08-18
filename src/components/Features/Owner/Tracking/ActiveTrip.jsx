import { Truck } from "lucide-react";

export default function ActiveTrip({ vehicle }) {
  const progressColor =
    vehicle.status === "Idle"
      ? "bg-orange-500"
      : "bg-blue-600";

  return (
    <div className="rounded-2xl bg-slate-50 p-4">

      <div className="flex items-center gap-4">

        {/* Truck Icon */}

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600">

          <Truck
            size={19}
            className="text-white"
          />

        </div>

        {/* Main Information */}

        <div className="min-w-0 flex-1">

          {/* Driver */}

          <div className="flex items-center gap-1">

            <span className="truncate text-lg font-semibold  text-slate-900">
              {vehicle.driver}
            </span>

            <span className="text-xs text-slate-400">
              •
            </span>

            <span className="truncate text-xs text-slate-500">
              {vehicle.vehicle}
            </span>

          </div>

          {/* Route */}

          <p className="mt-1 text-xs text-slate-500">
            {vehicle.route}
          </p>

          {/* Progress */}

          <div className="mt-3 flex items-center gap-2">

            <div className="h-1 flex-1 overflow-hidden rounded-full bg-slate-200">

              <div
                className={`h-full rounded-full ${progressColor}`}
                style={{
                  width: `${vehicle.progress}%`,
                }}
              />

            </div>

            <span className="text-[10px] text-slate-400">
              {vehicle.progress}%
            </span>

          </div>

        </div>

        {/* Time + Speed */}

        <div className="hidden shrink-0 text-right sm:block">

          <p className="text-sm font-bold text-blue-600">
            {vehicle.remainingTime}
          </p>

          <p className="mt-1 text-[10px] text-slate-400">
            {vehicle.speed} km/h
          </p>

        </div>

      </div>

    </div>
  );
}