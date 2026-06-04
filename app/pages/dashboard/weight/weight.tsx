import { FC, useState } from "react";
import { css } from "styled-system/css";
import { DialInput } from "@bennie-ui/inputs";
import { WeightAreaChart } from "~/components/charts/area-chart";
import { weightHistory, filterByRange } from "../dashboard.data";
import { Card, CardContent } from "@bennie-ui/card";
import { ButtonGroup } from "@bennie-ui/button-group";
import { ButtonToggle } from "@bennie-ui/button-toggle";
import { Page, PageActions, PageContent, PageFooter } from "@bennie-ui/page";
import { useTable } from "@bennie-ui/visualization";
import { s } from "./weight.styles";

type ViewMode = "graph" | "table";
type TimeRange = "1W" | "1M" | "3M" | "1Y";
type WeightEntry = { date: string; weight: number; fat: number; lean: number };

const timeRangeOptions = (["1W", "1M", "3M", "1Y"] as TimeRange[]).map((r) => ({ value: r, label: r }));

const categoryTabs = [
  { value: "weight", label: "Weight" },
  { value: "body-comp", label: "Body comp" },
  { value: "vo2max", label: "VO2max" },
];

const viewOptions = [
  { value: "graph", icon: "PresentationChartLineIcon" as const, label: "Graph" },
  { value: "table", icon: "TableCellsIcon" as const, label: "Table" },
];

const deltaStyle = (delta: number) => ({ color: delta <= 0 ? "#22c55e" : "#ef4444" });
const tdSmall = css({ fontSize: "xs", marginLeft: "4px" });

export const WeightDetail: FC = () => {
  const [mode, setMode] = useState<ViewMode>("graph");
  const [range, setRange] = useState<TimeRange>("1M");
  const [activeTab, setActiveTab] = useState("weight");

  const filtered = filterByRange(weightHistory, range);
  const latest = weightHistory[weightHistory.length - 1];
  const tableData = [...filtered].reverse() as WeightEntry[];

  const { Table, TableCell } = useTable<WeightEntry>(tableData);

  return (
    <Page title="Weight" subtitle={`${latest.weight} kg · last entry today`}>
      <PageActions>
        <div className={s.controls}>
          <ButtonToggle options={timeRangeOptions} value={range} onChange={(v) => setRange(v as TimeRange)} />
          <ButtonToggle
            className={s.toggleControls.desktop}
            value={mode}
            onChange={(v) => setMode(v as ViewMode)}
            options={viewOptions}
          />
        </div>
      </PageActions>

      <PageContent>
        <>
          <ButtonGroup options={categoryTabs} value={activeTab} onChange={setActiveTab} />
          {mode === "graph" ? (
            <div className={s.desktopGrid}>
              <Card title="Weight over time">
                <CardContent>
                  <WeightAreaChart data={filtered} />
                </CardContent>
              </Card>
              <div className={s.dialColumn}>
                <Card title="Quick Capture">
                  <CardContent>
                    <DialInput
                      value={latest.weight}
                      onChange={(v) => console.log("saved", v)}
                      max={200}
                      unit="kg"
                      label="KG"
                      color="blue.500"
                      showStepButtons={{ increments: { small: -0.1, big: 1 } }}
                      size={160}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <Card title="Recent entries">
              <CardContent>
                <Table>
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
        </>
      </PageContent>

      <PageFooter>
        <ButtonToggle
          className={s.toggleControls.mobile}
          value={mode}
          onChange={(v) => setMode(v as ViewMode)}
          options={viewOptions}
        />
      </PageFooter>
    </Page>
  );
};
