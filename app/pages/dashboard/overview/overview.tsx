import { FC, useState } from "react";
import { cx } from "styled-system/css";
import { GraphTableToggle, ViewMode } from "~/components/ui/graph-table-toggle";
import { Sparkline } from "~/components/charts/sparkline";
import { CompositionLineChart } from "~/components/charts/multi-line-chart";
import { QuickCapture } from "~/components/capture/quick-capture";
import { metrics, weightHistory, recentEntries } from "../dashboard.data";
import { s } from "./overview.styles";

const TrendArrow: FC<{ value: number; className: string }> = ({ value, className }) => (
  <span className={className}>
    {value > 0 ? "▲" : "▼"} {Math.abs(value)}%
  </span>
);

export const DashboardOverview: FC = () => {
  const [mode, setMode] = useState<ViewMode>("graph");

  return (
    <div className={s.page}>
      <div className={s.header}>
        <h1 className={s.pageTitle}>Dashboard</h1>
        <GraphTableToggle mode={mode} onChange={setMode} />
      </div>

      {/* Metric cards */}
      <div className={s.metricsRow}>
        {metrics.map((m) => (
          <div key={m.label} className={s.card}>
            <div className={s.cardHeader}>
              <span className={s.cardLabel}>{m.label}</span>
              <TrendArrow
                value={m.trend}
                className={m.trend < 0 ? s.trendDown : s.trendUp}
              />
            </div>
            <div className={s.cardValue}>
              <span className={s.valueNumber}>{m.value}</span>
              <span className={s.valueUnit}>{m.unit}</span>
            </div>
            <Sparkline data={m.sparkline} color="#3B82F6" width={100} height={32} />
          </div>
        ))}
      </div>

      {mode === "graph" ? (
        <>
          {/* Composition chart */}
          <div className={s.section}>
            <div className={s.sectionHeader}>
              <span className={s.sectionTitle}>Lean / Fat / Weight</span>
            </div>
            <CompositionLineChart data={weightHistory.slice(-14)} />
          </div>

          {/* Quick capture */}
          <QuickCapture
            currentWeight={79.4}
            onSave={(v) => console.log("saved", v)}
          />
        </>
      ) : (
        /* Table view */
        <div className={s.section}>
          <div className={s.sectionHeader}>
            <span className={s.sectionTitle}>Recent entries</span>
          </div>
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
                      {new Date(e.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
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
    </div>
  );
};
