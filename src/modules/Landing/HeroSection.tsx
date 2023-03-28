import { FC, ReactElement, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import ContentLayouts from "@/layouts/Content";
import SuspenseError from "../Common/SuspenseError";

// asset
import Loading from "@/components/Loading";
import ImageLanding from "@/assets/landing/landing-img.svg";
import LandingDark from "@/assets/landing/dark.svg";
import UserKampusGratis from "@/assets/landing/mahasiswa_kampus-gratis.svg";
import IconHero1 from "@/assets/landing/icon-hero1.svg";
import IconHero2 from "@/assets/landing/icon-hero2.svg";
import IconHero3 from "@/assets/landing/icon-hero3.svg";
import Link from "next/link";

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
      <div className="lg:px-10 px-2">
        <div className="flex flex-col bg-gray-100 dark:bg-gray-900 justify-between w-full lg:items-start items-center lg:px-44 md:px-10 px-60 py-20 md:py-28 lg:py-28 lg:flex-row md:items-center">
          <ContentLayouts className="w-full  dark:text-white">
            <div className="flex flex-col gap-y-4 ">
              <div className="lg:flex-col font-bold space-y-4 text-3xl md:text-5xl lg:text-6xl  w-full">
                <div>
                  <h1 className="text-center lg:text-start md:text-start">Solusi Pendidikan</h1>
                </div>
                <div>
                  <h1 className="text-center lg:text-start md:text-start">Gratis & Berkualitas</h1>
                </div>
              </div>
              <p className="lg:text-xl text-md px-4 my-4 text-[#525252] lg:text-start md:text-start text-center dark:text-white">
                Platform belajar gratis pertama di Indonesia memungkinkan akses belajar yang mudah
                bagi siapa saja, tanpa terkecuali.
              </p>
              <div className="w-full px-10">
                <Link href={"/auth/register"}>
                  <button className="font-semibold bg-[#3EB449] w-full h-[40px] lg:w-[250px] lg:h-[56px] sm:w-full sm:h-[40px] text-white rounded-[8px] text-sm">
                    Coba Sekarang - Gratis
                  </button>
                </Link>
              </div>
            </div>
          </ContentLayouts>

          <ContentLayouts className="sm:flex-col md:flex-col w-full xl:mt-0 lg:mt-[-80px] md:mt-[20px] sm:mt-[20px] xs:mt-[-100px] md:justify-start sm:justify-start xs:justify-start ">
            <div>
              <SuspenseError loadingFallback={<Loading />}>
                <Image
                  src={currentTheme === "light" ? ImageLanding : LandingDark}
                  alt="Image Landing"
                  className="z-10 select-none lg:w-[680px] lg:h-[500px] md:w-[600px] md:h-[450px] w-[340px] h-[400px] sm:w-[400px] sm:h-[400px]"
                />
              </SuspenseError>
              <div className="flex flex-col select-none items-center bg-white lg:w-[320px] w-[230px] lg:h-[131px] md:w-[260px] sm:w-[240px] rounded-lg mb-2 z-20 relative bottom-40 lg:right-14 px-2">
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
          </ContentLayouts>
        </div>
      </div>

      <div className="flex flex-col relative md:flex-row xl:flex-row lg:flex-row w-full justify-center lg:justify-between bg-[#106FA4] h-[300px] md:h-[100px] lg:h-[140px] mt-[-220px] xl:mt-[-275px] lg:mt-[-275px] z-[100%] lg:px-44 font-normal items-center">
        <div className="flex flex-row my-4 lg:my-8 mx-6">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] xl:w-[80px] xl:h-[80px]">
            <Image
              src={IconHero1}
              alt="icon hero1"
              className="relative ml-4 lg:ml-6 lg:w-[40%] lg:h-[100%] w-[50%] h-[100%] flex items-center justify-center"
            />
          </div>
          <div className="flex flex-col text-white text-[16px] lg:text-[20px] my-3 ml-28">
            <div>Insturktur</div>
            <div>Profesional</div>
          </div>
        </div>
        <div className="flex flex-row my-4 lg:my-8 mx-6">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] xl:w-[80px] xl:h-[80px]">
            <Image
              src={IconHero2}
              alt="icon hero1"
              className="relative px-4 w-[100%] h-[100%] flex items-center justify-center"
            />
          </div>
          <div className="flex flex-col text-white text-[16px] lg:text-[20px] my-3 ml-28">
            <div>Sertifikasi</div>
            <div>Online</div>
          </div>
        </div>
        <div className="flex flex-row my-4 lg:my-8 mx-6">
          <div className="rounded-full bg-white bg-opacity-[10%] absolute w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] xl:w-[80px] xl:h-[80px]">
            <Image
              src={IconHero3}
              alt="icon hero1"
              className="relative px-4 w-[100%] h-[100%] flex items-center justify-center"
            />
          </div>
          <div className="flex flex-col text-white text-[16px] lg:text-[20px] my-3 ml-28">
            <div>6000</div>
            <div>Peserta</div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 h-[30] w-full pt-20"></div>
    </SuspenseError>
  );
};

export default HeroSection;
