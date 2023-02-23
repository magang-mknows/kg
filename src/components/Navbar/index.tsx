import { FC, ReactElement } from "react";

// font
import { Roboto } from "@next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

// toogle

import useWindowScroll from "@/hooks/Common/useWindowScroll";
import UpperSection from "./UpperSection";
import BottomSection from "./BottomSection";
import CombineSection from "./CombineSection";

// nav menu list

const Navbar: FC = (): ReactElement => {
  const { isScrollY } = useWindowScroll();

  return (
    <nav
      className={`${roboto.className} ${
        isScrollY ? "fixed w-full top-0" : "-top-20"
      } bg-white transition-all `}
    >
      {/* upper */}
      {!isScrollY ? (
        <>
          <UpperSection />
          <BottomSection />
        </>
      ) : (
        <CombineSection />
      )}
    </nav>
  );
};

export default Navbar;
