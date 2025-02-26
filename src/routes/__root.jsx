import React from 'react';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import NavBar from '../components/NavBar/NavBar';

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar/>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})