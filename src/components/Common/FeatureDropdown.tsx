import { Fragment, FC, ReactElement } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsGrid1X2Fill } from "react-icons/bs";

// font
import Link from "next/link";
import { NavbarDropdownProps } from "./types";

const FeatureDropdown: FC<NavbarDropdownProps> = ({ list }): ReactElement => {
  return (
    <Menu as="div" className={"relative inline-block text-left"}>
      <div>
        <Menu.Button className="bg-[#F8F6F2]  group p-3 rounded-md shadow-sm ">
          <BsGrid1X2Fill className="h-4 w-4 text-[#968E7E] group-hover:text-[#5dc6d4] transition-colors ease-in-out duration-300" />
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
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-10  flex items-center justify-center flex-col gap-1 shadow-md border-b-2 border-gray-50/50">
            <h1 className="text-white font-medium text-xl">
              Kampus Gratis{" "}
              <span className="underline-offset-2 underline decoration-cyan-50">
                <Link href={"/fitur"} passHref>
                  Features
                </Link>
              </span>
            </h1>
          </div>
          {list.map((item) => (
            /* Use the `active` state to conditionally style the active item. */
            <Menu.Item as={Fragment} key={item.link}>
              {() => (
                <Link
                  href={item.link}
                  passHref
                  className={
                    "flex items-center py-4 px-6 hover:bg-slate-200 transition-colors ease-in-out duration-300 text-sm text-slate-800 rounded-sm hover:shadow-sm border-b-2 border-gray-50/80"
                  }
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default FeatureDropdown;
