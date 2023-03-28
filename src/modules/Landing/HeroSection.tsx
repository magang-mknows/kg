import { FC, ReactElement, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import Loading from "@/components/Loading";
import SuspenseError from "../Common/SuspenseError";

import BgHero from "@/assets/landing/bg-hero.svg";
import BgDark from "@/assets/landing/bg-dark.webp";
import ImageLanding from "@/assets/landing/landing-img.svg";
import LandingDark from "@/assets/landing/dark.svg";
import UserKampusGratis from "@/assets/landing/mahasiswa_kampus-gratis.svg";

const HeroSection: FC = (): ReactElement => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Loading />;
  return (
    <SuspenseError loadingFallback={<Loading />}>
      {/* section1 */}
      <div className="flex relative flex-col h-500px w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between w-full h-auto gap-y-4 lg:px-20 pl-2 lg:py-28 py-16 absolute z-40">
          <div>
            <h1 className="flex flex-col py-6 lg:text-6xl text-3xl font-bold gap-y-4 text-center lg:text-start md:text-start dark:text-white">
              Solusi Pendidikan <br />
              <span>Gratis dan Berkualitas</span>
            </h1>
            <p className="flex flex-col gap-y-2 text-md lg:text-start text-center lg:text-xl text-gray-500">
              Platform belajar gratis pertama di Indonesia memungkinkan akses <br />
              <span>belajar yang mudah bagi siapa saja, tanpa terkecuali.</span>
            </p>
            <div className="flex w-full lg:justify-start justify-center py-10 ">
              <Link href={"/auth/register"}>
                <button className="font-semibold lg:animate-none animate-bounce bg-[#3EB449] w-auto px-4 h-[40px] lg:w-[250px] lg:h-[56px] sm:w-full sm:h-[40px] text-white rounded-[8px] text-sm">
                  Coba Sekarang - Gratis
                </button>
              </Link>
            </div>
          </div>
          <div className="h-full">
            <SuspenseError loadingFallback={<Loading />}>
              <Image
                loading="eager"
                width={1000}
                height={1000}
                src={currentTheme === "light" ? ImageLanding : LandingDark}
                alt="Image Landing"
                className="z-40 select-none lg:pt-24 lg:w-[600px] lg:h-[600px] w-[500px] h-[1000px]"
              />
            </SuspenseError>
            <div className="flex flex-col shadow-lg select-none items-center bg-white lg:w-[320px] w-[230px] lg:h-[131px] md:w-[260px] sm:w-[240px] rounded-lg mb-2 z-20 relative bottom-40 lg:right-14 px-2">
              <div className="font-semibold pt-6 dark:text-black">Mahasiswa Kampus Gratis</div>
              <div className="flex flex-row py-2 items-start">
                <SuspenseError loadingFallback={<Loading />}>
                  <Image
                    src={UserKampusGratis}
                    alt="User Kampus Gratis"
                    className="select-none w-[60%] lg:w-[80%] md:w-[60%]"
                  ></Image>
                </SuspenseError>
                <div className="flex flex-col">
                  <span className="text-pink-400 font-bold ">2185+</span>
                  <span className="text-black font-semibold">Mahasiswa</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bgHero */}
        <div className="left-0 right-0 bottom-0 top-0 w-auto h-screen">
          <Image
            alt="bg-hero"
            className="h-full z-0 w-full object-cover bg-opacity-100 dark:bg-opacity-0"
            src={currentTheme === "light" ? BgHero : BgDark}
            width={1000}
            height={1000}
            loading="eager"
          />
        </div>
        {/* picture */}
        {/* <div className="flex lg:absolute h-full w-full lg:justify-end justiy-start items-start lg:items-end lg:py-1 lg:mt-6 mx-6 lg:pt-24 pt-1 pr-20">
          <div>
            <SuspenseError loadingFallback={<Loading />}>
              <Image
                loading="eager"
                width={1000}
                height={1000}
                src={currentTheme === "light" ? ImageLanding : LandingDark}
                alt="Image Landing"
                className="z-20 select-none lg:pt-24 lg:w-[600px] lg:h-[600px] w-[500px] h-[600px]"
              />
            </SuspenseError>
            <div className="flex flex-col shadow-lg select-none items-center bg-white lg:w-[320px] w-[230px] lg:h-[131px] md:w-[260px] sm:w-[240px] rounded-lg mb-2 z-20 relative bottom-40 lg:right-14 px-2">
              <div className="font-semibold pt-6 dark:text-black">Mahasiswa Kampus Gratis</div>
              <div className="flex flex-row py-2 items-start">
                <SuspenseError loadingFallback={<Loading />}>
                  <Image
                    src={UserKampusGratis}
                    alt="User Kampus Gratis"
                    className="select-none w-[60%] lg:w-[80%] md:w-[60%]"
                  ></Image>
                </SuspenseError>
                <div className="flex flex-col">
                  <span className="text-pink-400 font-bold ">2185+</span>
                  <span className="text-black font-semibold">Mahasiswa</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </SuspenseError>
  );
};

export default HeroSection;
