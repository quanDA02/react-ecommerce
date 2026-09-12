import type { Navigation } from "@/data/navigations";
import { NavigationMenuItem, NavigationMenuLink } from "../ui/navigation-menu";
import { Link } from "@tanstack/react-router";

type Props = {
  nav: Navigation;
};

export default function NavLink({ nav }: Props) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        className="transform duration-300"
        render={
          <Link to={`/${nav.navLink}`} className="[&.active]:font-bold">
            {nav.title}
          </Link>
        }
      />
    </NavigationMenuItem>
  );
}
