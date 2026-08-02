import FleetHeader from "@/components/Features/Owner/FleetHeader";
import FleetStats from "@/components/Features/Owner/FleetStats";
import FleetToolbar from "@/components/Features/Owner/FleetToolbar";
import FleetGrid from "@/components/Features/Owner/FleetGrid";
import FleetTable from "@/components/Features/Owner/FleetTable";

export default function Fleet() {
  return (
    <div className="space-y-6 p-6">
      <FleetHeader />

      <FleetStats />

      <FleetToolbar />

      <FleetGrid />

      <FleetTable />
    </div>
  );
}