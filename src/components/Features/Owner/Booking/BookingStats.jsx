import { bookingStats } from "./bookingData";
import StatsCard from "./StatsCard";

export default function BookingStats() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {bookingStats.map((stat) => (
        <StatsCard
          key={stat.id}
          stat={stat}
        />
      ))}
    </section>
  );
}