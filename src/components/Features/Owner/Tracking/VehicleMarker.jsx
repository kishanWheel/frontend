import { Truck } from "lucide-react";

export default function VehicleMarker({ vehicle }) {
  const markerColor =
    vehicle.status === "Active"
      ? "bg-blue-600"
      : "bg-orange-500";

  const textColor =
    vehicle.status === "Active"
      ? "text-blue-600"
      : "text-orange-500";

  return (
    <div
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{
        left: vehicle.position.left,
        top: vehicle.position.top,
      }}
    >
      {/* Marker */}

      <div className="relative flex flex-col items-center">

        {/* Glow */}

        <div
          className={`absolute h-12 w-12 rounded-full opacity-20 blur-sm ${markerColor}`}
        />

        {/* Vehicle */}

        <div
          className={`relative flex h-10 w-10 items-center justify-center rounded-full shadow-md ${markerColor}`}
        >
          <Truck
            size={19}
            className="text-white"
          />
        </div>

        {/* Vehicle number */}

        <span
          className={`mt-1 whitespace-nowrap text-xs font-semibold ${textColor}`}
        >
          {vehicle.vehicle}
        </span>

      </div>
    </div>
  );
}