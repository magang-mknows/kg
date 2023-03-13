import Card from "@/components/Common/Card";
import React, { FC, ReactElement } from "react";

import labIcon from "@/assets/dashboard/labIcon.svg";
import homeIcon from "@/assets/dashboard/homeIcon.svg";
import clockIcon from "@/assets/dashboard/clockIcon.svg";
import thropyIcon from "@/assets/dashboard/trophyIcon.svg";
import Image from "next/image";

const ResumeSection: FC = (): ReactElement => {
  const dummySidebarItems = [
    {
      src: labIcon,
      number: 37,
      title: "Kelas Terdaftar",
    },
    {
      src: homeIcon,
      number: 6,
      title: "Sertifikat",
    },
    {
      src: clockIcon,
      number: 3.7,
      title: "IPK Rata-rata",
    },
    {
      src: thropyIcon,
      number: 600,
      title: "Total Poin",
    },
  ];

  return (
    <div className="bg-white shadow-lg shadow-neutral-100 w-full md:w-[370px] rounded-md min-h-[500px] mb-9 overflow-hidden">
      <section className="text-white bg-[#106FA4] relative  px-8 pt-12 pb-28">
        <h1 className="font-bold text-2xl mb-2">Hello, Bandi</h1>
        <p className="text-base mb-2">
          <span className="text-white/75">Kamu mengambil</span>{" "}
          <span className="underline underline-offset-4 decoration-white/70">4 Mata Kuliah </span>
          <span className="text-white/75">Pada semester ini</span>
        </p>
        <section className="absolute -bottom-52  grid grid-cols-2 gap-2 lg:gap-4">
          {dummySidebarItems.map(({ src, number, title }, index) => {
            return (
              <Card
                key={index}
                hasImage={false}
                className="max-h-30  bg-neutral-100 hover:bg-neutral-200 cursor-pointer transition-colors ease-in-out duration-300 rounded-lg shadow-sm w-32 lg:w-36"
              >
                <div className="flex flex-col justify-between gap-y-4 text-neutral-500 hover:text-neutral-600 ">
                  <Image className="w-8 " src={src} alt="kelas" />
                  <section>
                    <h1 className=" text-3xl font-black">{number}</h1>
                    <h1 className="text-sm">{title}</h1>
                  </section>
                </div>
              </Card>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default ResumeSection;
