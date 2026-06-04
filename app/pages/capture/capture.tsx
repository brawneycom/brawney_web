import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import { css } from "styled-system/css";
import { DialInput, type DialInputProperties } from "@bennie-ui/inputs";
import { toHex } from "@bennie-ui/types/colors";
import { MobileTopbar } from "~/pages/dashboard/layout/mobile-topbar";
import { MobileNav } from "~/pages/dashboard/layout/mobile-nav";

type Category = {
  key: string;
  label: string;
  unit: string;
  color: NonNullable<DialInputProperties["color"]>;
  initial: number;
  max: number;
  centerLabel: string;
};

const CATEGORIES: Category[] = [
  { key: "weight", label: "Weight", unit: "KG", color: "blue.500", initial: 79.4, max: 200, centerLabel: "KG" },
  { key: "bodyfat", label: "Body comp", unit: "%", color: "amber.500", initial: 17.1, max: 50, centerLabel: "FAT" },
  { key: "vo2max", label: "VO₂max", unit: "ML/KG/MIN", color: "red.500", initial: 48.2, max: 80, centerLabel: "VO2" },
];

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
    height: 'full',
    justifyContent: "center",
    alignContent: 'center',
    marginY: "1",
  }),
};

export function CaptureScreen() {
  const navigate = useNavigate();
  const [catIndex, setCatIndex] = useState(0);
  const cat = CATEGORIES[catIndex];

  const switchCat = (i: number) => setCatIndex(i);

  return (
    <div className={s.screen}>
      <MobileTopbar />

      <div className={s.body}>
        <div className={s.catTabs}>
          {CATEGORIES.map((c, i) => (
            <button
              key={c.key}
              className={s.catBtn}
              style={
                i === catIndex
                  ? { borderColor: `${toHex(c.color)}55`, color: "#E2E8F0", backgroundColor: `${toHex(c.color)}14` }
                  : {}
              }
              onClick={() => switchCat(i)}
            >
              <span className={s.dot} style={{ backgroundColor: toHex(c.color) }} />
              {c.label}
            </button>
          ))}
        </div>

        <span className={s.metaLabel}>Capture</span>
        <h1 className={s.metaHeading}>
          {cat.label}{" "}
          <span style={{ color: "#64748B", fontWeight: 400, fontSize: "inherit" }}>
            · today
          </span>
        </h1>

        <div className={s.dialWrapper}>
          <DialInput
            key={cat.key}
            value={cat.initial}
            onChange={(v) => { console.log("save", cat.key, v); navigate(-1); }}
            max={cat.max}
            unit={cat.unit}
            label={cat.centerLabel}
            color={cat.color}
            size={360}
            showStepButtons={{ increments: { small: 0.1, big: 1 } }}
          />
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
