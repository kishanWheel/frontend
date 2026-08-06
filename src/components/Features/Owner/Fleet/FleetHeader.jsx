import { Button } from "@/components/ui/button";
import { Plus, Download } from "lucide-react";

export default function FleetHeader() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Fleet Management
        </h1>

        <p className="mt-2 text-slate-500">
          Manage all your vehicles from one place.
        </p>
      </div>

      {/* Right */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          className="rounded-xl px-5"
        >
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>

        <Button
          className="rounded-xl bg-blue-600 px-5 hover:bg-blue-700"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Vehicle
        </Button>
      </div>
    </div>
  );
}