import { Progress } from "@/components/ui/progress";

export default function DriverProgress({ score }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-600">
          Performance Score
        </span>
        <span className="text-lg font-bold text-slate-900">
          {score}/100
        </span>
      </div>

      <Progress
        value={score}
        className="h-3 rounded-full"
      />
    </div>
  );
}