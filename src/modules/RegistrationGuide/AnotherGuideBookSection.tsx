import React, { ReactElement } from "react";
import Book from "@/assets/guide/book.svg";
import Image from "next/image";

const dummyGuide = [
  { title: "Panduan pendaftaran", img: Book },
  { title: "Panduan  perencanaan karir", img: Book },
  { title: "Panduan masuk", img: Book },
];

const AnotherGuideBookSection = (): ReactElement => {
  return (
    <>
      <div className="w-full container mx-auto">
        <div className="title">
          <h1 className="font-[700] text-[16px]">Buku panduan lainnya</h1>
        </div>
        <div className="mt-[24px] mb-[54px]">
          {dummyGuide.map((item, index) => {
            return (
              <div
                key={index}
                className="content bg-white  w-full h-[54px] shadow-lg rounded-[8px] flex justify-between items-center p-[24px] mt-[16px]"
              >
                <h1 className="font-[600] text-[16px]">{item.title}</h1>
                <Image src={item.img} alt={"book"} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AnotherGuideBookSection;
