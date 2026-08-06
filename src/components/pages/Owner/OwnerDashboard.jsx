import DashboardHeader from "@/components/Features/Owner/Dashboard/DashboardHeader";
import DashboardStats from "@/components/Features/Owner/Dashboard/DashboardStats";
import RevenueChart from "@/components/Features/Owner/Dashboard/RevenueChart";
import FleetStatusChart from "@/components/Features/Owner/Dashboard/FleetStatusChart";
import IncomingRequests from "@/components/Features/Owner/Dashboard/IncomingRequests";
import FleetHealthAlerts from "@/components/Features/Owner/Dashboard/FleetHealthAlerts";
export default function OwnerDashboard() {
  return (
    <div className="min-h-screen bg-slate-100">

      <DashboardHeader />

      <div className="space-y-8 p-8">

        <DashboardStats />

        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-8">
            <RevenueChart />
          </div>

          <div className="col-span-4">
            <FleetStatusChart />
          </div>

        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-7">
            <IncomingRequests />
          </div>
          <div className="col-span-5">
            <FleetHealthAlerts />
          </div>
        </div>
      </div>
    </div>
  );
}