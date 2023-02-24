import { navbarMenu } from "@/utilities/constant";
import React, { FC } from "react";
import NavMenu from "../Common/NavMenu";

const BottomSection: FC = () => {
  return (
    <>
      <section className="lg:px-20 md:px-10 px-5 py-4 border-b-2 border-gray-100 hidden lg:block ">
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
