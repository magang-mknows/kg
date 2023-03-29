import { FC, ReactElement, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import Loading from "@/components/Loading";
import SuspenseError from "../Common/SuspenseError";

import BgHero from "@/assets/landing/bg-hero.webp";
import BgDark from "@/assets/landing/bg-dark.webp";
import ImageLanding from "@/assets/landing/landing-img.webp";
import LandingDark from "@/assets/landing/dark.webp";
import UserKampusGratis from "@/assets/landing/mahasiswa_kampus-gratis.svg";
import HeroSkeleton from "@/components/Loading/Landing/HeroSkeleton";

const HeroSection: FC = (): ReactElement => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Loading />;
  return (
    <SuspenseError loadingFallback={<HeroSkeleton />}>
      {/* section1 */}
      <div className="flex relative flex-col h-full w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between w-screen h-full gap-y-4 lg:px-16 pl-2 lg:py-28 py-16 absolute z-40">
          <div className="w-[100%]">
            <h1 className="flex flex-col py-6 lg:text-[54px] text-3xl font-bold gap-y-4 text-center lg:text-start md:text-center text-center dark:text-white">
              Solusi Pendidikan
              <span className="lg:text-[50px] text-3xl lg:my-6 my-2">Gratis & Berkualitas</span>
            </h1>
            <p className="flex flex-col gap-y-2 text-md lg:text-start text-center lg:text-xl text-gray-500 dark:text-white">
              Platform belajar gratis pertama di Indonesia memungkinkan akses belajar yang mudah
              bagi siapa saja, tanpa terkecuali.
            </p>
            <div className="flex w-full lg:justify-start justify-center py-14 ">
              <Link href={"/auth/register"}>
                <button className="font-semibold lg:animate-none animate-bounce bg-[#3EB449] w-auto px-4 h-[40px] lg:w-[250px] lg:h-[56px] sm:w-full sm:h-[40px] text-white rounded-[8px] text-sm">
                  Coba Sekarang - Gratis
                </button>
              </Link>
            </div>
          </div>
          <div className="h-full w-screen lg:relative object-right lg:ml-44 lg:pt-0 pt-10">
            <SuspenseError loadingFallback={<Loading />}>
              <Image
                loading="eager"
                width={1000}
                height={1000}
                src={currentTheme === "light" ? ImageLanding : LandingDark}
                alt="Image Landing"
                className="z-40 select-none lg:pt-34 mb-10 pb-10 lg:w-[600px] lg:h-[480px] w-[500px] h-[500px]"
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
      </div>
    </SuspenseError>
  );
};

export default HeroSection;
