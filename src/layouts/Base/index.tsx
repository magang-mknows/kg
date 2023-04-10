import { FC, Fragment, lazy, ReactElement } from "react";
import { BaseLayoutTypes } from "./types";
import Footer from "@/components/Common/Footer";
import SuspenseError from "@/modules/Common/SuspenseError";
import NavbarSkeleton from "@/components/Loading/Navbar";

const Navbar = lazy(() => import("@/components/Navbar"));

const BaseLayouts: FC<BaseLayoutTypes> = ({
  children,
  widthHScreen,
  className,
  ref,
}): ReactElement => {
  return (
    <Fragment>
      <SuspenseError loadingFallback={<NavbarSkeleton />}>
        <Navbar />
      </SuspenseError>
      <main
        className={`flex flex-col ${className} ${
          widthHScreen && "min-h-screen"
        }  justify-center bg-white dark:bg-gray-900  items-center max-w-screen overflow-hidden`}
        ref={ref}
      >
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default BaseLayouts;
