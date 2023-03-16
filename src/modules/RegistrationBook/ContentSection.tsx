import React, { ReactElement } from "react";
import Link from "next/link";
import Daftar from "@/assets/guide/daftar.svg";
import Image from "next/image";
import Form from "@/assets/guide/form.svg";
import Check from "@/assets/guide/check.svg";
import Login from "@/assets/guide/login.svg";

const ContentSection = (): ReactElement => {
  return (
    <div className="container mx-auto">
      <div className="title">
        <h1 className="text-[16px] font-[500]">
          Halo , silakan ikuti panduan di bawah ini apabila kamu kebingungan terkait{" "}
        </h1>
      </div>
      <div className="lg:flex mt-[34px] justify-between mb-5">
        <div>
          <div className="step-1">
            <div className="flex items-center gap-[14px]">
              <div className="w-[28px] h-[28px] rounded-full bg-[#D4D4D4] flex items-center justify-center">
                <span className="text-white">1</span>
              </div>
              <h1 className="text-black">
                Silahkan buka <span className="font-[700]">website</span>
                <span className="text-[#106FA4] font-[700] ml-1">
                  <Link href={"/"}>https://kampusgratis.id</Link>/
                </span>
              </h1>
            </div>
          </div>
          <div className="step-2 mt-[28px]">
            <div className="flex items-center gap-[14px]">
              <div className="w-[28px] h-[28px] rounded-full bg-[#D4D4D4] flex items-center justify-center">
                <span className="text-white">2</span>
              </div>
              <h1 className="text-black">
                Klik pojok kanan atas <span className="font-[700]">&lsquo;Daftar&lsquo;</span>
              </h1>
            </div>
            <Image src={Daftar} alt={""} />
          </div>
          <div className="step-3">
            <div className="flex items-center gap-[14px]">
              <div className="w-[28px] h-[28px] rounded-full bg-[#D4D4D4] flex items-center justify-center">
                <span className="text-white">3</span>
              </div>
              <h1 className="text-black">
                Silahkan masukan <span className="font-[700]"> data diri </span>
                yang diperlukan
              </h1>
            </div>
            <Image src={Form} alt={""} />
          </div>
        </div>
        <div className="lg:-mt-5">
          <div className="step-4 mt-[28px]">
            <div className="flex items-center gap-[14px]">
              <div className="w-[28px] h-[28px] rounded-full bg-[#D4D4D4] flex items-center justify-center">
                <span className="text-white">4</span>
              </div>
              <h1 className="text-black">
                Klik
                <span className="font-[700]"> centang </span>
                untuk menyetujui syarat & ketentuan
              </h1>
            </div>
            <Image src={Check} alt={""} className={"ml-[20px] mt-[20px]"} />
          </div>
          <div className="step-5 mt-[28px]">
            <div className="flex items-center gap-[14px]">
              <div className="w-[28px] h-[28px] rounded-full bg-[#D4D4D4] flex items-center justify-center">
                <span className="text-white">5</span>
              </div>
              <h1 className="text-black">
                Klik tombol
                <span className="font-[700]"> daftar </span>untuk melakukan pendaftaran akun Klik
                pojok kanan atas
              </h1>
            </div>
            <Image src={Login} alt={""} className={"ml-[20px] mt-[20px]"} />
          </div>
          <div className="step-6">
            <div className="flex items-center gap-[14px]">
              <div className="w-[28px] h-[28px] rounded-full bg-[#D4D4D4] flex items-center justify-center">
                <span className="text-white">6</span>
              </div>
              <h1 className="text-black">
                <span className="font-[700]"> Cek email </span>
                untuk melakukan verifikasi emai
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
