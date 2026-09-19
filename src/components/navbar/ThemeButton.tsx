import { Button } from "@base-ui/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {};

export default function ThemeButton({}: Props) {
  const [light, setLight] = useState(true);
  useEffect(() => {
    const root = document.body;
    if (!light) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [light]);
  function buttonHanlder() {
    setLight((prev) => !prev);
  }
  return (
    <Button onClick={buttonHanlder}>
      {light ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
