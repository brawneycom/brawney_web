import { Outlet } from "@remix-run/react";
import { DashboardLayout } from "~/pages/dashboard/layout/layout";

export default function DashboardRoute() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
