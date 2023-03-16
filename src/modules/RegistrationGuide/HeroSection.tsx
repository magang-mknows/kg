import React, { ReactElement } from "react";
import Alert from "@/assets/guide/alert.svg";
import Image from "next/image";

const HeroSection = (): ReactElement => {
  return (
    <>
      <div className="mt-[56px]">
        <h1 className="text-center text-[20px] text-black font-[700]">Panduan pendaftaran</h1>
      </div>
      <div className="mt-[36px] bg-[#FEDBD7] w-full h-[135px] container mx-auto rounded-[8px] mb-[30px]">
        <div className="container px-[36px] pt-[28px]">
          <h1 className="text-[18px] font-[700]">Penting !</h1>
          <div className="flex mt-[10px] gap-[17px]">
            <Image src={Alert} alt={"alert"} />
            <h1 className="text-[16px] font-[300]">
              Silahkan cek email mu karena verifikasi hanya dikirimkan melalui email yang kamu
              daftarkan saja.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
