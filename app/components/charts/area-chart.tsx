import { FC } from "react";
import {
  AreaChart as ReAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { WeightEntry } from "~/pages/dashboard/dashboard.data";

type Props = {
  data: WeightEntry[];
};

const formatDate = (d: string) => {
  const date = new Date(d);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

export const WeightAreaChart: FC<Props> = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%" minHeight={220} style={{ flex: 1 }}>
    <ReAreaChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
      <defs>
        <linearGradient id="weightGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" vertical={false} />
      <XAxis
        dataKey="date"
        tickFormatter={formatDate}
        tick={{ fill: "#64748B", fontSize: 11 }}
        axisLine={false}
        tickLine={false}
        interval="preserveStartEnd"
      />
      <YAxis
        tick={{ fill: "#64748B", fontSize: 11 }}
        axisLine={false}
        tickLine={false}
        domain={["auto", "auto"]}
        tickFormatter={(v) => `${v}`}
      />
      <Tooltip
        contentStyle={{
          backgroundColor: "#1C1C27",
          border: "1px solid #2A2A3D",
          borderRadius: 8,
          color: "#E2E8F0",
          fontSize: 12,
        }}
        labelFormatter={formatDate}
        formatter={(v: number) => [`${v} kg`, "Weight"]}
      />
      <Area
        type="monotone"
        dataKey="weight"
        stroke="#3B82F6"
        strokeWidth={2}
        fill="url(#weightGrad)"
        dot={false}
        activeDot={{ r: 4, fill: "#3B82F6" }}
      />
    </ReAreaChart>
  </ResponsiveContainer>
);
