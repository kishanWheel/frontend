import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

import { revenueData } from "./chartData";

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#2563EB",
  },
};

export default function RevenueChart() {
  return (
    <Card className="rounded-3xl shadow-sm">

      <CardHeader>

        <CardTitle className="text-xl">
          Weekly Revenue
        </CardTitle>
        <p className="text-sm text-slate-500">
          Revenue generated over the last 7 days
        </p>
      </CardHeader>

      <CardContent>

        <ChartContainer
          config={chartConfig}
          className="h-[330px] w-full"
        >
          <ResponsiveContainer>

            <BarChart data={revenueData}>

              <CartesianGrid vertical={false} 
                strokeDasharray="4 4"/>

              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
              />
              <YAxis
               tickFormatter={(value) => `₹${value / 1000}k`}
               tickLine={false}
               axisLine={false}
              />

              <ChartTooltip
                content={<ChartTooltipContent />}
              />

              <Bar
                dataKey="revenue"
                fill="var(--color-revenue)"
                radius={[8, 8, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>
        </ChartContainer>

      </CardContent>

    </Card>
  );
}