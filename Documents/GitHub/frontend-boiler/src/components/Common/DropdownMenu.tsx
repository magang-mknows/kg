import { Menu, Transition } from "@headlessui/react";
import { FC, Fragment, ReactElement } from "react";
import { DropdownProps } from "./types";

const DropdownMenu: FC<DropdownProps> = ({ children, list }): ReactElement => {
  return (
    <Menu role="menu" as="div" className="relative inline-block text-left">
      {children}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          role="menuitems"
          className="absolute right-0  mt-2 w-30 px-4 origin-top-right  divide-gray-100 rounded-md bg-white dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {list.map((x, i) => (
            <div role="menuitem" key={i} className=" py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? " bg-blue-200 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md text-sm gap-x-2 px-1 text-gray-400 dark:text-white`}
                  >
                    {x.icon}
                    <span className="text-base px-1 text-gray-400 dark:text-white">{x.text}</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
