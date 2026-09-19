import { Drawer, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import MenuDrawer from "./MenuDrawer";

type Props = {};

export default function MenuButton({}: Props) {
  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger
        render={
          <Button className="md:hidden">
            <AlignJustify />
          </Button>
        }
      />
      <MenuDrawer />
    </Drawer>
  );
}
