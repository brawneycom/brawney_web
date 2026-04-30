import { FC, useState } from "react";
import { useNavigate } from "@remix-run/react";
import { css } from "styled-system/css";
import { MobileTopbar } from "~/pages/dashboard/layout/mobile-topbar";
import { MobileNav } from "~/pages/dashboard/layout/mobile-nav";

// ─── types ──────────────────────────────────────────────────────────────────

type Category = {
  key: string;
  label: string;
  unit: string;
  color: string;
  initial: number;
  max: number;
  centerLabel: string;
};

const CATEGORIES: Category[] = [
  { key: "weight",  label: "Weight",    unit: "KG",        color: "#3B82F6", initial: 79.4, max: 200, centerLabel: "KG" },
  { key: "bodyfat", label: "Body comp", unit: "%",         color: "#F59E0B", initial: 17.1, max: 50,  centerLabel: "FAT" },
  { key: "vo2max",  label: "VO₂max",   unit: "ML/KG/MIN", color: "#EF4444", initial: 48.2, max: 80,  centerLabel: "VO2" },
];

const STEPS = [-1, -0.1, +0.1, +1] as const;

// ─── radial dial ─────────────────────────────────────────────────────────────

const DIAL_R = 110;
const DIAL_CX = 160;
const DIAL_CY = 160;
const DIAL_SIZE = 320;
const STROKE_W = 14;
const START_DEG = 135;   // 7:30 o'clock
const SWEEP_DEG = 270;

const toRad = (deg: number) => (deg * Math.PI) / 180;

const polarToXY = (cx: number, cy: number, r: number, angleDeg: number) => {
  const rad = toRad(angleDeg - 90); // -90 so 0° = 12 o'clock
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
};

