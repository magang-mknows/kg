import { ReactElement } from "react";
import Image from "next/image";
import pictureSekilasInfo from "@/assets/landing/picture-landing-sekilas-info.svg";
// import yellowSekilasInfo from "@/assets/landing/yellowInfo.svg";
// import RedSekilasInfo from "@/assets/landing/redInfo.svg";

const SekilasSection = (): ReactElement => {
  return (
    <div className="flex flex-col lg:flex-row gap-x-14 gap-y-10 w-screen h-auto lg:px-16 pl-40 mx-44 justify-center items-center pt-16">
      <div className="flex flex-col lg:w-[50%] w-screen">
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-[#262626] dark:text-white lg:text-start text-center my-2">
          Sekilas <span className="mx-2 text-[#FAB317]"> Info </span>
          Kampus Gratis
        </h1>

        <p className="pt-[50px] px-4 text-gray-600 align-center text-center lg:text-left text-[#262626] text-[15px] md:text-[17px] lg:text-[18px] dark:text-white">
          <span className="text-gray-600 text-[24px] dark:text-white font-semibold">
            Kampus Gratis
          </span>{" "}
          merupakan sistem manajemen E-learning yang mencantumkan laporan peningkatan atau progres
          pembelajaran mahasiswa layaknya seperti perguruan tinggi.{" "}
        </p>
        <p className="align-center px-4 text-gray-600 text-center text-left lg:text-left text-[#262626] text-[15px] md:text-[17px] lg:text-[18px] mt-5 dark:text-white ">
          Pengembangan platform pembelajaran ini merupakan salah satu inisiasi dari pendiri PT
          Menara Indonesia atau M-Knows Consulting, yang inginmemberikan solusi pendidikan tinggi
          yang gratis, berkualitas, berkualitas diakses siapapun khususnya kaum marginal, dan selalu
          update layaknya platform Wikipedia.
        </p>
      </div>
      <div>
        <Image src={pictureSekilasInfo} alt={"picture-sekilas-landing"} className="" />
      </div>
    </div>
  );
};

export default SekilasSection;
