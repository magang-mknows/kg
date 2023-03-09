import { FC, Fragment, ReactElement, Suspense } from "react";
import Navbar from "@/components/Navbar";
import { BaseLayoutTypes } from "./types";
import Footbar from "@/components/Footbar";

const BaseLayoutsLanding: FC<BaseLayoutTypes> = ({
  children,
  widthHScreen,
  className,
}): ReactElement => {
  return (
    <Fragment>
      <Suspense fallback="loading...">
        <Navbar />
      </Suspense>
      <main
        className={`flex flex-col ${className} ${
          widthHScreen && "min-h-screen"
        }  justify-center bg-white dark:bg-gray-900  items-center max-w-screen overflow-hidden`}
      >
        {children}
      </main>
      <Footbar />
    </Fragment>
  );
};

export default BaseLayoutsLanding;
