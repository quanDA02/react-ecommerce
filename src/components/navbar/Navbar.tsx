import { navData } from "@/data/navigations";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import NavLink from "./NavLink";
import RightSideNav from "./RightSideNav";

type Props = {};

export default function Navbar({}: Props) {
  const navs = navData;
  return (
    <div className="w-full bg-primary/65">
      <NavigationMenu className="p-2 w-full  max-w-none items-center">
        <NavigationMenuList className="h-auto w-full gap-1">
          {navs.map((nav) => (
            <NavLink key={nav.title} nav={nav} />
          ))}
          <RightSideNav />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
