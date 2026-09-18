import LoginPage from "@/components/home/LoginPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-center p-10">
      <LoginPage />
    </div>
  );
}
