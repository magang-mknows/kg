import { FC, ReactElement, Suspense } from "react";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

import useWindowScroll from "@/hooks/Common/useWindowScroll";
import dynamic from "next/dynamic";

const UpperSection = dynamic(() => import("@/components/Navbar/UpperSection"), {
  ssr: false,
});
const BottomSection = dynamic(() => import("@/components/Navbar/BottomSection"), {
  ssr: false,
});

const Navbar: FC = (): ReactElement => {
  const { isScrollY } = useWindowScroll();

  return (
    <>
      <nav
        className={`${montserrat.className} ${
          isScrollY === "onSticky"
            ? "fixed top-0"
            : isScrollY === "onScroll"
            ? "absolute -top-20"
            : isScrollY === "onRender"
            ? "absolute top-0 "
            : ""
        } bg-white  z-[9999] left-0 w-full transition-all ease-in-out duration-300`}
      >
        <Suspense fallback={"Skeleton loading...."}>
          <UpperSection />
          {!isScrollY && <BottomSection className="h-[84px] border-b-2 border-neutral-100 " />}
        </Suspense>
      </nav>
      <section className="lg:mb-[156px] mb-[72px]"></section>
    </>
  );
};

export default Navbar;
