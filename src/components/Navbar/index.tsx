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
    <nav
      className={`${montserrat.className} ${
        isScrollY
          ? "fixed w-full top-0  transition-all ease-in-out duration-300 mb-[720px]"
          : "z-[9999] "
      } bg-white  z-[9999]`}
    >
      <Suspense fallback={"Skeleton loading...."}>
        <UpperSection />
        {!isScrollY && <BottomSection className="h-[84px] border-b-2 border-neutral-100 " />}
      </Suspense>
    </nav>
  );
};

export default Navbar;
