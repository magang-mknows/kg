import { FC, ReactElement } from "react";
import { AuthLayoutTypes } from "./types";

import SliderLayout from "./SliderLayout";

const AuthLayouts: FC<AuthLayoutTypes> = ({ children, title, description }): ReactElement => {
  return (
    <section className="w-full bg-[#FAFAFA] flex items-center lg:py-10 lg:px-14 md:p-8 sm:p-6 p-4 h-full dark:bg-gray-900">
      <section className="flex items-center bg-white w-full h-auto rounded-lg shadow-lg">
        <SliderLayout />
        <div className="flex-col md:gap-y-[57px] gap-y-6 items-center justify-center p-6 flex h-auto w-full">
          <div className="flex flex-col w-full justify-center items-center md:items-start md:justify-start gap-y-1">
            <h1 className="md:text-[36px] text-2xl font-[700] text-[#171717]">{title}</h1>
            <p className="text-[16px] text-[#737373] font-[400] text-center md:text-left mt-3 lg:-mb-7">
              {description}
            </p>
          </div>
          <div className="flex w-full items-center justify-center">{children}</div>
        </div>
      </section>
    </section>
  );
};

export default AuthLayouts;
