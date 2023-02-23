import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import { useRouter } from "next/router";

import NavDropdown from "../Common/FeatureDropdown";

// image
import logoKG from "@/assets/logokg.png";
import MobileMenu from "../Common/MobileMenu";
import { BsFillMoonFill, BsPersonFill } from "react-icons/bs";
import NotificationDropdown from "../Common/NotificationDropdown";
const CombineSection: FC = () => {
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

  const featureList = [
    { link: "/", name: "Administrasi" },
    { link: "/", name: "Rencana Pelatihan" },
    { link: "/", name: "Pelatihan-ku" },
    { link: "/", name: "Nilai & Sertifikat" },
    { link: "/", name: "Penugasan" },
    { link: "/", name: "Forum Diskusi" },
    { link: "/", name: "Lainnya" },
  ];

  const notifListDummy = [
    { link: "/", name: "Lorem ipsum 1 ", time: "now" },
    { link: "/", name: "Lorem ipsum 2", time: "now" },
  ];

  const router = useRouter();
  return (
    <>
      <section className=" lg:px-20 md:px-10 px-5 py-4 border-b-2 border-gray-100 flex justify-between ">
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
            {navbarMenu.map((menu, index) => {
              return (
                <Link
                  href={menu.link}
                  passHref
                  key={index}
                  className={`${
                    router.pathname.includes(menu.link)
                      ? "bg-[#F8F6F2] text-gray-800 rounded-lg shadow-sm"
                      : "  hover:text-gray-800  text-[#968E7E] "
                  } px-5 py-2.5  text-base cursor-pointer transition-colors duration-300 ease-in-out font-medium`}
                >
                  <li>{menu.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
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

export default CombineSection;
