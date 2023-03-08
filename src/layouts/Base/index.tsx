import { FC, Fragment, ReactElement, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footbar from "@/components/Footbar";
import { BaseLayoutTypes } from "./types";

const BaseLayouts: FC<BaseLayoutTypes> = ({ children, widthHScreen, className }): ReactElement => {
  return (
    <Fragment>
      <Suspense fallback="loading...">
        <Navbar />
      </Suspense>
      <main
        className={`flex flex-col ${className} ${
          widthHScreen && "min-h-screen"
        }  justify-center bg-neutral-100 dark:bg-gray-900  items-center max-w-screen overflow-hidden`}
      >
        {children}
      </main>
      <Footbar />
    </Fragment>
  );
};

export default BaseLayouts;
