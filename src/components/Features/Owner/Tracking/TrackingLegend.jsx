export default function TrackingLegend() {
  return (
    <div className="absolute right-3 top-3 z-30 rounded-2xl bg-white px-4 py-3 shadow-md">

      <div className="space-y-2 text-xs">

        {/* Active */}

        <div className="flex items-center gap-2">

          <span className="h-2 w-2 rounded-full bg-blue-600" />

          <span className="text-slate-600">
            Active
          </span>

        </div>

        {/* Active 2 */}

        <div className="flex items-center gap-2">

          <span className="h-2 w-2 rounded-full bg-green-600" />

          <span className="text-slate-600">
            Active
          </span>

        </div>

        {/* Idle */}

        <div className="flex items-center gap-2">

          <span className="h-2 w-2 rounded-full bg-orange-500" />

          <span className="text-slate-600">
            Idle
          </span>

        </div>

      </div>

    </div>
  );
}