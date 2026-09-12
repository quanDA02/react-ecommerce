import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "@/components/ui/toast";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
const RootLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <TanStackRouterDevtools />
    <Toaster timeout={2500} />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
