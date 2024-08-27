// import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { status: "Other", percent: 30, fill: "var(--color-others)" },
  { status: "Completed", percent: 70, fill: "var(--color-completed)" },
];

const chartConfig = {
  percent: {
    label: "Goals Completed",
  },
  completed: {
    label: "Completed",
    color: "hsl(var(--chart-1))",
  },
  others: {
    label: "Others",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function PieCharts() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[140px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="percent"
          nameKey="status"
          innerRadius={40}
          // strokeWidth={200}
          startAngle={-270}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 10}
                      className="fill-white text-xl font-bold"
                    >
                      70%
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 12}
                      className="fill-gray-200 text-[10px]"
                    >
                      Goal
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 22}
                      className="fill-gray-200 text-[10px]"
                    >
                      Completed
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
