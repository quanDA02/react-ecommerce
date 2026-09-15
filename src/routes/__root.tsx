import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "@/components/ui/toast";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
const RootLayout = () => (
  <>
    <Navbar />
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <Outlet />
    </main>
    <TanStackRouterDevtools />
    <Toaster timeout={2500} />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
