import Image from "next/image";
import { FC, Fragment } from "react";

import logoBiru from "@/assets/logoBiru.png";
import MenuIcon from "./MenuIcon";

import useWindowScroll from "@/hooks/Common/useWindowScroll";
import BottomSection from "./BottomSection";
import Button from "../Common/Button";
import ThemeToggle from "../ThemeToggle";
import { Menu } from "@headlessui/react";
import { HiChatAlt2 } from "react-icons/hi";
import { MdEmojiPeople } from "react-icons/md";
import { IoAnalyticsOutline, IoBag } from "react-icons/io5";
import Link from "next/link";
import { BiCategoryAlt } from "react-icons/bi";

import { useSetRecoilState } from "recoil";
import { AuthModalOpen } from "@/stores/Common";
import MobileMenu from "../Common/MobileMenu";
import { navbarMenu } from "@/utilities/constant";

const UpperSection: FC = () => {
  const { isScrollY } = useWindowScroll();
  const setModalAUth = useSetRecoilState(AuthModalOpen);

  return (
    <Fragment>
      <section className="flex items-center h-[72px] justify-between border-b-2 px-10 md:px-14 lg:px-20  border-neutral-100">
        <Link passHref href={"/"}>
          <Image src={logoBiru} alt="Kampus Gratis's Logo" width={82} />
        </Link>
        {isScrollY && <BottomSection />}
        <section className="flex items-center gap-2 md:gap-3 ">
          <MobileMenu list={navbarMenu} />
          <MenuIcon
            icon={
              <BiCategoryAlt
                size={20}
                className="text-neutral-900 stroke-neutral-900 group-hover:text-[#106FA4] transition-colors ease-in-out duration-300"
              />
            }
          >
            <Menu.Items className="absolute right-0 top-2 origin-top-right   bg-white  shadow-md   rounded-md overflow-hidden">
              <div className="bg-yellow-200 h-[92px] w-[220px] md:w-[270px] flex gap-1 flex-col items-center justify-center text-xl">
                <h1 className="text-neutral-800">Fitur</h1>
                <p className="text-white bg-yellow-500 text-sm px-2 py-1 rounded-md shadow-sm">
                  Total 16 Fitur
                </p>
              </div>
              <div className="grid grid-cols-2 ">
                <Menu.Item
                  as="div"
                  className={
                    "flex flex-col gap-2 items-center p-4 cursor-pointer hover:bg-neutral-200 transition-all duration-300 ease-in-out"
                  }
                >
                  <HiChatAlt2 className="bg-yellow-400 text-white rounded-md p-2" size={32} />
                  <h1 className="text-[#171717] text-xs text-center">Diskusi Global</h1>
                </Menu.Item>
                <Menu.Item
                  as="div"
                  className={
                    "flex flex-col gap-2 items-center p-4 cursor-pointer hover:bg-neutral-200 transition-all duration-300 ease-in-out"
                  }
                >
                  <MdEmojiPeople className="bg-[#106FA4] text-white rounded-md p-2" size={32} />
                  <h1 className="text-[#171717] text-xs text-center">Perencanaan Karir</h1>
                </Menu.Item>
                <Menu.Item
                  as="div"
                  className={
                    "flex flex-col gap-2 items-center p-4 cursor-pointer hover:bg-neutral-200 transition-all duration-300 ease-in-out"
                  }
                >
                  <IoAnalyticsOutline
                    className="bg-green-400 text-white rounded-md p-2"
                    size={32}
                  />
                  <h1 className="text-[#171717] text-xs text-center">Analitik</h1>
                </Menu.Item>
                <Menu.Item
                  as="div"
                  className={
                    "flex flex-col gap-2 items-center p-4 cursor-pointer hover:bg-neutral-200 transition-all duration-300 ease-in-out"
                  }
                >
                  <IoBag className="bg-red-300 text-white rounded-md p-2" size={32} />
                  <h1 className="text-[#171717] text-xs text-center">Penyeluran Kerja</h1>
                </Menu.Item>
              </div>
              <div className="bg-neutral-200 hover:bg-neutral-300 cursor-pointer transition-colors ease-in-out duration-300 w-full flex items-center justify-center py-4">
                <Link href={"/"} passHref>
                  <h1 className="text-xs text-neutral-500 hover:text-neutral-400">Lihat Semua</h1>
                </Link>
              </div>
            </Menu.Items>
          </MenuIcon>
          <ThemeToggle />

          {/* before login */}
          <Button
            onClick={() => setModalAUth(true)}
            type="button"
            text={"Masuk"}
            className="hidden lg:block text-[#106FA4] border-2 border-[#106FA4] px-5 py-2 text-sm rounded-md hover:text-[#40A0C8] hover:border-[#40A0C8] transition-colors ease-in-out duration-300 shadow-sm"
          />
          <Button
            type="button"
            text={"Daftar"}
            page={"/auth/register"}
            className="hidden lg:block bg-[#106FA4] text-white border-2 border-[#106FA4] px-5 py-2 text-sm rounded-md hover:bg-[#40A0C8] hover:border-[#40A0C8] transition-colors ease-in-out duration-300 shadow-sm"
          />

          {/* after login */}
          {/* <MenuIcon
            icon={
              <BiBell
                size={20}
                className="text-neutral-900 stroke-neutral-900 group-hover:text-[#106FA4] transition-colors ease-in-out duration-300"
              />
            }
          ></MenuIcon>
          <UserIcon />
          */}
        </section>
      </section>
    </Fragment>
  );
};

export default UpperSection;
