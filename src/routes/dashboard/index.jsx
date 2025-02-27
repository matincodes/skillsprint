import React from 'react'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/Sidebar/Sidebar"

export const Route = createFileRoute(
  '/dashboard/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="border">

    <SidebarProvider>
    <AppSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
    </div>
  )
}
