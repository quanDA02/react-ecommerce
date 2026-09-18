import CartNavbar from "./CartNavbar";
import NavButton from "./NavButton";

type Props = {};

export default function RightSideNav({}: Props) {
  return (
    <div className="absolute right-3 flex flex-row gap-2 pr-2">
      <NavButton title="Login" />
      <NavButton title="Register" />
      <CartNavbar />
    </div>
  );
}
