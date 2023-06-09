import { FC, ReactElement, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import Loading from "@/components/Loading";
import SuspenseError from "../Common/SuspenseError";

import BgHero from "@/assets/landing/bg-hero.webp";
import BgDark from "@/assets/landing/bg-dark.webp";
import ImageLanding from "@/assets/landing/bg-landing.svg";
import LandingDark from "@/assets/landing/dark.webp";

const HeroSection: FC = (): ReactElement => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Loading />;
  return (
    <div className="flex relative flex-col h-full w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-start lg:justify-between w-screen h-full gap-y-4 lg:px-14 pl-2 lg:py-24 py-16 absolute z-40">
        <div>
          <h1 className="flex flex-col lg:text-[42px] text-[36px] font-bold text-center lg:text-start md:text-center text-center dark:text-white py-4">
            SARJANA Gratis & Berkualitas <span> Dengan Konversi SKS : </span>
          </h1>
          <div className="lg:text-[26px] text-[22px] lg:text-start text-center font-semibold text-blue-500">
            Kuliah, Pelatihan, Magang & Pengalaman Kerja
          </div>
          <p className="flex flex-col py-8 text-lg lg:text-start text-center lg:text-xl text-gray-500 dark:text-white">
            Platform Pendidikan Tinggi Gratis Pertama di Indonesia. Dengan akses belajar yang mudah
            bagi semua tanpa syarat.
          </p>

          <div className="flex w-full justify-center py-12 ">
            <Link href={"/auth/register"}>
              <button className="font-semibold animate-bounce bg-[#3EB449] w-auto px-4 h-[40px] lg:w-[250px] lg:h-[56px] sm:w-full sm:h-[40px] text-white rounded-[8px] text-sm">
                Coba Sekarang - Gratis
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:flex hidden h-full w-auto lg:relative object-right lg:ml-44 ">
          <SuspenseError loadingFallback={<Loading />}>
            <Image
              loading="eager"
              src={currentTheme === "light" ? ImageLanding : LandingDark}
              alt="Image Landing"
              className="z-40 select-none lg:w-full lg:h-full "
            />
          </SuspenseError>
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
  );
};

export default HeroSection;
