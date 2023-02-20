import { FC, ReactElement, ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footbar from "@/components/Footbar";

type BaseLayoutType = {
  children: ReactNode;
};

const BaseLayouts: FC<BaseLayoutType> = ({ children }): ReactElement => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen justify-center bg-white dark:bg-gray-900  items-center w-screen">
        {children}
      </div>
      <Footbar />
    </>
  );
};

export default BaseLayouts;
