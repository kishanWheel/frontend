import TrackingMap from "@/components/Features/Owner/Tracking/TrackingMap";
import ActiveTripList from "@/components/Features/Owner/Tracking/ActiveTripList";

export default function Tracking() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-7">

      {/* Page Heading */}

      <div className="mb-5">

        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          GPS Tracking
        </h1>

      </div>

      {/* Tracking Card */}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* Map */}

        <TrackingMap />

        {/* Active Trips */}

        <ActiveTripList />

      </div>

    </div>
  );
}