import React, { ReactElement } from "react";
import Video from "@/assets/guide/video.svg";
import Card from "@/components/Common/Card";

const dummyGuide = [
  {
    title: "Panduan Pendaftaran",
    description:
      "Video ini menjelaskan tentang cara melakukan Pendaftaran Kampus Gratis. Formulir Pendaftaran di sini bisa berupa formulir pendaftaran seminar, workshop, sekolah, kursus, bimbel, dan segala bentuk formulir pendaftaran yang melibatkan pengisian data secara online. Kelebihan dari Formulir Pendaftaran dengan Google Form ini adalah sangat fleksibel dalam penggunaannya, sehingga kita bisa mengaplikasikan pembuatan formulir pendaftaran untuk semua jenis kegiatan. Dan yang paling utama adalah kemampuan server google drive yang tentunya sudah tidak diragukan lagi kehandalannya.",
    video: Video,
  },
  {
    title: "Panduan masuk",
    description:
      "Video ini menjelaskan tentang cara melakukan Pendaftaran Kampus Gratis. Formulir Pendaftaran di sini bisa berupa formulir pendaftaran seminar, workshop, sekolah, kursus, bimbel, dan segala bentuk formulir pendaftaran yang melibatkan pengisian data secara online. Kelebihan dari Formulir Pendaftaran dengan Google Form ini adalah sangat fleksibel dalam penggunaannya, sehingga kita bisa mengaplikasikan pembuatan formulir pendaftaran untuk semua jenis kegiatan. Dan yang paling utama adalah kemampuan server google drive yang tentunya sudah tidak diragukan lagi kehandalannya.",
    video: Video,
  },
  {
    title: "Bagaimana caranya jika mengalami kesulitan",
    description:
      "Video ini menjelaskan tentang cara melakukan Pendaftaran Kampus Gratis. Formulir Pendaftaran di sini bisa berupa formulir pendaftaran seminar, workshop, sekolah, kursus, bimbel, dan segala bentuk formulir pendaftaran yang melibatkan pengisian data secara online. Kelebihan dari Formulir Pendaftaran dengan Google Form ini adalah sangat fleksibel dalam penggunaannya, sehingga kita bisa mengaplikasikan pembuatan formulir pendaftaran untuk semua jenis kegiatan. Dan yang paling utama adalah kemampuan server google drive yang tentunya sudah tidak diragukan lagi kehandalannya.",
    video: Video,
  },
  {
    title: "Cara mendaftar studiku",
    description:
      "Video ini menjelaskan tentang cara melakukan Pendaftaran Kampus Gratis. Formulir Pendaftaran di sini bisa berupa formulir pendaftaran seminar, workshop, sekolah, kursus, bimbel, dan segala bentuk formulir pendaftaran yang melibatkan pengisian data secara online. Kelebihan dari Formulir Pendaftaran dengan Google Form ini adalah sangat fleksibel dalam penggunaannya, sehingga kita bisa mengaplikasikan pembuatan formulir pendaftaran untuk semua jenis kegiatan. Dan yang paling utama adalah kemampuan server google drive yang tentunya sudah tidak diragukan lagi kehandalannya.",
    video: Video,
  },
  {
    title: "Hal apa saja yang dilakukan saat quiz",
    description:
      "Video ini menjelaskan tentang cara melakukan Pendaftaran Kampus Gratis. Formulir Pendaftaran di sini bisa berupa formulir pendaftaran seminar, workshop, sekolah, kursus, bimbel, dan segala bentuk formulir pendaftaran yang melibatkan pengisian data secara online. Kelebihan dari Formulir Pendaftaran dengan Google Form ini adalah sangat fleksibel dalam penggunaannya, sehingga kita bisa mengaplikasikan pembuatan formulir pendaftaran untuk semua jenis kegiatan. Dan yang paling utama adalah kemampuan server google drive yang tentunya sudah tidak diragukan lagi kehandalannya.",
    video: Video,
  },
  {
    title: "Bagaimana cara mendapatkan sertifikat",
    description:
      "Video ini menjelaskan tentang cara melakukan Pendaftaran Kampus Gratis. Formulir Pendaftaran di sini bisa berupa formulir pendaftaran seminar, workshop, sekolah, kursus, bimbel, dan segala bentuk formulir pendaftaran yang melibatkan pengisian data secara online. Kelebihan dari Formulir Pendaftaran dengan Google Form ini adalah sangat fleksibel dalam penggunaannya, sehingga kita bisa mengaplikasikan pembuatan formulir pendaftaran untuk semua jenis kegiatan. Dan yang paling utama adalah kemampuan server google drive yang tentunya sudah tidak diragukan lagi kehandalannya.",
    video: Video,
  },
];

const ContentSection = (): ReactElement => {
  return (
    <div className="w-full px-6 md:px-8 lg:px-10">
      <div className="mt-[24px] mb-[54px] justify-between grid lg:grid-cols-3 md:grid-cols-2 lg:gap-x-8 md:gap-x-8 md:gap-y-5 gap-y-5">
        {dummyGuide.slice(0, 6).map((dummy, i) => {
          return (
            <Card
              key={i}
              href=""
              className="w-full border rounded-lg px-3 shadow-md"
              src={dummy.video}
              imgStyle="w-full"
              hasImage={true}
              titleStyle={"text-xl font-bold mt-2"}
              title={dummy.title}
            >
              <p className="w-full text-sm font-base mt-3.5" style={{ color: "#000000" }}>
                {dummy.description.substring(0, 80)}...
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ContentSection;
