import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { MobileMenuProps } from "./types";
const genericHamburgerLine =
  "h-[2.5px] w-5 my-[2.5px] rounded-full bg-neutral-800 dark:bg-white stroke-neutral-800 transition ease transform duration-300";

const MobileMenu: FC<MobileMenuProps> = ({ list }) => {
  const [isShow, setShow] = useState(false);
  const router = useRouter();

  return (
    <div className="lg:hidden block bg-white dark:bg-[#323335] dark:hover:bg-[#30353b]  rounded-md">
      <button
        className="flex flex-col bg-neutral-200 dark:bg-[#323335] dark:hover:bg-[#30353b]  h-9 w-9  p-2 rounded-md justify-center items-center group"
        onClick={() => setShow(!isShow)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isShow && "rotate-[47deg] translate-y-1.5  opacity-100 "
          }`}
        />
        <div className={`${genericHamburgerLine} ${isShow && "opacity-0"}`} />
        <div
          className={`${genericHamburgerLine} ${
            isShow && "-rotate-[47deg] -translate-y-2 opacity-100 "
          }`}
        />
      </button>

      <div
        className={`absolute -z-50 ${
          !isShow ? "top-[50px] h-0 overflow-hidden" : "top-[72px] h-auto"
        } transition-all  ease-in-out duration-500 left-0 right-0 bg-white dark:bg-[#222529] origin-top`}
      >
        {list.map((item, index) => {
          return (
            <Link key={index} href={item.link} passHref className="">
              <div
                className={`  ${
                  router.pathname.includes(item.link)
                    ? "text-[#106FA4] font-medium "
                    : " hover:text-[#106FA4] cursor-pointer transition-colors duration-300 ease-in-out tracking-wide text-neutral-800 dark:text-white"
                } md:px-8 px-6 text-sm py-4 border-b-2 dark:border-[#373a3e4a] border-neutral-100 md:text-base dark:hover:text-primary-500`}
              >
                {item.name}
              </div>
            </Link>
          );
        })}
        <div className=" ">
          <Link
            href={"/auth/login"}
            passHref
            className="md:px-8 px-6 py-4 w-full flex items-center justify-center text-sm bg-[#106FA4]  text-white border-2 border-[#106FA4] hover:bg-[#40A0C8]   hover:border-[#40A0C8] transition-colors ease-in-out duration-300 shadow-sm"
          >
            <h1>Login</h1>
          </Link>
          <Link
            href={"/auth/login"}
            passHref
            className="md:px-8 px-6 py-4 w-full flex items-center text-primary-500 justify-center text-sm border-b-2 border-[#106FA4] hover:bg-neutral-100 transition-colors ease-in-out duration-300 shadow-sm dark:text-white dark:border-[#0c59824f] dark:hover:bg-[#181a1c] "
          >
            <h1>Register</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
