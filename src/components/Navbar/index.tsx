import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement, useState } from "react";

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
  const [isDark, setDark] = useState(false);
  const router = useRouter();

  return (
    <nav
      className={`lg:px-32 md:px-14 px-5 m-auto h-24 bg-[#f5f7f9] dark:bg-[#222529]  flex justify-between items-center ${roboto.className} overflow-hidden`}
    >
      {/* kg logo */}
      <div className="cursor-pointer">
        <Link href={"/"} passHref>
          <Image
            src={!isDark ? logoKG : logoKGDark}
            alt="Kampus Gratis Logo's"
            className="w-[5em] md:w-[7em] lg:w-[8em]"
          />
        </Link>
      </div>

      {/* menu link */}
      <div>
        <ul className=" lg:flex hidden">
          {navbarMenu.map((menu, index) => {
            return (
              <Link href={menu.link} passHref key={index}>
                <li
                  className={`px-4  hover:text-[#0d6efd]  cursor-pointer transition-colors duration-300 ease-in-out tracking-wide  text-gray-500 dark:text-gray-400 dark:hover:text-[#0d6efd]  text-base ${
                    router.pathname == menu.link ? "text-[#0d6efd] dark:text-[#0d6efd] " : ""
                  }`}
                >
                  {menu.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      {/* toggle and button  */}
      <div className="flex gap-6 items-center">
        <MobileMenu list={navbarMenu} />
        {/* toogle by Fenni */}
        <div
          onClick={() => {
            setDark(!isDark);
          }}
        >
          <ThemeToggle />
        </div>
        <button className="flex gap-x-2 rounded-sm shadow-md items-center  bg-[#24292D] text-white pl-3 pr-3.5 py-2 hover:bg-[#6c757d] dark:bg-[#0f0f10] dark:hover:bg-[#24292D] transition-colors duration-300 ease-in-out">
          <FiPower className="w-3 stroke-[0.15em]" />
          <p className="text-sm tracking-wider font-medium">Masuk</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
