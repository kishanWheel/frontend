import { bookingData } from "./bookingData";
import BookingRow from "./BookingRow";

export default function BookingTable() {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

      {/* Header */}

      <div className="border-b px-6 py-5">

        <h2 className="text-xl font-bold text-slate-900">
          Booking Requests
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Review and manage all customer booking requests.
        </p>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Customer
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Route
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Vehicle
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Driver
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Amount
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {bookingData.map((booking) => (
              <BookingRow
                key={booking.id}
                booking={booking}
              />
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}