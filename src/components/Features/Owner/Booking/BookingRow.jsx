import { Eye, Check, X } from "lucide-react";

export default function BookingRow({ booking }) {
  const statusStyle = {
    Pending: "bg-yellow-100 text-yellow-700",
    Completed: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <tr className="border-b transition hover:bg-slate-50">

      {/* Customer */}

      <td className="px-6 py-5">
        <div>
          <h3 className="font-semibold text-slate-900">
            {booking.customer}
          </h3>

          <p className="text-sm text-slate-500">
            {booking.date}
          </p>
        </div>
      </td>

      {/* Route */}

      <td className="px-6">
        <div className="text-sm">
          <p className="font-medium text-slate-800">
            {booking.pickup}
          </p>

          <p className="text-slate-400">
            ↓
          </p>

          <p className="font-medium text-slate-800">
            {booking.destination}
          </p>
        </div>
      </td>

      {/* Vehicle */}

      <td className="px-6">
        <span className="font-medium">
          {booking.vehicle}
        </span>
      </td>

      {/* Driver */}

      <td className="px-6">
        {booking.driver}
      </td>

      {/* Amount */}

      <td className="px-6 font-semibold text-slate-900">
        {booking.amount}
      </td>

      {/* Status */}

      <td className="px-6">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[booking.status]}`}
        >
          {booking.status}
        </span>
      </td>

      {/* Actions */}

      <td className="px-6">

        <div className="flex gap-2">

          {/* View */}

          <button className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100">
            <Eye size={18} />
          </button>

          {/* Accept */}

          {booking.status === "Pending" && (
            <button className="rounded-lg p-2 text-green-600 transition hover:bg-green-100">
              <Check size={18} />
            </button>
          )}

          {/* Decline */}

          {booking.status === "Pending" && (
            <button className="rounded-lg p-2 text-red-600 transition hover:bg-red-100">
              <X size={18} />
            </button>
          )}

        </div>

      </td>

    </tr>
  );
}