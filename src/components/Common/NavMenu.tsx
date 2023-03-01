import { Fragment, FC, ReactElement } from "react";

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
                ? "bg-[#F8F6F2] dark:bg-[#1B1B29] dark:text-slate-50 text-gray-900 rounded-lg shadow-sm "
                : "  hover:text-gray-900  text-[#a9a7a1] dark:hover:text-slate-50 "
            } px-6 py-3  text-base cursor-pointer transition-colors duration-300 ease-in-out font-medium`}
          >
            <li>{menu.name}</li>
          </Link>
        );
      })}
    </>
  );
};

export default NavMenu;
