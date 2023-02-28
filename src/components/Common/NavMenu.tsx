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
              router.pathname === menu.link
                ? "bg-[#106FA4] hover:bg-[#0B568D]"
                : "text-neutral-500 hover:text-[#106FA4]"
            } px-4 py-3 rounded-lg text-sm transition-colors ease-in-out duration-300`}
          >
            <li>{menu.name}</li>
          </Link>
        );
      })}
    </>
  );
};

export default NavMenu;
