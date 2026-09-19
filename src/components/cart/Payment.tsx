import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type Props = {};

export default function Payment({}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Info</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Name on card:</Label>
              <Input id="name" placeholder="John doe" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="cardinfo">Card number:</Label>
              </div>
              <Input id="cardinfo" placeholder="0000 0000 0000 1234" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full mt-2">
          Checkout
        </Button>
      </CardFooter>
    </Card>
  );
}
