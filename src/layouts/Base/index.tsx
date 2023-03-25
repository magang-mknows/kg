import { FC, Fragment, ReactElement } from "react";
import Navbar from "@/components/Navbar";
import { BaseLayoutTypes } from "./types";
import Footer from "@/components/Common/Footer";

const BaseLayouts: FC<BaseLayoutTypes> = ({ children, widthHScreen, className, ref }): ReactElement => {
  return (
    <Fragment>
      <Navbar />
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
