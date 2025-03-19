import React from "react";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Sidebar/Sidebar";
import { cn } from "@/lib/utils";
import TopNav from "@/components/TopNav/TopNav";

export const Route = createFileRoute("/dashboard")({
  component: DashboardLayout,
  beforeLoad: ({context, location}) => {
    //Check if user is authenticated
    if(!context.isAuthenticated) {
      return redirect({
        to: "/student/login",
      });
    }
  },
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
          <TopNav />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}
