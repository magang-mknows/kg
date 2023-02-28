import { Menu } from "@headlessui/react";
import React, { FC, ReactElement } from "react";
import { NavbarItemProps } from "./types";

const MenuIcon: FC<NavbarItemProps> = ({ icon }): ReactElement => {
  return (
    <Menu as="div" className={"relative inline-block text-left"}>
      <div className="bg-neutral-200 h-9 w-9 flex items-center justify-center  overflow-hidden rounded-md cursor-pointer group">
        {icon}
      </div>
    </Menu>
  );
};

export default MenuIcon;
