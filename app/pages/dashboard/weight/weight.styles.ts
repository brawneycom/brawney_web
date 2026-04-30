import { css } from "styled-system/css";

export const s = {
  subtitle: css({
    fontSize: "sm",
    color: "#64748B",
  }),
  toggleControls: {
    mobile: css({ display: { base: "flex", md: "none" } }),
    desktop: css({ display: { base: "none", md: "flex" } }),
  },
  controls: css({
    display: "flex",
    alignItems: "center",
    gap: "3",
    flexWrap: "wrap",
  }),
  navigation: css({
    alignItems: "center",
    gap: "1",
    flexWrap: "wrap",
    display: { base: "flex", md: "none" },
    justifyContent: 'center'
  }),
  desktopGrid: css({
    display: "grid",
    gridTemplateColumns: { base: "1fr", lg: "1fr 280px" },
    gap: "5",
    alignItems: "stretch",
  }),
  dialColumn: css({
    display: { base: "none", lg: "flex" },
  }),
  chartCard: css({
    backgroundColor: "#131320",
    borderRadius: "12px",
    border: "1px solid #1E1E2E",
    padding: "5",
    display: "flex",
    flexDirection: "column",
  }),
  table: css({
    width: "full",
    borderCollapse: "collapse",
  }),
  th: css({
    textAlign: "left",
    fontSize: "xs",
    fontWeight: "600",
    color: "#475569",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    paddingBottom: "3",
    borderBottom: "1px solid #1E1E2E",
  }),
  td: css({
    paddingY: "3",
    fontSize: "sm",
    color: "#94A3B8",
    borderBottom: "1px solid #0D0D1A",
  }),
  tdValue: css({ color: "#E2E8F0", fontWeight: "600" }),
  tdPositive: css({ color: "#22C55E" }),
  tdNegative: css({ color: "#EF4444" }),
};
