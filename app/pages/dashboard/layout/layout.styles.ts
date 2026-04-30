import { css } from "styled-system/css";

export const s = {
  root: css({
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#09090F",
  }),
  content: css({
    flex: "1",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    // Mobile: add bottom padding for nav bar
    paddingBottom: { base: "64px", lg: "0" },
  }),
  main: css({
    flex: "1",
    padding: { base: "4", lg: "8" },
    overflowY: "auto",
  }),
  // Hide sidebar on mobile, show on large screens
  sidebarWrapper: css({
    display: { base: "none", lg: "flex" },
  }),
  // Show mobile elements only on small screens
  mobileOnly: css({
    display: { base: "block", lg: "none" },
  }),
};
