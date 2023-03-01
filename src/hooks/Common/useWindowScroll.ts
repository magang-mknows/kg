import { useEffect, useState } from "react";
import { WindowScrollReturnTypes } from "./types";

export default function useWindowScroll(): WindowScrollReturnTypes {
  const [isScrollY, setScrollY] = useState<boolean>(false);
  const handleScroll = (): void => {
    window.scrollY < 450 ? setScrollY(false) : setScrollY(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrollY };
}
