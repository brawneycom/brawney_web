import { FC, useState } from "react";
import { css, cx } from "styled-system/css";

type Props = {
  currentWeight: number;
  onSave?: (weight: number) => void;
  onDiscard?: () => void;
};

const styles = {
  wrapper: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5",
    padding: "6",
    backgroundColor: "#131320",
    borderRadius: "16px",
    border: "1px solid #2A2A3D",
  }),
  title: css({
    fontSize: "sm",
    fontWeight: "600",
    color: "#94A3B8",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  }),
  dial: css({
    position: "relative",
    width: "160px",
    height: "160px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  dialValue: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: "1",
  }),
  dialNumber: css({
    fontSize: "3xl",
    fontWeight: "700",
    color: "#F1F5F9",
    lineHeight: "1",
  }),
  dialUnit: css({
    fontSize: "sm",
    color: "#64748B",
    marginTop: "1",
  }),
  adjustRow: css({
    display: "flex",
    gap: "2",
  }),
  adjustBtn: css({
    paddingX: "3",
    paddingY: "2",
    borderRadius: "8px",
    fontSize: "sm",
    fontWeight: "600",
    border: "1px solid #2A2A3D",
    backgroundColor: "#1C1C27",
    color: "#E2E8F0",
    cursor: "pointer",
    transition: "all 0.15s",
    _hover: { backgroundColor: "#2A2A3D", borderColor: "#3B82F6" },
  }),
  actions: css({
    display: "flex",
    gap: "3",
    width: "full",
  }),
  discardBtn: css({
    flex: "1",
    paddingY: "2.5",
    borderRadius: "8px",
    fontSize: "sm",
    fontWeight: "600",
    border: "1px solid #2A2A3D",
    backgroundColor: "transparent",
    color: "#64748B",
    cursor: "pointer",
    transition: "all 0.15s",
    _hover: { borderColor: "#94A3B8", color: "#E2E8F0" },
  }),
  saveBtn: css({
    flex: "1",
    paddingY: "2.5",
    borderRadius: "8px",
    fontSize: "sm",
    fontWeight: "600",
    border: "none",
    backgroundColor: "#3B82F6",
    color: "white",
    cursor: "pointer",
    transition: "all 0.15s",
    _hover: { backgroundColor: "#2563EB" },
  }),
};

const ADJUST_STEPS = [-1, -0.1, +0.1, +1] as const;

const DialSVG: FC<{ value: number; max: number; color: string }> = ({ value, max, color }) => {
  const r = 70;
  const cx_ = 80;
  const cy_ = 80;
  const circumference = 2 * Math.PI * r;
  const pct = Math.min(value / max, 1);
  const dashoffset = circumference * (1 - pct * 0.75);

  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      style={{ position: "absolute", top: 0, left: 0, transform: "rotate(-135deg)" }}
    >
      <circle cx={cx_} cy={cy_} r={r} fill="none" stroke="#1E1E2E" strokeWidth="10" strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`} strokeLinecap="round" />
      <circle
        cx={cx_}
        cy={cy_}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="10"
        strokeDasharray={`${circumference * 0.75 * pct} ${circumference}`}
        strokeDashoffset={0}
        strokeLinecap="round"
        style={{ transition: "stroke-dasharray 0.3s ease" }}
      />
    </svg>
  );
};

export const QuickCapture: FC<Props> = ({ currentWeight, onSave, onDiscard }) => {
  const [value, setValue] = useState(currentWeight);

  const adjust = (delta: number) => {
    setValue((prev) => Math.round((prev + delta) * 10) / 10);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Quick capture</span>

      <div className={styles.dial}>
        <DialSVG value={value} max={200} color="#3B82F6" />
        <div className={styles.dialValue}>
          <span className={styles.dialNumber}>{value.toFixed(1)}</span>
          <span className={styles.dialUnit}>kg</span>
        </div>
      </div>

      <div className={styles.adjustRow}>
        {ADJUST_STEPS.map((step) => (
          <button key={step} className={styles.adjustBtn} onClick={() => adjust(step)}>
            {step > 0 ? `+${step}` : step}
          </button>
        ))}
      </div>

      <div className={styles.actions}>
        <button className={styles.discardBtn} onClick={() => { setValue(currentWeight); onDiscard?.(); }}>
          Discard
        </button>
        <button className={styles.saveBtn} onClick={() => onSave?.(value)}>
          Save
        </button>
      </div>
    </div>
  );
};
