import { navbarMenu } from "@/utilities/constant";
import React, { FC } from "react";
import NavMenu from "../Common/NavMenu";

const BottomSection: FC = () => {
  return (
    <>
      <section className="bg-white dark:bg-[#161514] border-b-[0.2px] dark:border-[#1B1B29]  lg:px-20 md:px-10 px-5 py-3  border-gray-100 hidden lg:block ">
        <div>
          <ul className=" flex gap-x-4">
            <NavMenu list={navbarMenu} />
          </ul>
        </div>
      </section>
    </>
  );
};

export default BottomSection;
