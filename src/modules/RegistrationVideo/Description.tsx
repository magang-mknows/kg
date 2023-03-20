import { videoGuideTypes } from "@/stores/Guide/type";
import React, { ReactElement } from "react";

const Description = (props:  videoGuideTypes): ReactElement => {
  const {titleVideo} = props
  return (
    <div className="bg-white dark:bg-[#232529] w-full lg:h-[269px] h-fit rounded-[8px] mt-[28px] shadow-md py-[23px] px-[46px] mb-10">
      <h1 className="text-[18px] font-[600] text-[#171717] dark:text-white h-269px ">
        {titleVideo}
      </h1>
      <p className="text-[12px] font-[400] text-[#737373] dark:text-white h-269px pt-[20px] ">
        Video ini menjelaskan tentang cara melakukan Pendaftaran Kampus Gratis. Formulir Pendaftaran
        di sini bisa berupa formulir pendaftaran seminar, workshop, sekolah, kursus, bimbel, dan
        segala bentuk formulir pendaftaran yang melibatkan pengisian data secara online.{" "}
        <span className=" mt-5 block" />
        Kelebihan dari Formulir Pendaftaran dengan Google Form ini adalah sangat fleksibel dalam
        penggunaannya, sehingga kita bisa mengaplikasikan pembuatan formulir pendaftaran untuk semua
        jenis kegiatan. Dan yang paling utama adalah kemampuan server google drive yang tentunya
        sudah tidak diragukan lagi kehandalannya.
      </p>
    </div>
  );
};

export default Description;
