import React from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/footer/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
      <TanStackRouterDevtools />
      <Footer />
    </>
  ),
});
