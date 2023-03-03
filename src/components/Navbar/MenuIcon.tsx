import { Menu, Transition } from "@headlessui/react";
import React, { FC, ReactElement } from "react";
import { NavbarItemProps } from "./types";

const MenuIcon: FC<NavbarItemProps> = ({ children, icon }): ReactElement => {
  return (
    <Menu as="div" className={"relative inline-block text-left z-50 left-0"}>
      <Menu.Button>
        <div className="bg-neutral-200 h-9 w-9 flex items-center justify-center  overflow-hidden rounded-md cursor-pointer group">
          {icon}
        </div>
      </Menu.Button>

      <Transition
        enter="transition ease duration-500 transform"
        enterFrom="opacity-0 -translate-y-12"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease duration-300 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-12"
      >
        {children}
      </Transition>
    </Menu>
  );
};

export default MenuIcon;
