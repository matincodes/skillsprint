import React from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Sidebar/Sidebar";
import { cn } from "@/lib/utils";
import TopNav from "@/components/TopNav/TopNav";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <div className="relative h-full w-full flex bg-black lg:px-[20px] px-[10px]">
      <SidebarProvider>
        <AppSidebar />
        <main
          className={cn(
            "relative h-full overflow-hidden text-white w-full font-inter gap-4 flex flex-col ",
          )}
        >
          {/* <SidebarTrigger /> */}
          <TopNav />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}
