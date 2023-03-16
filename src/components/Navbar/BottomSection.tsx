import { navbarMenu } from "@/utilities/constant";
import React, { FC, ReactElement } from "react";
import NavMenu from "./NavMenu";

import { NavbarItemProps } from "./types";

const BottomSection: FC<NavbarItemProps> = ({ className }): ReactElement => {
  return (
    <>
      <section className={`hidden bg-white dark:bg-[#222529] lg:flex items-center  ${className}`}>
        <div>
          <ul className=" flex gap-x-2 items-center">
            <NavMenu list={navbarMenu} />
          </ul>
        </div>
      </section>
    </>
  );
};

export default BottomSection;
