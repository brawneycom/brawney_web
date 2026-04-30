import { FC } from "react";
import { Link } from "@remix-run/react";
import { css } from "styled-system/css";

const s = {
  bar: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "56px",
    paddingX: "4",
    backgroundColor: "#0D0D1A",
    borderBottom: "1px solid #1E1E2E",
    flexShrink: "0",
  }),
  icon: css({
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#64748B",
    borderRadius: "8px",
    cursor: "pointer",
    _hover: { color: "#E2E8F0", backgroundColor: "#1C1C27" },
  }),
  logo: css({
    fontSize: "base",
    fontWeight: "700",
    color: "#F1F5F9",
    letterSpacing: "-0.01em",
  }),
};

const HamburgerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <line x1="3" y1="5" x2="17" y2="5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="3" y1="15" x2="17" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10 2 L10 4 M10 16 L10 18 M2 10 L4 10 M16 10 L18 10 M4.2 4.2 L5.6 5.6 M14.4 14.4 L15.8 15.8 M15.8 4.2 L14.4 5.6 M5.6 14.4 L4.2 15.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

type Props = {
  onMenu?: () => void;
};

export const MobileTopbar: FC<Props> = ({ onMenu }) => (
  <header className={s.bar}>
    <button className={s.icon} onClick={onMenu} aria-label="Menu">
      <HamburgerIcon />
    </button>
    <span className={s.logo}>Brawney</span>
    <Link to="/settings" className={s.icon} aria-label="Settings">
      <SettingsIcon />
    </Link>
  </header>
);
