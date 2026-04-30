import { FC, ReactNode } from "react";
import { useAuth } from "~/contexts";
import { DashboardSidebar } from "./sidebar";
import { MobileNav } from "./mobile-nav";
import { MobileTopbar } from "./mobile-topbar";
import { s } from "./layout.styles";

type Props = {
  children: ReactNode;
};

export const DashboardLayout: FC<Props> = ({ children }) => {
  const { me } = useAuth();

  return (
    <div className={s.root}>
      {/* Desktop sidebar — hidden on mobile */}
      <div className={s.sidebarWrapper}>
        <DashboardSidebar me={me} />
      </div>

      <div className={s.content}>
        {/* Mobile top bar — hidden on desktop */}
        <div className={s.mobileOnly}>
          <MobileTopbar />
        </div>

        <main className={s.main}>{children}</main>
      </div>

      {/* Mobile bottom nav — fixed position, hidden on desktop */}
      <div className={s.mobileOnly}>
        <MobileNav />
      </div>
    </div>
  );
};
