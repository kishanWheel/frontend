import StatsCard from "./StatsCard";
import { dashboardStats } from "./data";

export default function DashboardStats() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {dashboardStats.map((item) => (
          <StatsCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}