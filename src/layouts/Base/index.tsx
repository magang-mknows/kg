import { FC, Fragment, ReactElement, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footbar from "@/components/Footbar";
import { BaseLayoutTypes } from "./types";

const BaseLayouts: FC<BaseLayoutTypes> = ({ children }): ReactElement => {
  return (
    <Fragment>
      <Suspense fallback="loading...">
        <Navbar />
      </Suspense>
      <main className="flex flex-col min-h-screen justify-center bg-white dark:bg-gray-900  items-center max-w-screen">
        {children}
      </main>
      <Footbar />
    </Fragment>
  );
};

export default BaseLayouts;
