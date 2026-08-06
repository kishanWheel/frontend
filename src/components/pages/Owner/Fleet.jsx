import FleetHeader from "@/components/Features/Owner/Fleet/FleetHeader";
import FleetStats from "@/components/Features/Owner/Fleet/FleetStats";
import FleetToolbar from "@/components/Features/Owner/Fleet/FleetToolbar";
import FleetGrid from "@/components/Features/Owner/Fleet/FleetGrid";
import FleetTable from "@/components/Features/Owner/Fleet/FleetTable";

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