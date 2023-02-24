import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import NavDropdown from "../Common/FeatureDropdown";
import ToggleDarkMode from "@/components/ThemeToggle";

// image
import logoKG from "@/assets/logokg.png";
import MobileMenu from "../Common/MobileMenu";
import { BsPersonFill } from "react-icons/bs";
import NotificationDropdown from "../Common/NotificationDropdown";
import { featureList, navbarMenu, notifListDummy } from "@/utilities/constant";
import NavMenu from "../Common/NavMenu";
const CombineSection: FC = () => {
  return (
    <>
      <section className=" lg:px-20 md:px-10 items-center px-5 py-4 border-b-2 border-gray-100 flex justify-between ">
        {/* kg logo */}
        <Link href={"/"} passHref className="cursor-pointer">
          <Image
            src={logoKG}
            alt="Kampus Gratis Logo's"
            className="w-[6.2em] md:w-[7.2em] lg:w-[8.2em]"
          />
        </Link>
        <div className="hidden lg:block">
          <ul className=" flex gap-x-4">
            <NavMenu list={navbarMenu} />
          </ul>
        </div>
        <div className="flex gap-x-2 items-center justify-center">
          <MobileMenu list={navbarMenu} />
          <NavDropdown list={featureList} />
          <ToggleDarkMode />
          <NotificationDropdown list={notifListDummy} />

          <div className="bg-[#F8F6F2]  group p-3 rounded-md shadow-sm ">
            <BsPersonFill className="h-4 w-4 text-[#968E7E] group-hover:text-[#5dc6d4] transition-colors ease-in-out duration-300" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CombineSection;
