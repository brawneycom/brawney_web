import { FC, useState } from "react";
import { cx } from "styled-system/css";
import { Card, CardContent } from "@bennie-ui/card";
import { MetricChart, CompositionLineChart } from "@bennie-ui/visualization";
import { ButtonToggle } from "@bennie-ui/button-toggle";
import { metrics, weightHistory, recentEntries } from "../dashboard.data";
import { s } from "./overview.styles";

type ViewMode = "graph" | "table";

const viewOptions = [
  { value: "graph", icon: "PresentationChartLineIcon" as const, label: "Graph" },
  { value: "table", icon: "TableCellsIcon" as const, label: "Table" },
];

export const DashboardOverview: FC = () => {
  const [mode, setMode] = useState<ViewMode>("graph");

  return (
    <div className={s.page}>
      <div className={s.header}>
        <h1 className={s.pageTitle}>Dashboard</h1>
        <ButtonToggle value={mode} onChange={(v) => setMode(v as ViewMode)} options={viewOptions} />
      </div>

      <div className={s.metricsRow}>
        {metrics.map((m) => (
          <MetricChart
            key={m.label}
            label={m.label}
            value={m.value}
            unit={m.unit}
            trend={m.trend}
            sparkline={m.sparkline}
          />
        ))}
      </div>

      {mode === "graph" ? (
        <CompositionLineChart
          data={weightHistory.slice(-14)}
          title="Lean / Fat / Weight"
          series={[
            { key: "lean", name: "Lean", color: "blue.500" },
            { key: "fat", name: "Fat", color: "amber.500" },
            { key: "weight", name: "Weight", color: "violet.500", dashed: true },
          ]}
        />
      ) : (
        <Card title="Recent entries">
          <CardContent>
            <table className={s.table}>
              <thead>
                <tr>
                  <th className={s.th}>Date</th>
                  <th className={s.th}>Weight (kg)</th>
                  <th className={s.th}>Body fat (%)</th>
                  <th className={s.th}>Lean (kg)</th>
                </tr>
              </thead>
              <tbody>
                {recentEntries.map((e) => {
                  const prev = weightHistory[weightHistory.indexOf(e) + 1];
                  const delta = prev ? e.weight - prev.weight : 0;
                  return (
                    <tr key={e.date}>
                      <td className={s.td}>
                        {new Date(e.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </td>
                      <td className={cx(s.td, s.tdValue)}>
                        {e.weight}{" "}
                        {prev && (
                          <span className={delta <= 0 ? s.tdNegative : s.tdPositive}>
                            ({delta > 0 ? "+" : ""}{delta.toFixed(1)})
                          </span>
                        )}
                      </td>
                      <td className={s.td}>{e.fat}</td>
                      <td className={s.td}>{e.lean}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
