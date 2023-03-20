import React, { ReactElement } from "react";
import Image from "next/image";
import VideoDummy from "@/assets/guide/video-dummy.svg";
import { useGuideVideo } from "@/hooks/Guide/useVideoGuide";
import Link from "next/link";

const dummyListVideo = [
  {
    img: VideoDummy,
    title: "Cara daftar studi",
    desc: "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
  },
  {
    img: VideoDummy,
    title: "Panduan kalender",
    desc: "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
  },
  {
    img: VideoDummy,
    title: "Cara submit tugas",
    desc: "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
  },
  {
    img: VideoDummy,
    title: "Panduan lupa password",
    desc: "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
  },
  {
    img: VideoDummy,
    title: "Cara melihat nilai",
    desc: "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
  },
];


const ListVideo = (): ReactElement => {
  const { getGuideVideo } = useGuideVideo();
  return (
    <div className="w-full">
      <div className="title mb-[2px]">
        <h1 className="text-black dark:text-white font-[700] text-[20px]">Video panduan lainnya</h1>
      </div>
      {getGuideVideo.map((item, index) => {
        return (
          <Link href={item.videoId}>
            <div
              key={index}
              className="w-full bg-white dark:bg-[#232529] h-fit lg:h-[120px] rounded-[8px] shadow-sm mt-[12px]"
            >
              <div className="flex px-[10px] py-[10px] gap-[16px]">
                <Image src={item.imgVideo as string} alt={""} />
                <div>
                  <h1 className="text-[14px] font-[700] text-black dark:text-white">
                    {item.titleVideo}
                  </h1>
                  <p className="text-[12px] font-[400] text-black dark:text-white text-justify mt-[4px]">
                    {item.descVideo}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ListVideo;
