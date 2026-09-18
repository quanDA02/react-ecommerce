import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type Props = {};

export default function RegisterPage({}: Props) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
              <CardDescription>
                We'll use this to contact you. We will not share your email with
                anyone else.
              </CardDescription>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Confirm password</Label>
              </div>
              <Input id="password" type="password" required />
              <CardDescription>Please confirm your password.</CardDescription>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Sign up
        </Button>
        <CardDescription>
          Already have an account?{" "}
          <Link className="underline" to="/login">
            Sign in
          </Link>{" "}
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
