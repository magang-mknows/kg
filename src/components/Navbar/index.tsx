import { FC, lazy, ReactElement, Suspense } from "react";

// font
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const UpperSection = lazy(() => import("@/components/Navbar/UpperSection"));
const BottomSection = lazy(() => import("@/components/Navbar/BottomSection"));

import useWindowScroll from "@/hooks/Common/useWindowScroll";

const Navbar: FC = (): ReactElement => {
  const { isScrollY } = useWindowScroll();

  return (
    <nav className={`${montserrat.className}  bg-white w-full z-50 `}>
      <Suspense fallback={"Skeleton loading...."}>
        <UpperSection />
        {!isScrollY && (
          <BottomSection className="h-[84px] border-b-2 border-neutral-50 items-center" />
        )}
      </Suspense>
    </nav>
  );
};

export default Navbar;
