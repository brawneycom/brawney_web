import { FC } from "react";
import { css, cx } from "styled-system/css";

export type TimeRange = "1W" | "1M" | "3M" | "1Y";
const RANGES: TimeRange[] = ["1W", "1M", "3M", "1Y"];

type Props = {
  value: TimeRange;
  onChange: (r: TimeRange) => void;
};

const styles = {
  wrapper: css({
    display: "flex",
    gap: "1",
    backgroundColor: "#1C1C27",
    borderRadius: "8px",
    padding: "2px",
    border: "1px solid #2A2A3D",
  }),
  btn: css({
    paddingX: "3",
    paddingY: "1",
    borderRadius: "6px",
    fontSize: "xs",
    fontWeight: "500",
    color: "#64748B",
    cursor: "pointer",
    border: "none",
    background: "transparent",
    transition: "all 0.15s",
    _hover: { color: "#E2E8F0" },
  }),
  active: css({
    backgroundColor: "#2A2A3D",
    color: "#E2E8F0",
  }),
};

export const TimeRangeTabs: FC<Props> = ({ value, onChange }) => (
  <div className={styles.wrapper}>
    {RANGES.map((r) => (
      <button
        key={r}
        className={cx(styles.btn, value === r && styles.active)}
        onClick={() => onChange(r)}
      >
        {r}
      </button>
    ))}
  </div>
);
