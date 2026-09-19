import { navData } from "@/data/navigations";
import { Button } from "../ui/button";
import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";
import { Link } from "@tanstack/react-router";

type Props = {};

export default function MenuDrawer({}: Props) {
  const navs = navData;
  return (
    <DrawerContent className="w-[30vh]">
      <DrawerHeader>
        <DrawerTitle className="absolute top-0 left-0 text-4xl text-primary/50 font-bold">
          Menu
        </DrawerTitle>
      </DrawerHeader>
      <div className="flex flex-col pt-10 p-4 gap-4 text-xl font-thin">
        {navs.map((nav) => (
          <DrawerClose
            key={nav.title}
            render={
              <Button className="w-full bg-primary h-10 p-0">
                <Link
                  to={`/${nav.navLink}`}
                  className="flex h-10 w-full items-center justify-center p-2"
                >
                  {nav.title}
                </Link>
              </Button>
            }
          ></DrawerClose>
        ))}
      </div>
      <DrawerFooter>
        <DrawerClose
          render={<Button className="w-full bg-primary h-10 p-0">Close</Button>}
        />
      </DrawerFooter>
    </DrawerContent>
  );
}
