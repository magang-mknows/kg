import useWindowScroll from "@/hooks/Common/useWindowScroll";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import NavDropdown from "../Common/FeatureDropdown";

// image
import logoKG from "@/assets/logokg.png";
import MobileMenu from "../Common/MobileMenu";
import { BsFillMoonFill, BsPersonFill } from "react-icons/bs";
import NotificationDropdown from "../Common/NotificationDropdown";
import { featureList, navbarMenu, notifListDummy } from "@/utilities/constant";

const UpperSection: FC = () => {
  const { isScrollY } = useWindowScroll();

  return (
    <>
      <section className=" lg:px-20 md:px-10 px-5 py-6 border-b-2 border-gray-100 flex justify-between">
        {/* kg logo */}
        <Link href={"/"} passHref className="cursor-pointer">
          <Image
            src={logoKG}
            alt="Kampus Gratis Logo's"
            className={` ${
              isScrollY ? " w-[5em] md:w-[7em] lg:w-[8em]" : "w-[6.2em] md:w-[7.2em] lg:w-[8.2em]"
            } transition-all opacity-100 ease-in-out duration-200`}
          />
        </Link>
        <div className="flex gap-x-2 items-center justify-center">
          <MobileMenu list={navbarMenu} />
          <NavDropdown list={featureList} />
          <div className="bg-[#F8F6F2]  group p-3 rounded-md shadow-sm ">
            <BsFillMoonFill className="h-4 w-4 text-[#968E7E] group-hover:text-[#5dc6d4] transition-colors ease-in-out duration-300" />
          </div>
          <NotificationDropdown list={notifListDummy} />

          <div className="bg-[#F8F6F2]  group p-3 rounded-md shadow-sm ">
            <BsPersonFill className="h-4 w-4 text-[#968E7E] group-hover:text-[#5dc6d4] transition-colors ease-in-out duration-300" />
          </div>
        </div>
      </section>
    </>
  );
};

export default UpperSection;
