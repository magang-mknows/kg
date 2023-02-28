import { navbarMenu } from "@/utilities/constant";
import React, { FC, ReactElement } from "react";
import NavMenu from "../Common/NavMenu";

import { NavbarItemProps } from "./types";

const BottomSection: FC<NavbarItemProps> = ({ className }): ReactElement => {
  return (
    <>
      <section
        className={`hidden bg-white lg:flex items-center px-20 border-neutral-50 ${className}`}
      >
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
