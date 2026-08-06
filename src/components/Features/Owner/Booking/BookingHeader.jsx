import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { bookingData } from "./bookingData";

export default function BookingHeader() {
  const totalBookings = bookingData.length;

  const pendingBookings = bookingData.filter(
    (booking) => booking.status === "Pending"
  ).length;

  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          Booking Management
        </h1>

        <p className="mt-2 text-slate-500">
          View, manage and respond to customer booking requests.
        </p>

        <div className="mt-4 flex flex-wrap gap-6 text-sm">

          <div>
            <span className="font-semibold text-slate-900">
              {totalBookings}
            </span>{" "}
            <span className="text-slate-500">
              Total Bookings
            </span>
          </div>

          <div>
            <span className="font-semibold text-yellow-600">
              {pendingBookings}
            </span>{" "}
            <span className="text-slate-500">
              Pending Approval
            </span>
          </div>

        </div>

      </div>

      {/* Right */}

      <Button className="h-12 rounded-xl bg-blue-600 px-6 hover:bg-blue-700">

        <Plus className="mr-2 h-5 w-5" />

        New Booking

      </Button>

    </div>
  );
}