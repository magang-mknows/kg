import { FC, Fragment, ReactElement } from "react";
import Navbar from "@/components/Navbar";
import Footbar from "@/components/Footbar";
import { BaseLayoutTypes } from "./types";

const BaseLayouts: FC<BaseLayoutTypes> = ({ children }): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <section className="flex flex-col h-screen justify-center bg-white dark:bg-gray-900  items-center w-screen">
        {children}
      </section>
      <Footbar />
    </Fragment>
  );
};

export default BaseLayouts;
