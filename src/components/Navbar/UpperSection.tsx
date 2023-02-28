import Image from "next/image";
import { FC, Fragment } from "react";
// import dynamic from "next/dynamic";

// const ToggleDarkMode = dynamic(() => import("@/components/ThemeToggle/index"), {
//   ssr: false,
// });

// icon
import { BiCategoryAlt, BiSun, BiBell } from "react-icons/bi";

import logoBiru from "@/assets/logoBiru.png";
import userIcon from "@/assets/userIcon.png";
import MenuIcon from "./MenuIcon";

import useWindowScroll from "@/hooks/Common/useWindowScroll";
import BottomSection from "./BottomSection";

const UpperSection: FC = () => {
  const { isScrollY } = useWindowScroll();

  return (
    <>
      <section className="flex items-center h-[72px] justify-between border-b-2 px-10 md:px-14 lg:px-20  border-neutral-50">
        <Image src={logoBiru} alt="Kampus Gratis's Logo" width={82} />
        {isScrollY && <BottomSection />}
        <section className="flex items-center gap-4">
          <MenuIcon
            icon={
              <BiCategoryAlt
                size={20}
                className="text-neutral-900 stroke-neutral-900 group-hover:text-[#106FA4] transition-colors ease-in-out duration-300"
              />
            }
          ></MenuIcon>
          <MenuIcon
            icon={
              <BiSun
                size={20}
                className="text-neutral-900 stroke-neutral-900 group-hover:text-[#106FA4] transition-colors ease-in-out duration-300"
              />
            }
          ></MenuIcon>
          <MenuIcon
            icon={
              <BiBell
                size={20}
                className="text-neutral-900 stroke-neutral-900 group-hover:text-[#106FA4] transition-colors ease-in-out duration-300"
              />
            }
          ></MenuIcon>

          <div className="bg-neutral-200 h-9 w-9 flex items-center justify-center overflow-hidden rounded-md cursor-pointer group">
            <Image src={userIcon} alt="User" width={100} />
          </div>
        </section>
      </section>
    </>
  );
};

export default UpperSection;
