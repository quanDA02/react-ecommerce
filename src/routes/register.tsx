import RegisterPage from "@/components/home/RegisterPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-center p-10">
      <RegisterPage />
    </div>
  );
}
