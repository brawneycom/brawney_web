import { FC } from "react";
import { css, cx } from "styled-system/css";

export type ViewMode = "graph" | "table";

type Props = {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
};

const styles = {
  wrapper: css({
    display: "flex",
    alignItems: "center",
    gap: "1",
    backgroundColor: "#1C1C27",
    borderRadius: "8px",
    padding: "2px",
    border: "1px solid #2A2A3D",
  }),
  btn: css({
    display: "flex",
    alignItems: "center",
    gap: "1",
    paddingX: "3",
    paddingY: "1.5",
    borderRadius: "6px",
    fontSize: "xs",
    fontWeight: "500",
    color: "#94A3B8",
    cursor: "pointer",
    transition: "all 0.15s",
    border: "none",
    background: "transparent",
    _hover: { color: "#E2E8F0" },
  }),
  active: css({
    backgroundColor: "#2A2A3D",
    color: "#E2E8F0",
  }),
};

const ChartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 10 L4 6 L7 8 L10 3 L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const TableIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="1" y1="5" x2="13" y2="5" stroke="currentColor" strokeWidth="1.5" />
    <line x1="1" y1="9" x2="13" y2="9" stroke="currentColor" strokeWidth="1.5" />
    <line x1="5" y1="5" x2="5" y2="13" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const GraphTableToggle: FC<Props> = ({ mode, onChange }) => (
  <div className={styles.wrapper}>
    <button
      className={cx(styles.btn, mode === "graph" && styles.active)}
      onClick={() => onChange("graph")}
    >
      <ChartIcon />
      Graph
    </button>
    <button
      className={cx(styles.btn, mode === "table" && styles.active)}
      onClick={() => onChange("table")}
    >
      <TableIcon />
      Table
    </button>
  </div>
);
