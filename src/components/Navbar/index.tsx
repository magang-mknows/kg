import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";

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
import MobileMenu from "../Common/MobileMenu";

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

// change today

const Navbar: FC = (): ReactElement => {
  return (
    <nav
      className={`lg:px-32 md:px-14 px-5 h-24 bg-[#f5f7f9]  flex justify-between items-center ${roboto.className}`}
    >
      {/* kg logo */}
      <div className="cursor-pointer">
        <Link href={"/"} passHref>
          <Image
            src={logoKG}
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
                  className={`px-4  hover:text-[#0d6efd]  cursor-pointer transition-colors duration-300 ease-in-out tracking-wide  text-gray-500 text-base`}
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
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <button className="flex gap-x-2 rounded-sm shadow-md items-center  bg-[#24292D] text-white pl-3 pr-3.5 py-2 hover:bg-[#6c757d] transition-colors duration-300 ease-in-out">
          <FiPower className="w-3 stroke-[0.15em]" />
          <p className="text-sm tracking-wider font-medium">Masuk</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
