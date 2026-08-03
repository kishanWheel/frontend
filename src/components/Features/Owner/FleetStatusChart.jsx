import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import { fleetStatusData} from "./chartData";

const chartConfig = {
  Active: {
    label: "Active",
    color: "#22C55E",
  },

  Idle: {
    label: "Idle",
    color: "#2563EB",
  },

  Maintenance: {
    label: "Maintenance",
    color: "#F59E0B",
  },
};

export default function FleetStatusChart() {
  return (
    <Card className="rounded-3xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          Fleet Status
        </CardTitle>
        <p className="text-sm text-slate-500">
          Current vehicle availability
        </p>
      </CardHeader>
    <CardContent>
 <div className="flex items-center justify-center">
     <ChartContainer
    config={chartConfig}
    className="h-[240px] w-[300px] "
  >
 <PieChart>
      <Pie
        data={fleetStatusData}
        dataKey="value"
        nameKey="name"
        innerRadius={60}
        outerRadius={90}
      >
        {fleetStatusData.map((entry) => (
          <Cell
            key={entry.name}
            fill={entry.fill}
          />
        ))}
      </Pie>
      <ChartTooltip
        content={<ChartTooltipContent />}
      />
    </PieChart>
  </ChartContainer>
 </div>

  {/* Legend */}

  <div className=" space-y-4">

    {fleetStatusData.map((item) => (

      <div
        key={item.name}
        className="flex items-center justify-between"
      >

        <div className="flex items-center gap-3">

          <div
            className="h-3 w-3 rounded-full"
            style={{
              backgroundColor: item.fill,
            }}
          />

          <span className="font-medium">
            {item.name}
          </span>

        </div>

        <span className="text-slate-500">
          {item.value} Vehicles
        </span>

      </div>

    ))}

  </div>

</CardContent>

    </Card>
  );
}