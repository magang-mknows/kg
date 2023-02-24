import useWindowScroll from "@/hooks/Common/useWindowScroll";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { MobileMenuProps } from "./types";
const genericHamburgerLine =
  "h-[2.5px] w-6 my-[2.5px] rounded-full bg-[#968E7E] bg-[#a1a1a8] transition ease transform duration-300";

const MobileMenu: FC<MobileMenuProps> = ({ list }) => {
  const [isShow, setShow] = useState(false);
  const router = useRouter();

  const { isScrollY } = useWindowScroll();

  return (
    <div className="lg:hidden block">
      <button
        className="flex flex-col bg-[#F8F6F2]  p-2 rounded-md justify-center items-center group"
        onClick={() => setShow(!isShow)}
      >
        <div
          className={`${genericHamburgerLine} ${isShow && "rotate-45 translate-y-2  opacity-100 "}`}
        />
        <div className={`${genericHamburgerLine} ${isShow && "opacity-0"}`} />
        <div
          className={`${genericHamburgerLine} ${
            isShow && "-rotate-45 -translate-y-2 opacity-100 "
          }`}
        />
      </button>

      <div
        className={`absolute top-16 lg:top-24 ${isScrollY ? "mt-5" : "mt-8"} ${
          !isShow ? "right-[100%]" : "right-0"
        } transition-all ease-in-out duration-500 w-full  bg-[#ffffff] origin-top`}
      >
        {list.map((item, index) => {
          return (
            <div key={index} className="border-b-2 border-b-gray-50 border-b-gray-50/10 pt-3 pb-4">
              <Link
                href={item.link}
                passHref
                className={`  ${
                  router.pathname.includes(item.link)
                    ? "text-[#968E7E]"
                    : " hover:text-[#1d71ef]   cursor-pointer transition-colors duration-300 ease-in-out tracking-wide text-gray-500 text-base"
                }md:px-14 px-10 `}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
