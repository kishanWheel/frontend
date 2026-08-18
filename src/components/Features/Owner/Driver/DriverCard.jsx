import {
  Phone,
  FileText,
  BarChart3,
  Star,
  Check,
  AlertTriangle,
} from "lucide-react";

import DriverProgress from "./DriverProgress";

export default function DriverCard({ driver }) {
  const statusStyle = {
    Active: "bg-green-100 text-green-700",
    Idle: "bg-blue-100 text-blue-700",
    "Off-Duty": "bg-slate-100 text-slate-600",
  };

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">

      {/* Top Section */}

      <div className="flex justify-between">

        {/* Left */}

        <div className="flex gap-5">

          {/* Avatar */}

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 text-2xl font-bold text-white">
            {driver.initials}
          </div>

          {/* Info */}

          <div>

            <h2 className="text-xl font-bold text-slate-900">
              {driver.name}
            </h2>

            <div className="mt-1 flex items-center gap-3">

              <div className="flex items-center gap-1">

                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />

                <span className="font-semibold">
                  {driver.rating}
                </span>

              </div>

              <span className="text-slate-400">
                •
              </span>

              <span className="text-slate-500">
                {driver.trips} trips
              </span>

            </div>

            <p className="mt-2 text-slate-500">
              {driver.license}
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-col items-end gap-3">

          <span
            className={`rounded-full px-4 py-1 text-sm font-semibold ${statusStyle[driver.status]}`}
          >
            {driver.status}
          </span>

          {driver.verified ? (
            <span className="flex items-center gap-1 rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">

              <Check size={14} />

              Verified

            </span>
          ) : (
            <span className="flex items-center gap-1 rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-700">

              <AlertTriangle size={14} />

              Pending

            </span>
          )}

        </div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <DriverProgress score={driver.performance} />

      </div>

      {/* Divider */}

      <div className="my-6 border-t" />

      {/* Buttons */}

      <div className="grid grid-cols-3 gap-4">

        <button className="flex items-center justify-center gap-2 rounded-2xl bg-slate-100 py-4 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">

          <Phone size={18} />

          Call

        </button>

        <button className="flex items-center justify-center gap-2 rounded-2xl bg-slate-100 py-4 font-semibold text-slate-700 transition hover:bg-slate-900 hover:text-white">

          <FileText size={18} />

          Documents

        </button>

        <button className="flex items-center justify-center gap-2 rounded-2xl bg-slate-100 py-4 font-semibold text-slate-700 transition hover:bg-slate-900 hover:text-white">

          <BarChart3 size={18} />

          Analytics

        </button>

      </div>

    </div>
  );
}