import { FC, useState } from "react";
import { css } from "styled-system/css";
import { Card, CardContent } from "@bennie-ui/card";
import { MetricChart, CompositionLineChart, useTable } from "@bennie-ui/visualization";
import { ButtonToggle } from "@bennie-ui/button-toggle";
import { metrics, weightHistory, recentEntries } from "../dashboard.data";
import { s } from "./overview.styles";

type ViewMode = "graph" | "table";
type WeightEntry = { date: string; weight: number; fat: number; lean: number };

const viewOptions = [
  { value: "graph", icon: "PresentationChartLineIcon" as const, label: "Graph" },
  { value: "table", icon: "TableCellsIcon" as const, label: "Table" },
];

const deltaStyle = (delta: number) => ({ color: delta <= 0 ? "#22c55e" : "#ef4444" });
const tdSmall = css({ fontSize: "xs", marginLeft: "4px" });

export const DashboardOverview: FC = () => {
  const [mode, setMode] = useState<ViewMode>("graph");

  const tableData = [...recentEntries].reverse() as WeightEntry[];
  const { Table, TableCell } = useTable<WeightEntry>(tableData);

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
            <Table data={tableData}>
              <TableCell name="date" header="Date">
                {(row) => new Date(row.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </TableCell>
              <TableCell name="weight" header="Weight (kg)">
                {(row, i, rows) => {
                  const prev = rows[i + 1];
                  const delta = prev ? row.weight - prev.weight : 0;
                  return (
                    <>
                      {row.weight}
                      {prev && (
                        <span className={tdSmall} style={deltaStyle(delta)}>
                          ({delta > 0 ? "+" : ""}{delta.toFixed(1)})
                        </span>
                      )}
                    </>
                  );
                }}
              </TableCell>
              <TableCell name="fat" header="Body fat (%)" />
              <TableCell name="lean" header="Lean (kg)" />
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
