import React, { useEffect, useState } from "react";

export default function useWindowScroll() {
  const [isScrollY, setScrollY] = useState<boolean>(true);
  const handleScroll = () => {
    window.scrollY === 0 ? setScrollY(false) : setScrollY(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return { isScrollY };
}
