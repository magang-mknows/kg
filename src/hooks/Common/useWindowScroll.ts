import React, { useEffect, useState } from "react";

export default function useWindowScroll() {
  const [isScrollY, setScrollY] = useState<boolean>(false);
  const handleScroll = () => {
    window.scrollY < 100 ? setScrollY(false) : setScrollY(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrollY };
}
