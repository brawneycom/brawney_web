import { css } from "styled-system/css";

export const s = {
  page: css({
    display: "flex",
    flexDirection: "column",
    gap: "6",
    maxWidth: "1100px",
  }),
  header: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "3",
  }),
  titleRow: css({
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
  }),
  pageTitle: css({
    fontSize: "xl",
    fontWeight: "700",
    color: "#F1F5F9",
  }),
  subtitle: css({
    fontSize: "sm",
    color: "#64748B",
  }),
  controls: css({
    display: "flex",
    alignItems: "center",
    gap: "3",
    flexWrap: "wrap",
  }),
  // Desktop: side-by-side chart + capture
  desktopGrid: css({
    display: { base: "none", lg: "grid" },
    gridTemplateColumns: "1fr 280px",
    gap: "5",
    alignItems: "start",
  }),
  // Mobile: stacked
  mobileStack: css({
    display: { base: "flex", lg: "none" },
    flexDirection: "column",
    gap: "5",
  }),
  chartCard: css({
    backgroundColor: "#131320",
    borderRadius: "12px",
    border: "1px solid #1E1E2E",
    padding: "5",
  }),
  chartHeader: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "4",
    flexWrap: "wrap",
    gap: "3",
  }),
  chartTitle: css({
    fontSize: "sm",
    fontWeight: "600",
    color: "#94A3B8",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
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
  // Mobile-only toggle row at bottom
  mobileToggleRow: css({
    display: { base: "flex", lg: "none" },
    justifyContent: "center",
    paddingTop: "2",
  }),
};
