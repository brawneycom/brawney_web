import { FC } from "react";
import { NavLink } from "@remix-run/react";
import { cx } from "styled-system/css";
import { Account } from "~/types";
import { s } from "./sidebar.styles";

type Props = {
  me: Account | null;
};

const DashboardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.7" />
    <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.7" />
    <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.4" />
    <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.4" />
  </svg>
);

const WeightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 14 C3 11 5 10 8 10 C11 10 13 11 13 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const BodyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 2 L10 5 L14 5.5 L11 8.5 L11.5 13 L8 11 L4.5 13 L5 8.5 L2 5.5 L6 5 Z" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
  </svg>
);

const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 13 C8 13 2 9 2 5.5 C2 3.5 3.5 2 5.5 2 C6.8 2 7.8 2.7 8 3 C8.2 2.7 9.2 2 10.5 2 C12.5 2 14 3.5 14 5.5 C14 9 8 13 8 13Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const MeasureIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 8 L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 6 L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 5 L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 6 L12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PhotoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 1 L8 3 M8 13 L8 15 M1 8 L3 8 M13 8 L15 8 M3.1 3.1 L4.5 4.5 M11.5 11.5 L12.9 12.9 M12.9 3.1 L11.5 4.5 M4.5 11.5 L3.1 12.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ProfileIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 14 C2 11 4.5 9 8 9 C11.5 9 14 11 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const metrics = [
  { label: "Weight", to: "/dashboard/weight", Icon: WeightIcon },
  { label: "Body composition", to: "/dashboard/weight", Icon: BodyIcon },
  { label: "VO2max", to: "/dashboard/weight", Icon: HeartIcon },
  { label: "Measurements", to: "/dashboard/weight", Icon: MeasureIcon },
  { label: "Progress photos", to: "/dashboard/weight", Icon: PhotoIcon },
];

const accountLinks = [
  { label: "Settings", to: "/settings", Icon: SettingsIcon },
  { label: "Profile", to: "/profile", Icon: ProfileIcon },
];

export const DashboardSidebar: FC<Props> = ({ me }) => {
  const initials = me
    ? `${me.first_name?.[0] ?? ""}${me.last_name?.[0] ?? ""}`.toUpperCase()
    : "?";

  return (
    <nav className={s.sidebar}>
      <div className={s.logo}>
        <div className={s.logoIcon}>B</div>
        <span className={s.logoText}>Brawney</span>
      </div>

      <div className={s.nav}>
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            cx(s.navItem, isActive && s.navItemAccent)
          }
        >
          <DashboardIcon />
          Dashboard
        </NavLink>

        <span className={s.sectionLabel}>Metrics</span>
        {metrics.map(({ label, to, Icon }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              cx(s.navItem, isActive && to === "/dashboard/weight" && label === "Weight" && s.navItemActive)
            }
          >
            <Icon />
            {label}
          </NavLink>
        ))}

        <span className={s.sectionLabel}>Account</span>
        {accountLinks.map(({ label, to, Icon }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) => cx(s.navItem, isActive && s.navItemActive)}
          >
            <Icon />
            {label}
          </NavLink>
        ))}
      </div>

      <div className={s.userCard}>
        <div className={s.avatar}>{initials}</div>
        <div>
          <div className={s.userName}>
            {me ? `${me.first_name} ${me.last_name}` : "—"}
          </div>
          <div className={s.userEmail}>{me?.email ?? ""}</div>
        </div>
      </div>
    </nav>
  );
};
