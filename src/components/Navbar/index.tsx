import { FC, lazy, ReactElement } from "react";

import useWindowScroll from "@/hooks/Common/useWindowScroll";

const UpperSection = lazy(() => import("@/components/Navbar/UpperSection"));
const BottomSection = lazy(() => import("@/components/Navbar/BottomSection"));

const Navbar: FC = (): ReactElement => {
  const { isScrollY } = useWindowScroll();

  return (
    <>
      <nav
        className={`${
          isScrollY === "onSticky"
            ? "fixed top-0"
            : isScrollY === "onScroll"
            ? "absolute -top-20"
            : isScrollY === "onRender"
            ? "absolute top-0 "
            : ""
        } bg-white dark:bg-[#08405e]  z-[9999] left-0 w-full transition-all ease-in-out duration-300`}
      >
        <UpperSection />
        {isScrollY === "onRender" && (
          <BottomSection className="h-[84px] border-b-2 border-neutral-100 dark:border-[#0c59824f]" />
        )}
      </nav>
      <section className="lg:mb-[156px] mb-[72px] "></section>
    </>
  );
};

export default Navbar;
