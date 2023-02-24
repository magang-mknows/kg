import { Fragment, FC, ReactElement } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsGrid1X2Fill } from "react-icons/bs";

// font
import Link from "next/link";
import { NavbarProps } from "./types";
import { useRouter } from "next/router";

const NavMenu: FC<NavbarProps> = ({ list }): ReactElement => {
  const router = useRouter();

  return (
    <>
      {list.map((menu, index) => {
        return (
          <Link
            href={menu.link}
            passHref
            key={index}
            className={`${
              router.pathname.includes(menu.link)
                ? "bg-[#F8F6F2] text-gray-900 rounded-lg shadow-sm "
                : "  hover:text-gray-900  text-[#968E7E] "
            } px-6 py-2.5  text-base cursor-pointer transition-colors duration-300 ease-in-out font-medium`}
          >
            <li>{menu.name}</li>
          </Link>
        );
      })}
    </>
  );
};

export default NavMenu;
