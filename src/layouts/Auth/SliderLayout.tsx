import { FC, ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import Slide1 from "@/assets/auth/slide-1.svg";
import Slide2 from "@/assets/auth/slide-2.svg";
import Slide3 from "@/assets/auth/slide-3.svg";

const SliderLayout: FC = (): ReactElement => {
  const [slider, Setslider] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      Setslider(slider + 1);
    }, 3000);
    return () => {
      slider === 3 ? Setslider(1) : "";
    };
  }, [slider]);
  return (
    <div className="hidden lg:flex flex-col justify-center items-center w-full h-auto p-6">
      {slider === 1 ? (
        <Image
          src={Slide1}
          width={354}
          height={354}
          loading="eager"
          alt={"Auth"}
          className="transition-all"
        />
      ) : slider === 2 ? (
        <Image
          src={Slide2}
          width={354}
          height={354}
          loading="eager"
          alt={"Auth"}
          className="transition-all"
        />
      ) : slider === 3 ? (
        <Image
          src={Slide3}
          width={354}
          height={354}
          loading="eager"
          alt={"Auth"}
          className="transition-all"
        />
      ) : (
        ""
      )}
      {slider === 1 ? (
        <section>
          <div className="text-[#171717] text-[27px] font-[700]">
            Selamat Datang di Kampus Gratis
          </div>
          <div className="text-[#737373] text-[16px] font-[500] text-center">
            Platform belajar gratis pertama di Indonesia, belajar <br /> mudah dengan kampus gratis
            bisa diakses siapapun <br /> khususnya kaum marginal
          </div>
        </section>
      ) : slider === 2 ? (
        <section>
          <div className="text-[#171717] text-[27px] font-[700]">
            Solusi Pendidikan Gratis & Berkualitas
          </div>
          <div className="text-[#737373] text-[16px] font-[500] text-center">
            Kamu bisa raih jenjang pendidikan yang cemerlang tanpa <br /> perlu mengeluarkan biaya
            sedikitpun
          </div>
        </section>
      ) : slider === 3 ? (
        <section>
          <div className="text-[#171717] text-[27px] font-[700]">
            Terdapat 16 fitur yang membantu kamu
          </div>
          <div className="text-[#737373] text-[16px] font-[500] text-center">
            Dibimbing oleh mentor yang profesional, Dukungan <br /> untuk karir masa depan
          </div>
        </section>
      ) : (
        ""
      )}
      <div className="flex justify-center gap-[15px] mt-[40px]">
        <button onClick={() => (slider != 1 ? Setslider(1) : "")}>
          <div
            className={`${
              slider == 1 ? "w-12 bg-primary-500" : " w-3 "
            } h-3  transition-all rounded-full bg-neutral-300`}
          ></div>
        </button>
        <button onClick={() => (slider != 2 ? Setslider(2) : "")}>
          <div
            className={`${
              slider == 2 ? "w-12 bg-primary-500" : " w-3 "
            } h-3  transition-all rounded-full bg-neutral-300`}
          ></div>
        </button>
        <button onClick={() => (slider != 3 ? Setslider(3) : "")}>
          <div
            className={`${
              slider == 3 ? "w-12 bg-primary-500" : " w-3 "
            } h-3  transition-all rounded-full bg-neutral-300`}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default SliderLayout;
