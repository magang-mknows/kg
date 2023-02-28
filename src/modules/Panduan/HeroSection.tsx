import ContentLayouts from "@/layouts/Content";
import Image from "next/image";
import React, { FC, ReactElement } from "react";

import helpCenter from "@/assets/help-center.svg";

const HeroSection: FC = (): ReactElement => {
  const dummyTopik = [
    {
      title: "Mengapa perlu apa apa",
    },
    {
      title: "daftar gimana",
    },
    {
      title: "lorem ipsum 3 lms kg itu apa",
    },
    {
      title: "m-know",
    },
    {
      title: "lorem",
    },
  ];

  return (
    <>
      <ContentLayouts className="h-[80vh] md:h-[100vh] flex flex-col items-center bg-blue-100/60">
        <div className=" pt-14 mb-6 flex flex-col items-center">
          <h1 className="md:text-5xl text-3xl font-black text-slate-800 mb-3 text-center">
            Hai, ada yang bisa kami bantu?
          </h1>
          <p className="text-sm text-slate-500 px-8 text-center">
            Cari informasi penggunaan website LMS M-Knows di sini
          </p>
        </div>
        <div className="flex justify-center  w-[23em] md:w-[30em] lg:w-[40em] flex-col items-center mb-14 md:px-20">
          <p className="font-bold text-slate-800 text-lg mb-4">Topik Populer</p>
          <div className=" flex flex-wrap gap-2 items-center justify-center">
            {dummyTopik.map((topic, index) => {
              return (
                <div
                  key={index}
                  className="bg-slate-50 text-sm hover:bg-slate-200 cursor-pointer  text-slate-800 w-fit px-7 rounded-md shadow-sm py-1.5 transition-colors ease-in-out duration-300"
                >
                  {topic.title}
                </div>
              );
            })}
            <div className="bg-blue-200 text-sm hover:bg-blue-500  hover:text-white cursor-pointer  text-blue-800 w-fit px-7 rounded-sm shadow-sm py-1.5 transition-colors ease-in-out duration-300">
              lainnya
            </div>
          </div>
        </div>
        <div>
          <Image src={helpCenter} alt="Help Center" className="h-full w-screen px-6" />
        </div>
      </ContentLayouts>
      <ContentLayouts>
        <div>card</div>
      </ContentLayouts>
    </>
  );
};

export default HeroSection;
