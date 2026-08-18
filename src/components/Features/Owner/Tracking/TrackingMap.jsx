import { vehicleData } from "./trackingData";
import VehicleMarker from "./VehicleMarker";
import TrackingLegend from "./TrackingLegend";

export default function TrackingMap() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-[#e8eef5] sm:h-[380px] lg:h-[430px]">

      {/* Map Grid */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d3dde8 1px, transparent 1px),
            linear-gradient(to bottom, #d3dde8 1px, transparent 1px)
          `,
          backgroundSize: "46px 46px",
        }}
      />

      {/* Map overlay */}

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-200/30" />

      {/* Live Fleet Map */}

      <div className="absolute left-3 top-3 z-30 rounded-2xl bg-white px-4 py-2 shadow-md sm:left-4 sm:top-4">

        <p className="text-xs font-bold text-slate-900 sm:text-sm">
          Live Fleet Map
        </p>

        <p className="text-[10px] text-slate-500 sm:text-xs">
          3 vehicles tracked
        </p>

      </div>

      {/* Legend */}

      <TrackingLegend />

      {/* Route lines */}

      <div
        className="absolute border-t-2 border-dashed border-blue-500"
        style={{
          left: "34%",
          top: "70%",
          width: "38%",
          transform: "rotate(-20deg)",
          transformOrigin: "left center",
        }}
      />

      <div
        className="absolute border-t-2 border-dashed border-green-500"
        style={{
          left: "37%",
          top: "68%",
          width: "24%",
          transform: "rotate(-28deg)",
          transformOrigin: "left center",
        }}
      />

      {/* Vehicle markers */}

      {vehicleData.map((vehicle) => (
        <VehicleMarker
          key={vehicle.id}
          vehicle={vehicle}
        />
      ))}

    </div>
  );
}