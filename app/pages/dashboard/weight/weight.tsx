import { FC, useState } from "react";
import { cx } from "styled-system/css";
import { DialInput } from "@bennie-ui/inputs";
import { WeightAreaChart } from "~/components/charts/area-chart";
import { weightHistory, filterByRange } from "../dashboard.data";
import { Card, CardContent } from "@bennie-ui/card";
import { ButtonGroup } from "@bennie-ui/button-group";
import { ButtonToggle } from "@bennie-ui/button-toggle";
import { Page, PageActions, PageContent, PageFooter } from "@bennie-ui/page";
import { s } from "./weight.styles";

type ViewMode = "graph" | "table";
type TimeRange = "1W" | "1M" | "3M" | "1Y";

const timeRangeOptions = (["1W", "1M", "3M", "1Y"] as TimeRange[])
  .map((r) => ({ value: r, label: r }));

const categoryTabs = [
  { value: "weight", label: "Weight" },
  { value: "body-comp", label: "Body comp" },
  { value: "vo2max", label: "VO2max" },
];

const viewOptions = [
  { value: "graph", icon: "PresentationChartLineIcon" as const, label: "Graph" },
  { value: "table", icon: "TableCellsIcon" as const, label: "Table" },
];

export const WeightDetail: FC = () => {
  const [mode, setMode] = useState<ViewMode>("graph");
  const [range, setRange] = useState<TimeRange>("1M");
  const [activeTab, setActiveTab] = useState("weight");

  const filtered = filterByRange(weightHistory, range);
  const latest = weightHistory[weightHistory.length - 1];

  return (
    <Page
      title="Weight"
      subtitle={`${latest.weight} kg · last entry today`}
    >
      <PageActions>
        <div className={s.controls}>
          <ButtonToggle
            options={timeRangeOptions}
            value={range}
            onChange={(v) => setRange(v as TimeRange)} />
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
          <ButtonGroup
            options={categoryTabs}
            value={activeTab}
            onChange={setActiveTab}
          />
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
            <div className={s.chartCard}>
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
                  {[...filtered].reverse().map((e, i, arr) => {
                    const prev = arr[i + 1];
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
            </div>
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
