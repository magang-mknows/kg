import Link from "next/link";
import React, { useState } from "react";
const genericHamburgerLine = `h-[2.5px] w-6 my-[2.5px] rounded-full bg-[#24292D] transition ease transform duration-300`;

const MobileMenu = ({
  list,
}: {
  list: Array<{
    name: string;
    link: string;
  }>;
}) => {
  const [isShow, setShow] = useState(false);

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
        className={`absolute  left-0 md:px-14 px-5 mt-1 ${
          isShow ? "top-20 h-0 overflow-hidden" : " w-full h-max top-20"
        } transition-all ease-in-out duration-300  bg-[#ffffff] origin-top`}
      >
        {list.map((list, index) => {
          return (
            <div
              key={index}
              className="border-b-2 border-b-gray-100/80 p-4 hover:text-[#0d6efd]  cursor-pointer transition-colors duration-300 ease-in-out tracking-wide text-gray-500 text-base"
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
