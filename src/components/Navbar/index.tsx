import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement, useCallback, useEffect, useState } from "react";

// icons
import { FiPower } from "react-icons/fi";

// font
import { Roboto } from "@next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

// image
import logoKG from "@/assets/logokg.png";
import logoKGDark from "@/assets/logokg-dark.png";
import MobileMenu from "../Common/MobileMenu";

// toogle
import ThemeToggle from "../ThemeToggle";
import { useRouter } from "next/router";
import Button from "../Common/Button";
import useDarkMode from "@/hooks/Theme/useDarkMode";
import useWindowScroll from "@/hooks/Common/useWindowScroll";
import GlobalButton from "../Common/GlobalButton";

// nav menu list
const navbarMenu = [
  {
    name: "Beranda",
    link: "/",
  },

  {
    name: "Fitur",
    link: "/kategori",
  },
  {
    name: "Panduan",
    link: "/panduan",
  },
  {
    name: "Team",
    link: "/team",
  },
];

const Navbar: FC = (): ReactElement => {
  const router = useRouter();

  const { handleThemeChange, theme } = useDarkMode();

  const { isScrollY } = useWindowScroll();

  return (
    <nav
      className={`${
        isScrollY
          ? " top-0 h-14 lg:h-[4.6rem] shadow-md shadow-gray-400/10 dark:shadow-gray-900"
          : ""
      } ${
        roboto.className
      } lg:px-20 md:px-10 sticky px-5 m-auto h-16 lg:h-24 bg-[#f5f7f9] dark:bg-[#222529]  flex justify-between items-center  transition-all ease-in-out duration-300`}
    >
      {/* kg logo */}
      <div className="cursor-pointer">
        <Link href={"/"} passHref>
          <Image
            src={theme === "dark" ? logoKGDark : logoKG}
            alt="Kampus Gratis Logo's"
            className={` ${
              isScrollY ? " w-[5em] md:w-[7em] lg:w-[8em]" : "w-[6.2em] md:w-[7.2em] lg:w-[8.2em]"
            } transition-all opacity-100 ease-in-out duration-200`}
          />
        </Link>
      </div>

      {/* menu link */}
      <div>
        <ul className="hidden lg:flex">
          {navbarMenu.map((menu, index) => {
            return (
              <Link
                href={menu.link}
                passHref
                key={index}
                className={`${
                  router.pathname.includes(menu.link)
                    ? "text-[#1d71ef] dark:text-[#2a7af2]"
                    : "  hover:text-[#1d71ef]  text-gray-500 dark:text-gray-400 dark:hover:text-[#2a7af2]  "
                } px-4 tracking-wide text-base cursor-pointer transition-colors duration-300 ease-in-out font-normal`}
              >
                <li>{menu.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>

      {/* toggle and button  */}
      <div className="flex items-center gap-6">
        <MobileMenu list={navbarMenu} />
        {/* toogle by Fenni */}

        <div onClick={handleThemeChange}>
          <ThemeToggle />
        </div>

        {/* <Button
          text={"Masuk"}
          page="/auth/login"
          type="button"
          className="flex gap-x-2 rounded-md shadow-md items-center  bg-[#24292D] text-white pl-3 pr-3.5 py-1.5 hover:bg-[#6c757d] dark:bg-[#0f0f10] dark:hover:bg-[#24292D] transition-colors duration-300 ease-in-out"
          icon={<FiPower className="w-3 stroke-[0.15em]" />}
        /> */}
        <GlobalButton
          type="button"
          text={"Masuk"}
          page="/auth/login"
          size="small"
          color="black"
          icon={<FiPower className="w-3 stroke-[0.15em]" />}
        />
      </div>
    </nav>
  );
};

export default Navbar;
