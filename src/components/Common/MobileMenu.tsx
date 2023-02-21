import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
const genericHamburgerLine = `h-[2.5px] w-6 my-[2.5px] rounded-full bg-[#24292D] dark:bg-[#a1a1a8] transition ease transform duration-300`;

const MobileMenu = ({
  list,
}: {
  list: Array<{
    name: string;
    link: string;
  }>;
}) => {
  const [isShow, setShow] = useState(false);
  const router = useRouter();

  return (
    <div className="lg:hidden block">
      <button
        className="flex flex-col rounded justify-center items-center group"
        onClick={() => setShow(!isShow)}
      >
        <div
          className={`${genericHamburgerLine} ${
            !isShow && "rotate-45 translate-y-2  opacity-100 "
          }`}
        />
        <div className={`${genericHamburgerLine} ${!isShow && "opacity-0"}`} />
        <div
          className={`${genericHamburgerLine} ${
            !isShow && "-rotate-45 -translate-y-2 opacity-100 "
          }`}
        />
      </button>

      <div
        className={`absolute  left-0 md:px-14 px-5 ${
          isShow ? "top-24 w-0 h-0 overflow-hidden" : " w-full h-64 top-24"
        } transition-all ease-in-out duration-500  bg-[#ffffff] dark:bg-[#0f0f10] origin-top`}
      >
        {list.map((list, index) => {
          return (
            <div
              key={index}
              className={`border-b-2 border-b-gray-50 dark:border-b-gray-50/20 p-4 hover:text-[#0d6efd]  cursor-pointer transition-colors duration-300 ease-in-out tracking-wide text-gray-500 dark:text-gray-400 dark:hover:text-[#0d6efd] text-base ${
                router.pathname == list.link ? "text-[#0d6efd] dark:text-[#0d6efd] " : ""
              }`}
            >
              <Link href={list.link} passHref>
                {list.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
