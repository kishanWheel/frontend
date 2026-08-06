import { Card, CardContent } from "@/components/ui/card";
import { fleetStats } from "./fleetData";

export default function FleetStats() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {fleetStats.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.id}
            className="rounded-3xl border-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {item.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
              >
                <Icon className="h-7 w-7" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}