import { FC, ReactElement } from "react";
import { FaUserTie } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { BsAlarmFill } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import AboutLanding from "@/assets/about-landing.jpg";
import Image from "next/image";
import MainLayouts from "@/layouts/Main";
import ContentLayouts from "@/layouts/Content";
import Card from "@/components/Common/Card";

const AboutSection: FC = (): ReactElement => {
  return (
    <MainLayouts className="grid grid-col-1 lg:grid-cols-1 md:grid-cols-1 gap-y-5 gap-x-10 py-5 px-[10%] h-screen">
      <ContentLayouts className="grid grid-cols-1 text-[#f9feff] md:grid-cols-1 lg:grid-cols-5 dark:text-[#f9feff] gap-6">
        {/* image */}
        <div className="lg:col-span-2 ">
          <h1 className="text-2xl lg:text-3xl md:text-3xl font-bold mb-4 mt-4  text-[#000000] dark:text-[#f9feff] ">
            Satu Aplikasi Untuk <span className="text-[#066ac9]">Beragam Kebutuhan</span>
          </h1>
          <Image
            src={AboutLanding}
            alt="about-landing"
            className="object-cover h-auto w-full rounded-md "
          />
        </div>

        {/* card about */}
        <div className="lg:col-span-3 md:w-auto">
          <div className="grid grid-col-1 grid-flow-row md:grid-flow-col md:grid-cols-2 ">
            <Card
              className={"w-full h-full p-4"}
              hasImage={false}
              icon={
                <FaUserTie className="text-2xl text-[#fd7e14] inline-block bg-[#fff2e7] dark:bg-[#392e27] rounded-md p-4 w-14 h-14" />
              }
              titleStyle={"text-xl font-bold mt-1"}
              title={"Online Learning"}
              children={
                <p className="text-gray-500 mt-2">
                  Mulailah meningkatkan pengetahuan dan kemampuan Anda melalui fitur online learning
                  kami yang menawarkan pengalaman belajar yang interaktif dan menyenangkan.
                </p>
              }
            />
            <Card
              className={"w-full h-full p-4"}
              hasImage={false}
              icon={
                <FaBook className="text-2xl text-[#17a2b8]  inline-block bg-[#e7f6f8] dark:bg-[#213238] rounded-md p-4 w-14 h-14" />
              }
              titleStyle={"text-xl font-bold mt-1"}
              title={"Gamifikasi"}
              children={
                <p className="text-gray-500 mt-2">
                  Fitur gamifikasi adalah sebuah strategi yang mengadaptasi elemen permainan ke
                  dalam konteks non-permainan untuk meningkatkan motivasi, keterlibatan, dan
                  kesenangan pengguna.
                </p>
              }
            />
          </div>

          <div className="grid grid-col-1 grid-flow-row md:grid-flow-col lg:grid-cols-2 md:grid-cols-2">
            <Card
              className={"w-full h-full p-4"}
              hasImage={false}
              icon={
                <BsAlarmFill className="text-2xl text-[#0cbc87] inline-block bg-[#e6f8f3] dark:bg-[#203433] rounded-md p-4 w-14 h-14" />
              }
              titleStyle={"text-xl font-bold mt-1"}
              title={"E-Serifikat"}
              children={
                <p className="text-gray-500 mt-2">
                  Dapatkan pengakuan resmi atas kemampuan dan pengetahuan Anda melalui fitur
                  E-sertifikat kami yang memberikan sertifikat berkualitas tinggi dan dapat diakses
                  kapan saja, di mana saja.
                </p>
              }
            />
            <Card
              className={"w-full h-full p-4"}
              hasImage={false}
              icon={
                <FaUniversity className="text-2xl text-[#d6293e] inline-block bg-[#fbe9eb] dark:bg-[#35252b] rounded-md p-4 w-14 h-14" />
              }
              titleStyle={"text-xl font-bold mt-1"}
              title={"Konten Relevan"}
              children={
                <p className="text-gray-500 mt-2">
                  Pelajari topik yang Anda butuhkan dengan fitur konten yang relevan kami, yang
                  menyediakan materi terkini dan terverifikasi untuk membantu Anda mencapai tujuan
                  belajar Anda.
                </p>
              }
            />
          </div>
        </div>
      </ContentLayouts>
    </MainLayouts>
  );
};

export default AboutSection;
