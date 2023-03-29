import { FC, ReactElement } from "react";
import Image from "next/image";
import pictureSekilasInfo from "@/assets/landing/picture-sekilas-landing.webp";
import RedSekilasInfo from "@/assets/landing/redInfo.svg";

const SekilasSection: FC = (): ReactElement => {
  return (
    <div className="flex flex-col lg:px-20 px-0 py-24 lg:py-28 lg:flex-row w-screen h-auto">
      <div data-aos="flip-left" data-aos-delay="300" className="flex flex-col lg:w-[100%] w-screen">
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-[#262626] dark:text-white  text-center my-2">
          Sekilas <span className="mx-2 text-[#FAB317]"> Info </span>
          Kampus Gratis
        </h1>

        <p className="pt-[50px] px-4 text-gray-600 align-center text-center lg:text-left text-[#262626] text-[15px] md:text-[17px] lg:text-[18px] dark:text-white">
          <span className="text-gray-600 text-[24px] dark:text-white font-semibold">
            Kampus Gratis
          </span>{" "}
          atau disingkat KG, merupakan sistem manajemen E-learning yang mencantumkan laporan
          peningkatan atau progres pembelajaran mahasiswa layaknya seperti perguruan tinggi.{" "}
        </p>
        <p className="align-center px-4 text-gray-600 text-center text-left lg:text-left text-[#262626] text-[15px] md:text-[17px] lg:text-[18px] mt-5 dark:text-white ">
          Pengembangan platform pembelajaran ini merupakan salah satu inisiasi dari pendiri PT
          Menara Indonesia atau M-Knows Consulting, yang inginmemberikan solusi pendidikan tinggi
          yang gratis, berkualitas, berkualitas diakses siapapun khususnya kaum marginal, dan selalu
          update layaknya platform Wikipedia.
        </p>
        <Image src={RedSekilasInfo} alt={"picture-sekilas-landing"} className="my-8 mx-8" />
      </div>
      <div className="w-[100%]">
        <Image
          src={pictureSekilasInfo}
          alt={"picture-sekilas-landing"}
          className="lg:mx-10 w-[600] px-8 my-6 lg:my-0"
        />
      </div>
    </div>
  );
};

export default SekilasSection;
