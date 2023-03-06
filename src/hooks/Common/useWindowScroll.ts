import { useEffect, useState } from "react";
import { WindowScrollReturnTypes } from "./types";

export default function useWindowScroll(): WindowScrollReturnTypes {
  const [isScrollY, setScrollY] = useState<string>("onRender");

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY <= 100) {
        setScrollY("onRender");
      } else if (window.scrollY > 100 && window.scrollY < 360) {
        setScrollY("onScroll");
      } else {
        setScrollY("onSticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrollY };
}
