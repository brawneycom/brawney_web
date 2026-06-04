import { FC } from "react";
import { NavLink, Link } from "@remix-run/react";
import { cx } from "styled-system/css";
import { css } from "styled-system/css";

const s = {
  bar: css({
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    height: "64px",
    backgroundColor: "#0D0D1A",
    borderTop: "1px solid #1E1E2E",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    zIndex: "50",
    paddingBottom: "env(safe-area-inset-bottom)",
  }),
  item: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5",
    fontSize: "xs",
    color: "#475569",
    textDecoration: "none",
    padding: "2",
    transition: "color 0.15s",
    _hover: { color: "#94A3B8" },
  }),
  itemActive: css({ color: "#3B82F6" }),
  fab: css({
    width: "48px",
    height: "48px",
    borderRadius: "full",
    backgroundColor: "#3B82F6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "xl",
    fontWeight: "300",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(59,130,246,0.4)",
    transition: "all 0.15s",
    _hover: { backgroundColor: "#2563EB" },
  }),
};

const TrendsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M2 16 L7 10 L11 13 L15 7 L20 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProfileIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 20 C3 16 6.5 13 11 13 C15.5 13 19 16 19 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const MobileNav: FC = () => (
  <nav className={s.bar}>
    <NavLink
      to="/dashboard"
      end
      className={({ isActive }) => cx(s.item, isActive && s.itemActive)}
    >
      <TrendsIcon />
      Trends
    </NavLink>

    <Link to="/capture" className={s.fab} aria-label="Capture">
      +
    </Link>

    <NavLink
      to="/profile"
      className={({ isActive }) => cx(s.item, isActive && s.itemActive)}
    >
      <ProfileIcon />
      Profile
    </NavLink>
  </nav>
);
