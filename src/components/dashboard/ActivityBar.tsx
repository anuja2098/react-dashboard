"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

// import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartData = [
  { date: "2024-04-01", weekly: 222, monthly: 150 },
  { date: "2024-04-02", weekly: 97, monthly: 180 },
  { date: "2024-04-03", weekly: 167, monthly: 120 },
  { date: "2024-04-04", weekly: 242, monthly: 260 },
  { date: "2024-04-05", weekly: 373, monthly: 290 },
  { date: "2024-04-06", weekly: 301, monthly: 340 },
  { date: "2024-04-07", weekly: 245, monthly: 180 },
  { date: "2024-04-08", weekly: 409, monthly: 320 },
  { date: "2024-04-09", weekly: 59, monthly: 110 },
  { date: "2024-04-10", weekly: 261, monthly: 190 },
  { date: "2024-04-11", weekly: 327, monthly: 350 },
  { date: "2024-04-12", weekly: 292, monthly: 210 },
  { date: "2024-04-13", weekly: 342, monthly: 380 },
  { date: "2024-04-14", weekly: 137, monthly: 220 },
  { date: "2024-04-15", weekly: 120, monthly: 170 },
  { date: "2024-04-16", weekly: 138, monthly: 190 },
  { date: "2024-04-17", weekly: 446, monthly: 360 },
  { date: "2024-04-18", weekly: 364, monthly: 410 },
  { date: "2024-04-19", weekly: 243, monthly: 180 },
  { date: "2024-04-20", weekly: 89, monthly: 150 },
  { date: "2024-05-21", weekly: 82, monthly: 140 },
  { date: "2024-05-22", weekly: 81, monthly: 120 },
  { date: "2024-05-23", weekly: 252, monthly: 290 },
  { date: "2024-05-24", weekly: 294, monthly: 220 },
  { date: "2024-05-25", weekly: 201, monthly: 250 },
  { date: "2024-05-26", weekly: 213, monthly: 170 },
  { date: "2024-05-27", weekly: 420, monthly: 460 },
  { date: "2024-05-28", weekly: 233, monthly: 190 },
  { date: "2024-05-29", weekly: 78, monthly: 130 },
  { date: "2024-05-30", weekly: 340, monthly: 280 },
  { date: "2024-05-31", weekly: 178, monthly: 230 },
  { date: "2024-06-01", weekly: 178, monthly: 200 },
];

const chartConfig = {
  views: {
    label: "Page Views",
  },
  weekly: {
    label: "Weekly",
    color: "hsl(var(--chart-1))",
  },
  monthly: {
    label: "Monthly",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function ActivityBar() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("weekly");

  return (
    <div className="py-7">
      <div className="flex justify-between p-2">
        <div>Activity</div>

        <Select
          value={activeChart}
          onValueChange={(val) =>
            setActiveChart(val as keyof typeof chartConfig)
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="p4">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[180px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
