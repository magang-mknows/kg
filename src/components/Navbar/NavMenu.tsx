import { Fragment, FC, ReactElement } from "react";

// font
import Link from "next/link";
import { NavbarProps } from "../Common/types";
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
              router.pathname === menu.link
                ? "bg-[#106FA4] dark:bg-[#2885A3]  hover:bg-[#0B568D] text-white"
                : "text-neutral-500 dark:text-white/60 hover:text-[#106FA4] dark:hover:text-primary-500"
            } px-2 xl:px-4 py-3 rounded-lg text-xs xl:text-sm transition-colors ease-in-out duration-300`}
          >
            <li>{menu.name}</li>
          </Link>
        );
      })}
    </>
  );
};

export default NavMenu;
