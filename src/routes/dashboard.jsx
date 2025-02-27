import React from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Sidebar/Sidebar";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <div className="relative h-full w-full bg-black flex">
      <SidebarProvider>
        <AppSidebar />
        <main className={cn(
          'relative h-full overflow-hidden bg-gray-100 w-full',
        )}>
            <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}
