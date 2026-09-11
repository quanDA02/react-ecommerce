import { Toaster } from "@/components/ui/toast";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <>
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/products" className="[&.active]:font-bold">
        Products
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
    <Toaster timeout={2500} />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
