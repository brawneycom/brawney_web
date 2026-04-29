import { css } from "styled-system/css";

export const s = {
  page: css({
    minHeight: "100vh",
    backgroundColor: "#09090B",
    color: "#F4F4F5",
    fontFamily: "var(--font-sans)",
    overflowX: "hidden",
  }),

  // ── Nav ──────────────────────────────────────────────────────────────────
  nav: css({
    position: "sticky",
    top: "0",
    zIndex: "50",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingX: { base: "4", md: "8", lg: "16" },
    paddingY: "4",
    borderBottom: "1px solid #1F1F23",
    backgroundColor: "rgba(9,9,11,0.85)",
    backdropFilter: "blur(12px)",
  }),

  navLogo: css({
    display: "flex",
    alignItems: "center",
    gap: "2.5",
    flexShrink: "0",
  }),

  navLogoIcon: css({
    width: "8",
    height: "8",
    borderRadius: "lg",
    backgroundColor: "#3B82F6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "sm",
    fontWeight: "bold",
    color: "white",
  }),

  navLogoText: css({
    fontSize: "lg",
    fontWeight: "semibold",
    letterSpacing: "tight",
    color: "#F4F4F5",
  }),

  navLinks: css({
    display: { base: "none", md: "flex" },
    alignItems: "center",
    gap: "6",
  }),

  navLink: css({
    fontSize: "sm",
    color: "#A1A1AA",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: "0",
    _hover: { color: "#F4F4F5" },
    transition: "color",
    transitionDuration: "fast",
  }),

  navActions: css({
    display: "flex",
    alignItems: "center",
    gap: "3",
  }),

  navSignIn: css({
    fontSize: "sm",
    fontWeight: "medium",
    color: "#A1A1AA",
    background: "none",
    border: "none",
    cursor: "pointer",
    paddingX: "3",
    paddingY: "2",
    borderRadius: "md",
    _hover: { color: "#F4F4F5", backgroundColor: "#18181B" },
    transition: "all",
    transitionDuration: "fast",
  }),

  navCta: css({
    fontSize: "sm",
    fontWeight: "semibold",
    color: "white",
    backgroundColor: "#3B82F6",
    border: "none",
    cursor: "pointer",
    paddingX: "4",
    paddingY: "2",
    borderRadius: "lg",
    _hover: { backgroundColor: "#2563EB" },
    transition: "background-color",
    transitionDuration: "fast",
  }),

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: { base: "8", lg: "16" },
    paddingX: { base: "4", md: "8", lg: "16" },
    paddingTop: { base: "16", lg: "20" },
    paddingBottom: { base: "12", lg: "20" },
    flexDirection: { base: "column", lg: "row" },
  }),

  heroContent: css({
    flex: "1",
    maxWidth: { base: "100%", lg: "520px" },
  }),

  heroBadge: css({
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    paddingX: "3",
    paddingY: "1",
    borderRadius: "full",
    border: "1px solid #1E3A5F",
    backgroundColor: "rgba(59,130,246,0.08)",
    fontSize: "xs",
    fontWeight: "medium",
    color: "#60A5FA",
    letterSpacing: "wider",
    textTransform: "uppercase",
    marginBottom: "6",
  }),

  heroBadgeDot: css({
    width: "1.5",
    height: "1.5",
    borderRadius: "full",
    backgroundColor: "#3B82F6",
    flexShrink: "0",
  }),

  heroHeadline: css({
    fontSize: { base: "3xl", md: "4xl", lg: "5xl" },
    fontWeight: "black",
    lineHeight: "none",
    letterSpacing: "tight",
    marginBottom: "6",
    color: "#F4F4F5",
  }),

  heroAccent: css({
    color: "#3B82F6",
  }),

  heroBody: css({
    fontSize: { base: "md", lg: "lg" },
    color: "#A1A1AA",
    lineHeight: "relaxed",
    marginBottom: "8",
    maxWidth: "420px",
  }),

  heroCtas: css({
    display: "flex",
    alignItems: "center",
    gap: "4",
    flexWrap: "wrap",
  }),

  heroPrimary: css({
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    paddingX: "6",
    paddingY: "3",
    borderRadius: "lg",
    backgroundColor: "#3B82F6",
    color: "white",
    fontSize: "sm",
    fontWeight: "semibold",
    border: "none",
    cursor: "pointer",
    _hover: { backgroundColor: "#2563EB" },
    transition: "background-color",
    transitionDuration: "fast",
  }),

  heroSecondary: css({
    display: "inline-flex",
    alignItems: "center",
    gap: "1.5",
    color: "#A1A1AA",
    fontSize: "sm",
    fontWeight: "medium",
    background: "none",
    border: "none",
    cursor: "pointer",
    _hover: { color: "#F4F4F5" },
    transition: "color",
    transitionDuration: "fast",
  }),

  heroVisual: css({
    flex: "1",
    maxWidth: { base: "100%", lg: "560px" },
    width: "full",
  }),

  // ── Mock dashboard card ───────────────────────────────────────────────────
  mockCard: css({
    backgroundColor: "#18181B",
    border: "1px solid #27272A",
    borderRadius: "2xl",
    overflow: "hidden",
    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6)",
  }),

  mockCardHeader: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingX: "5",
    paddingY: "3",
    borderBottom: "1px solid #27272A",
  }),

  mockCardDots: css({
    display: "flex",
    gap: "1.5",
  }),

  mockCardBody: css({
    padding: "5",
    display: "flex",
    flexDirection: "column",
    gap: "4",
  }),

  mockMetricsRow: css({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3",
  }),

  mockMetric: css({
    backgroundColor: "#27272A",
    borderRadius: "xl",
    padding: "4",
  }),

  mockMetricLabel: css({
    fontSize: "xs",
    color: "#71717A",
    marginBottom: "1",
  }),

  mockMetricValue: css({
    fontSize: "2xl",
    fontWeight: "bold",
    letterSpacing: "tight",
    color: "#F4F4F5",
  }),

  mockMetricUnit: css({
    fontSize: "xs",
    color: "#71717A",
    display: "inline",
    fontWeight: "normal",
  }),

  mockMetricTrend: css({
    fontSize: "xs",
    color: "#34D399",
    marginTop: "1",
  }),

  // ── Features ─────────────────────────────────────────────────────────────
  features: css({
    paddingX: { base: "4", md: "8", lg: "16" },
    paddingY: { base: "16", lg: "20" },
    borderTop: "1px solid #18181B",
  }),

  featuresHeader: css({
    marginBottom: "12",
  }),

  featuresEyebrow: css({
    fontSize: "xs",
    color: "#3B82F6",
    fontWeight: "semibold",
    letterSpacing: "widest",
    textTransform: "uppercase",
    marginBottom: "3",
  }),

  featuresHeadline: css({
    fontSize: { base: "2xl", md: "3xl" },
    fontWeight: "bold",
    letterSpacing: "tight",
    color: "#F4F4F5",
    marginBottom: "3",
  }),

  featuresSubtext: css({
    fontSize: "md",
    color: "#71717A",
    maxWidth: "480px",
    lineHeight: "relaxed",
  }),

  featureCards: css({
    display: "grid",
    gridTemplateColumns: { base: "1fr", md: "repeat(3, 1fr)" },
    gap: "4",
  }),

  featureCard: css({
    backgroundColor: "#18181B",
    border: "1px solid #27272A",
    borderRadius: "xl",
    padding: "6",
    display: "flex",
    flexDirection: "column",
    gap: "3",
    _hover: { borderColor: "#3F3F46" },
    transition: "border-color",
    transitionDuration: "normal",
  }),

  featureIcon: css({
    width: "10",
    height: "10",
    borderRadius: "lg",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "lg",
  }),

  featureTitle: css({
    fontSize: "lg",
    fontWeight: "semibold",
    color: "#F4F4F5",
  }),

  featureDesc: css({
    fontSize: "sm",
    color: "#71717A",
    lineHeight: "relaxed",
  }),

  featureStat: css({
    marginTop: "auto",
    paddingTop: "3",
    borderTop: "1px solid #27272A",
    display: "flex",
    alignItems: "baseline",
    gap: "1.5",
  }),

  featureStatValue: css({
    fontSize: "2xl",
    fontWeight: "bold",
    color: "#F4F4F5",
    letterSpacing: "tight",
  }),

  featureStatLabel: css({
    fontSize: "xs",
    color: "#71717A",
  }),

  // ── CTA Section ──────────────────────────────────────────────────────────
  ctaSection: css({
    paddingX: { base: "4", md: "8", lg: "16" },
    paddingY: { base: "16", lg: "24" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    borderTop: "1px solid #18181B",
  }),

  ctaHeadline: css({
    fontSize: { base: "2xl", md: "4xl" },
    fontWeight: "black",
    letterSpacing: "tight",
    color: "#F4F4F5",
    marginBottom: "4",
    lineHeight: "tight",
  }),

  ctaBody: css({
    fontSize: "md",
    color: "#71717A",
    marginBottom: "8",
    maxWidth: "400px",
    lineHeight: "relaxed",
  }),

  ctaButton: css({
    paddingX: "8",
    paddingY: "3.5",
    borderRadius: "lg",
    backgroundColor: "#3B82F6",
    color: "white",
    fontSize: "sm",
    fontWeight: "semibold",
    border: "none",
    cursor: "pointer",
    _hover: { backgroundColor: "#2563EB" },
    transition: "background-color",
    transitionDuration: "fast",
  }),

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: css({
    paddingX: { base: "4", md: "8", lg: "16" },
    paddingY: "8",
    borderTop: "1px solid #18181B",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "4",
  }),

  footerBrand: css({
    display: "flex",
    alignItems: "center",
    gap: "2",
  }),

  footerText: css({
    fontSize: "xs",
    color: "#52525B",
  }),

  footerLinks: css({
    display: "flex",
    gap: "5",
  }),

  footerLink: css({
    fontSize: "xs",
    color: "#52525B",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "0",
    _hover: { color: "#A1A1AA" },
    transition: "color",
    transitionDuration: "fast",
  }),
};
