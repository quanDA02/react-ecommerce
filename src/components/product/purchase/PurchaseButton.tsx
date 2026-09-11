import { Button } from "@/components/ui/button";

type Props = {
  clickHandle: () => void;
  buttonName: string;
};

export default function PurchaseButton({ clickHandle, buttonName }: Props) {
  return (
    <Button className="w-full" onClick={clickHandle}>
      {buttonName}
    </Button>
  );
}
