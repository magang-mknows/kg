import Image from "next/image";
import { FC, ReactElement, useEffect, useState } from "react";

import logoBiru from "@/assets/navbar/logoBiru.png";
import logoKgDark from "@/assets/navbar/logokg-dark.png";
import MenuIcon from "./MenuIcon";

import useWindowScroll from "@/hooks/Common/useWindowScroll";
import BottomSection from "./BottomSection";
import Button from "../Common/Button";
import { Menu } from "@headlessui/react";
import { HiChatAlt2 } from "react-icons/hi";
import { MdEmojiPeople } from "react-icons/md";
import { IoAnalyticsOutline, IoBag } from "react-icons/io5";
import Link from "next/link";
import { BiCategoryAlt } from "react-icons/bi";

import { navbarMenu } from "@/utilities/constant";

import ThemeToggle from "@/components/ThemeToggle/index";
import MobileMenu from "@/components/Common/MobileMenu";
import { useLoginModal } from "@/hooks/Auth/useLoginModal";
import { useTheme } from "next-themes";
import SuspenseError from "@/modules/Common/SuspenseError";
import Loading from "../Loading";

const UpperSection: FC = (): ReactElement => {
  const { isScrollY } = useWindowScroll();
  const { setLoginModal } = useLoginModal();

  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Loading />;

  return (
    <SuspenseError>
      <section className="flex items-center z-[9999] h-[72px] justify-between border-b-2 px-6 md:px-8 lg:px-10  border-neutral-100 dark:border-[#373a3e4a]">
        <Link passHref href={"/"}>
          <Image
            src={currentTheme === "dark" ? logoKgDark : logoBiru}
            alt="Kampus Gratis's Logo"
            width={82}
            priority
            className="w-[60px] md:w-[65px] lg:w-[80px] w-auto h-auto"
          />
        </Link>
        {isScrollY === "onSticky" && <BottomSection className="dark:bg-transparent px-2" />}
        <section className="flex items-center gap-2 md:gap-3 ">
          <MobileMenu list={navbarMenu} />
          <MenuIcon
            icon={
              <BiCategoryAlt
                size={20}
                className="text-neutral-900 dark:text-white dark:hover:text-primary-500 stroke-neutral-900 group-hover:text-neutral-300 transition-colors ease-in-out duration-300"
              />
            }
          >
            <Menu.Items className="absolute right-0 top-2 origin-top-right   bg-white   shadow-md   rounded-md overflow-hidden">
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
                <Link href={"/semua-fitur"} passHref>
                  <h1 className="text-xs text-neutral-500 hover:text-neutral-400">Lihat Semua</h1>
                </Link>
              </div>
            </Menu.Items>
          </MenuIcon>
          <ThemeToggle />

          {/* before login */}
          <Button
            onClick={() => setLoginModal(true)}
            type="button"
            text={"Masuk"}
            className="hidden lg:block text-[#106FA4] dark:text-white dark:border-white/20 dark:hover:bg-neutral-700/40 border-2 border-[#106FA4] px-5 py-2 text-sm rounded-md hover:text-[#40A0C8] hover:border-[#40A0C8] transition-colors ease-in-out duration-300 shadow-sm"
          />
          <Button
            type="button"
            text={"Daftar"}
            page={"/auth/register"}
            className="hidden lg:block bg-[#106FA4] text-white border-2 border-[#106FA4] px-5 py-2 text-sm rounded-md hover:bg-[#40A0C8] hover:border-[#40A0C8] transition-colors ease-in-out duration-300 shadow-sm dark:bg-[#323335] dark:hover:bg-[#30353b] dark:border-[#30353b] "
          />
        </section>
      </section>
    </SuspenseError>
  );
};

export default UpperSection;
