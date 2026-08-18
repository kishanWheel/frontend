import BookingHeader from "@/components/Features/Owner/Booking/BookingHeader";
import BookingStats from "@/components/Features/Owner/Booking/BookingStats";
import BookingToolbar from "@/components/Features/Owner/Booking/BookingToolbar";
import BookingTable from "@/components/Features/Owner/Booking/BookingTable";

export default function Bookings() {
  return (
    <div className="space-y-6 p-6">

      <BookingHeader />

      <BookingStats />

      <BookingToolbar />

      <BookingTable />

    </div>
  );
}