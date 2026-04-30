import { FC, useState } from "react";
import { cx } from "styled-system/css";
import { css } from "styled-system/css";
import { GraphTableToggle, ViewMode } from "~/components/ui/graph-table-toggle";
import { TimeRangeTabs, TimeRange } from "~/components/ui/time-range-tabs";
import { WeightAreaChart } from "~/components/charts/area-chart";
import { QuickCapture } from "~/components/capture/quick-capture";
import { weightHistory, filterByRange } from "../dashboard.data";
import { s } from "./weight.styles";

const categoryTabs = ["Weight", "Body comp", "VO2max"];

const desktopToggle = css({ display: { base: "none", lg: "flex" } });
const mobileCatTabs = css({ display: { base: "flex", lg: "none" }, gap: "2", overflowX: "auto", paddingBottom: "1" });

export const WeightDetail: FC = () => {
  const [mode, setMode] = useState<ViewMode>("graph");
  const [range, setRange] = useState<TimeRange>("1M");
  const [activeTab, setActiveTab] = useState("Weight");

  const filtered = filterByRange(weightHistory, range);
  const latest = weightHistory[weightHistory.length - 1];

  return (
    <div className={s.page}>
      {/* Header */}
      <div className={s.header}>
        <div className={s.titleRow}>
          <h1 className={s.pageTitle}>Weight</h1>
          <span className={s.subtitle}>
            {latest.weight} kg · last entry today
          </span>
        </div>
        <div className={s.controls}>
          <TimeRangeTabs value={range} onChange={setRange} />
          {/* Desktop-only toggle in header */}
          <div className={desktopToggle}>
            <GraphTableToggle mode={mode} onChange={setMode} />
          </div>
        </div>
      </div>

      {/* Mobile category tabs */}
      <div className={mobileCatTabs}>
        {categoryTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "6px 16px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 500,
              whiteSpace: "nowrap",
              border: activeTab === tab ? "1px solid rgba(59,130,246,0.4)" : "1px solid #2A2A3D",
              backgroundColor: activeTab === tab ? "rgba(59,130,246,0.1)" : "#1C1C27",
              color: activeTab === tab ? "#3B82F6" : "#64748B",
              cursor: "pointer",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main content */}
      {mode === "graph" ? (
        <>
          {/* Desktop: chart + quick capture side-by-side */}
          <div className={s.desktopGrid}>
            <div className={s.chartCard}>
              <div className={s.chartHeader}>
                <span className={s.chartTitle}>Weight over time</span>
              </div>
              <WeightAreaChart data={filtered} />
            </div>
            <QuickCapture
              currentWeight={latest.weight}
              onSave={(v) => console.log("saved", v)}
            />
          </div>

          {/* Mobile: chart only */}
          <div className={s.mobileStack}>
            <div className={s.chartCard}>
              <div className={s.chartHeader}>
                <span className={s.chartTitle}>Weight over time</span>
              </div>
              <WeightAreaChart data={filtered} />
            </div>
          </div>
        </>
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

      {/* Mobile-only toggle at bottom */}
      <div className={s.mobileToggleRow}>
        <GraphTableToggle mode={mode} onChange={setMode} />
      </div>
    </div>
  );
};