const arcPath = (
  cx: number, cy: number, r: number, startDeg: number, endDeg: number
) => {
  const s = polarToXY(cx, cy, r, startDeg);
  const e = polarToXY(cx, cy, r, endDeg);
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} 1 ${e.x} ${e.y}`;
};

const TickMarks: FC = () => {
  const count = 72;
  const outerR = DIAL_R + STROKE_W / 2 + 10;
  return (
    <g>
      {Array.from({ length: count }, (_, i) => {
        const angle = toRad((360 / count) * i - 90);
        const innerR = outerR - (i % 6 === 0 ? 10 : 6);
        const x1 = DIAL_CX + outerR * Math.cos(angle);
        const y1 = DIAL_CY + outerR * Math.sin(angle);
        const x2 = DIAL_CX + innerR * Math.cos(angle);
        const y2 = DIAL_CY + innerR * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={i % 6 === 0 ? "#3A3A52" : "#222232"}
            strokeWidth={i % 6 === 0 ? 1.5 : 1}
            strokeLinecap="round"
          />
        );
      })}
    </g>
  );
};

type DialProps = {
  value: number;
  max: number;
  color: string;
  centerLabel: string;
  unit: string;
};

const RadialDial: FC<DialProps> = ({ value, max, color, centerLabel, unit }) => {
  const pct = Math.min(Math.max(value / max, 0), 1);
  const fillEnd = START_DEG + SWEEP_DEG * pct;
  const trackEnd = START_DEG + SWEEP_DEG;
  const handle = polarToXY(DIAL_CX, DIAL_CY, DIAL_R, fillEnd);

  return (
    <svg
      width={DIAL_SIZE}
      height={DIAL_SIZE}
      viewBox={`0 0 ${DIAL_SIZE} ${DIAL_SIZE}`}
      style={{ display: "block", maxWidth: "min(320px, 88vw)", margin: "0 auto" }}
    >
      <TickMarks />

      {/* track */}
      <path
        d={arcPath(DIAL_CX, DIAL_CY, DIAL_R, START_DEG, trackEnd)}
        fill="none"
        stroke="#1A1A2A"
        strokeWidth={STROKE_W}
        strokeLinecap="round"
      />

      {/* fill */}
      {pct > 0.005 && (
        <path
          d={arcPath(DIAL_CX, DIAL_CY, DIAL_R, START_DEG, fillEnd)}
          fill="none"
          stroke={color}
          strokeWidth={STROKE_W}
          strokeLinecap="round"
        />
      )}

      {/* handle */}
      {pct > 0.005 && (
        <>
          <circle cx={handle.x} cy={handle.y} r={11} fill="#09090F" />
          <circle cx={handle.x} cy={handle.y} r={6} fill={color} />
        </>
      )}

      {/* center label (metric name) */}
      <text
        x={DIAL_CX} y={DIAL_CY - 28}
        textAnchor="middle"
        fontSize="11"
        fill="#4A5568"
        fontWeight="600"
        letterSpacing="2"
      >
        {centerLabel}
      </text>

      {/* value */}
      <text
        x={DIAL_CX} y={DIAL_CY + 20}
        textAnchor="middle"
        fontSize="56"
        fontWeight="700"
        fill="#F1F5F9"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-2"
      >
        {value.toFixed(1)}
      </text>

      {/* unit */}
      <text
        x={DIAL_CX} y={DIAL_CY + 44}
        textAnchor="middle"
        fontSize="11"
        fill="#4A5568"
        fontWeight="600"
        letterSpacing="1.5"
      >
        {unit}
      </text>
    </svg>
  );
};

// ─── styles ──────────────────────────────────────────────────────────────────

const s = {
  screen: css({
    display: "flex",
    flexDirection: "column",
    minHeight: "100dvh",
    backgroundColor: "#09090F",
  }),
  body: css({
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingX: "5",
    paddingBottom: "80px",
    overflowY: "auto",
  }),
  catTabs: css({
    display: "flex",
    gap: "2",
    paddingTop: "4",
    paddingBottom: "2",
    alignSelf: "flex-start",
    overflowX: "auto",
    width: "full",
  }),
  catBtn: css({
    display: "flex",
    alignItems: "center",
    gap: "1.5",
    paddingX: "3",
    paddingY: "1.5",
    borderRadius: "full",
    fontSize: "xs",
    fontWeight: "600",
    whiteSpace: "nowrap",
    border: "1px solid #2A2A3D",
    backgroundColor: "transparent",
    color: "#64748B",
    cursor: "pointer",
    transition: "all 0.15s",
  }),
  dot: css({ width: "7px", height: "7px", borderRadius: "full", flexShrink: "0" }),
  metaLabel: css({
    fontSize: "xs",
    fontWeight: "700",
    color: "#475569",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginTop: "5",
    alignSelf: "flex-start",
  }),
  metaHeading: css({
    fontSize: "2xl",
    fontWeight: "700",
    color: "#F1F5F9",
    alignSelf: "flex-start",
    marginTop: "1",
    marginBottom: "2",
    lineHeight: "1.2",
  }),
  dialWrapper: css({
    width: "full",
    display: "flex",
    justifyContent: "center",
    marginY: "1",
  }),
  stepRow: css({
    display: "flex",
    gap: "3",
    width: "full",
    marginTop: "5",
  }),
  stepBtn: css({
    flex: "1",
    paddingY: "3",
    borderRadius: "10px",
    fontSize: "sm",
    fontWeight: "700",
    border: "1px solid #2A2A3D",
    backgroundColor: "#1C1C27",
    color: "#E2E8F0",
    cursor: "pointer",
    textAlign: "center",
    transition: "all 0.15s",
  }),
  actions: css({
    display: "flex",
    gap: "3",
    width: "full",
    marginTop: "4",
  }),
  discardBtn: css({
    flex: "1",
    paddingY: "4",
    borderRadius: "12px",
    fontSize: "sm",
    fontWeight: "700",
    border: "1px solid #2A2A3D",
    backgroundColor: "transparent",
    color: "#64748B",
    cursor: "pointer",
    transition: "all 0.15s",
  }),
  saveBtn: css({
    flex: "2",
    paddingY: "4",
    borderRadius: "12px",
    fontSize: "sm",
    fontWeight: "700",
    border: "none",
    backgroundColor: "#3B82F6",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.15s",
  }),
};

// ─── screen ──────────────────────────────────────────────────────────────────

export function CaptureScreen() {
  const navigate = useNavigate();
  const [catIndex, setCatIndex] = useState(0);
  const cat = CATEGORIES[catIndex];
  const [value, setValue] = useState<number>(cat.initial);

  const switchCat = (i: number) => {
    setCatIndex(i);
    setValue(CATEGORIES[i].initial);
  };

  const adjust = (delta: number) =>
    setValue((prev) => Math.round((prev + delta) * 10) / 10);

  return (
    <div className={s.screen}>
      <MobileTopbar />

      <div className={s.body}>
        {/* Category tabs */}
        <div className={s.catTabs}>
          {CATEGORIES.map((c, i) => (
            <button
              key={c.key}
              className={s.catBtn}
              style={
                i === catIndex
                  ? { borderColor: `${c.color}55`, color: "#E2E8F0", backgroundColor: `${c.color}14` }
                  : {}
              }
              onClick={() => switchCat(i)}
            >
              <span className={s.dot} style={{ backgroundColor: c.color }} />
              {c.label}
            </button>
          ))}
        </div>

        {/* Header */}
        <span className={s.metaLabel}>Capture</span>
        <h1 className={s.metaHeading}>
          {cat.label}{" "}
          <span style={{ color: "#64748B", fontWeight: 400, fontSize: "inherit" }}>
            · today
          </span>
        </h1>

        {/* Dial */}
        <div className={s.dialWrapper}>
          <RadialDial
            value={value}
            max={cat.max}
            color={cat.color}
            centerLabel={cat.centerLabel}
            unit={cat.unit}
          />
        </div>

        {/* Step buttons */}
        <div className={s.stepRow}>
          {STEPS.map((step) => (
            <button key={step} className={s.stepBtn} onClick={() => adjust(step)}>
              {step > 0 ? `+${step}` : step}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className={s.actions}>
          <button
            className={s.discardBtn}
            onClick={() => {
              setValue(cat.initial);
              navigate(-1);
            }}
          >
            Discard
          </button>
          <button
            className={s.saveBtn}
            onClick={() => {
              console.log("save", cat.key, value);
              navigate(-1);
            }}
          >
            Save
          </button>
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
