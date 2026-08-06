import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";

export default function AlertCard({ alert }) {
  return (
    <Card className="rounded-2xl p-5 shadow-sm">

      <div className="flex justify-between">

        <div className="flex gap-3">

          <TriangleAlert
            className="text-orange-500"
            size={22}
          />

          <div>

            <h3 className="font-semibold">
              {alert.vehicle}
            </h3>

            <p className="text-sm text-slate-500">
              {alert.issue}
            </p>

          </div>

        </div>

        <Button
          variant="outline"
          size="sm"
        >
          Dismiss
        </Button>

      </div>

    </Card>
  );
}