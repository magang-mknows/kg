import { Fragment, FC, ReactElement } from "react";
import { Menu, Transition } from "@headlessui/react";

// font
//import { Roboto } from "next/font/google";
import Link from "next/link";
import { NavbarProps } from "./types";
// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: "500",
// });

const NotificationDropdown: FC<NavbarProps> = ({ list }): ReactElement => {
  return (
    <Menu as="div" className={`relative inline-block text-left ${""}`}>
      <div>
        <Menu.Button className="bg-[#4FC9DA]  p-3 rounded-md shadow-sm ">
          <div className="h-4 w-4 flex items-center justify-center text-slate-100">
            {list.length}
          </div>
        </Menu.Button>
      </div>

      <Transition
        enter="transition ease duration-500 transform"
        enterFrom="opacity-0 -translate-y-12"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease duration-300 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-12"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-80 shadow-lg bg-white rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-4  flex gap-2 items-baseline shadow-md border-b-2 border-gray-50/50 pl-5">
            <h1 className="text-white font-medium text-xl">Notification</h1>
          </div>
          {list.map((item) => (
            /* Use the `active` state to conditionally style the active item. */
            <Menu.Item as={Fragment} key={item.link}>
              {() => (
                <div className="flex justify-between py-3 px-6">
                  <Link
                    href={item.link}
                    passHref
                    className={
                      "flex items-center  hover:text-cyan-600 transition-colors ease-in-out duration-300 text-sm text-slate-800"
                    }
                  >
                    {item.name}
                  </Link>
                  <p className="bg-slate-200 rounded-md px-3 py-1 h-fit text-xs text-slate-500">
                    {item.time}
                  </p>
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NotificationDropdown;
