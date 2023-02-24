import Image from "next/image";
import Link from "next/link";
import { FC, Suspense } from "react";
import dynamic from "next/dynamic";

import FeatureDropdown from "../Common/FeatureDropdown";
const ToggleDarkMode = dynamic(() => import("@/components/ThemeToggle/index"), {
  ssr: false,
});

// image
import logoKG from "@/assets/logokg.png";
import logoKGDark from "@/assets/logokg-dark.png";
import MobileMenu from "../Common/MobileMenu";
import { BsPersonFill } from "react-icons/bs";
import NotificationDropdown from "../Common/NotificationDropdown";
import { featureList, navbarMenu, notifListDummy } from "@/utilities/constant";
import { useTheme } from "next-themes";

const UpperSection: FC = () => {
  const { theme, systemTheme } = useTheme();

  return (
    <>
      <section className=" lg:px-20 md:px-10 px-5 py-4 border-b-[0.2px] dark:border-[#1B1B29] border-gray-100 flex justify-between items-center dark:bg-[#161514]">
        {/* kg logo's*/}
        <Link href={"/"} passHref className="cursor-pointer">
          <Image
            src={theme === "light" ? logoKG : systemTheme === "light" ? logoKG : logoKGDark}
            alt="Kampus Gratis Logo's"
            className="transition-all opacity-100 ease-in-out duration-200 w-[5em] md:w-[7em] lg:w-[8em] "
          />
        </Link>
        <div className="flex gap-x-2 items-center justify-center">
          <MobileMenu list={navbarMenu} />
          <FeatureDropdown list={featureList} />
          <Suspense fallback="loading..">
            <ToggleDarkMode />
          </Suspense>
          <NotificationDropdown list={notifListDummy} />

          <div className="bg-[#F8F6F2] dark:bg-[#161514]  dark:border-[0.2px] dark:border-[#41403E]   group p-3 rounded-md shadow-sm ">
            <BsPersonFill className="h-4 w-4 text-[#968E7E] group-hover:text-[#5dc6d4] transition-colors ease-in-out duration-300" />
          </div>
        </div>
      </section>
    </>
  );
};

export default UpperSection;
