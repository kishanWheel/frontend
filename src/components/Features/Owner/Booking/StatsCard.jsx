import { Card, CardContent } from "@/components/ui/card";

export default function StatsCard({ stat }) {
  const Icon = stat.icon;

  return (
    <Card className="rounded-3xl border-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="flex items-center justify-between p-6">

        <div>
          <p className="text-sm font-medium text-slate-500">
            {stat.title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {stat.value}
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color}`}
        >
          <Icon className="h-7 w-7" />
        </div>

      </CardContent>
    </Card>
  );
}