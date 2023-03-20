import { FC, ReactElement, useEffect, useState } from "react";

import useWindowScroll from "@/hooks/Common/useWindowScroll";
import SuspenseError from "@/modules/Common/SuspenseError";
import UpperSection from "./UpperSection";
import BottomSection from "./BottomSection";
import Loading from "../Loading";

const Navbar: FC = (): ReactElement => {
  const { isScrollY } = useWindowScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Loading />;

  return (
    <SuspenseError>
      <nav
        className={`${
          isScrollY === "onSticky"
            ? "fixed top-0"
            : isScrollY === "onScroll"
            ? "absolute -top-10"
            : isScrollY === "onRender"
            ? "absolute top-0 "
            : ""
        } bg-white dark:bg-[#222529]  z-[9999] left-0 w-full transition-all ease-in duration-300`}
      >
        <UpperSection />
        {isScrollY === "onRender" && (
          <BottomSection className="h-[84px] border-b-2 px-6 md:px-8 lg:px-10  border-neutral-100 dark:border-[#373a3e4a]" />
        )}
      </nav>
      <section className="lg:mb-[156px] mb-[72px]  h-full block"></section>
    </SuspenseError>
  );
};

export default Navbar;
