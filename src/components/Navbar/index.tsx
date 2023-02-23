import { FC, ReactElement } from "react";

// font
import { Roboto } from "@next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

// toogle

import useWindowScroll from "@/hooks/Common/useWindowScroll";
import UpperSection from "./UpperSection";
import BottomSection from "./BottomSection";
import CombineSection from "./CombineSection";

// nav menu list

const Navbar: FC = (): ReactElement => {
  const { isScrollY } = useWindowScroll();

  return (
    // <nav
    //   className={`${
    //     isScrollY
    //       ? "  sticky top-0 h-14 lg:h-[4.6rem] shadow-md shadow-gray-400/10 dark:shadow-gray-900"
    //       : ""
    //   } ${
    //     roboto.className
    //   } lg:px-20 md:px-10 px-5 m-auto h-16 lg:h-24 bg-[#f5f7f9] dark:bg-[#222529]  flex justify-between items-center  transition-all ease-in-out duration-300`}
    // >
    //   {/* kg logo */}
    //   <div className="cursor-pointer">
    //     <Link href={"/"} passHref>
    //       <Image
    //         src={theme === "dark" ? logoKGDark : logoKG}
    //         alt="Kampus Gratis Logo's"
    //         className={` ${
    //           isScrollY ? " w-[5em] md:w-[7em] lg:w-[8em]" : "w-[6.2em] md:w-[7.2em] lg:w-[8.2em]"
    //         } transition-all opacity-100 ease-in-out duration-200`}
    //       />
    //     </Link>
    //   </div>

    //   {/* menu link */}
    //   <div>
    //     <ul className=" lg:flex hidden">
    //       {navbarMenu.map((menu, index) => {
    //         return (
    //           <Link
    //             href={menu.link}
    //             passHref
    //             key={index}
    //             className={`${
    //               router.pathname.includes(menu.link)
    //                 ? "text-[#1d71ef] dark:text-[#2a7af2]"
    //                 : "  hover:text-[#1d71ef]  text-gray-500 dark:text-gray-400 dark:hover:text-[#2a7af2]  "
    //             } px-4 tracking-wide text-base cursor-pointer transition-colors duration-300 ease-in-out font-normal`}
    //           >
    //             <li>{menu.name}</li>
    //           </Link>
    //         );
    //       })}
    //     </ul>
    //   </div>

    //   {/* toggle and button  */}
    //   <div className="flex gap-6 items-center">
    //     <MobileMenu list={navbarMenu} />
    //     {/* toogle by Fenni */}

    //     <div onClick={handleThemeChange}>
    //       <ThemeToggle />
    //     </div>

    //     <Button
    //       text={"Masuk"}
    //       page="/auth/login"
    //       type="button"
    //       className="flex gap-x-2 rounded-md shadow-md items-center  bg-[#24292D] text-white pl-3 pr-3.5 py-1.5 hover:bg-[#6c757d] dark:bg-[#0f0f10] dark:hover:bg-[#24292D] transition-colors duration-300 ease-in-out"
    //       icon={<FiPower className="w-3 stroke-[0.15em]" />}
    //     />
    //   </div>
    // </nav>
    <nav
      className={`${roboto.className} ${
        isScrollY ? "fixed w-full top-0" : "-top-20"
      } bg-white transition-all `}
    >
      {/* upper */}
      {!isScrollY ? (
        <>
          <UpperSection />
          <BottomSection />
        </>
      ) : (
        <CombineSection />
      )}
    </nav>
  );
};

export default Navbar;
