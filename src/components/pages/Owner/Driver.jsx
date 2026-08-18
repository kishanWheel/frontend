import DashboardHeader from "@/components/Features/Owner/Dashboard/DashboardHeader";
import DriverGrid from "@/components/Features/Owner/Driver/DriverGrid";

export default function Driver() {
  return (
    <>
      {/* Header */}
      <DashboardHeader />
      <div className="space-y-6 p-6">
      {/* Driver Cards */}
      <DriverGrid />
      </div>
    </>
    
  );
}