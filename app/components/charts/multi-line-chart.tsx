import { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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

export const CompositionLineChart: FC<Props> = ({ data }) => (
  <ResponsiveContainer width="100%" height={200}>
    <LineChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
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
      />
      <Legend
        wrapperStyle={{ fontSize: 12, color: "#94A3B8", paddingTop: 8 }}
      />
      <Line type="monotone" dataKey="lean" name="Lean" stroke="#3B82F6" strokeWidth={2} dot={false} activeDot={{ r: 3 }} />
      <Line type="monotone" dataKey="fat" name="Fat" stroke="#F59E0B" strokeWidth={2} dot={false} activeDot={{ r: 3 }} />
      <Line type="monotone" dataKey="weight" name="Weight" stroke="#8B5CF6" strokeWidth={2} dot={false} activeDot={{ r: 3 }} strokeDasharray="4 2" />
    </LineChart>
  </ResponsiveContainer>
);
