import { FC, ReactElement } from "react";
import Image from "next/image";
import pictureSekilasInfo from "@/assets/landing/picture-sekilas-landing.webp";
import RedSekilasInfo from "@/assets/landing/redInfo.svg";

const SekilasSection: FC = (): ReactElement => {
  return (
    <div className="flex flex-col lg:px-20 px-0 py-24 lg:py-28 lg:flex-row w-screen h-auto">
      <div data-aos="flip-left" data-aos-delay="300" className="flex flex-col lg:w-[100%] w-screen">
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-[#262626] dark:text-white  text-center my-2">
          <span className="mx-2 text-[#FAB317]"> Tentang </span>
          Kampus Gratis
        </h1>
        <h1 className="py-6 font-bold text-3xl px-4">Apa itu Kampus Gratis ??</h1>
        <p className="px-4 text-gray-600 align-center text-center lg:text-left text-[#262626] text-[15px] md:text-[17px] lg:text-[18px] dark:text-white">
          <span className="text-gray-600 text-[24px] dark:text-white font-semibold">
            Kampus Gratis
          </span>{" "}
          atau disingkat KG, mengadopsi aturan baru dari merdeka belajar depdikbud, seperti Magang,
          Studi independent Bersertifikat (MSIB) dan Rekognisi Pembelajaran Lampau program (RPL),
          sesuai Peraturan Menteri Kementerian Riset, Teknologi, Dan Pendidikan Tinggi Republik
          Indonesia NO. 26 tahun 2016. Program MSIB telah team KG ikuti sejak awal peluncurannya
          hingga sekarang.{" "}
        </p>
        <p className="align-center px-4 text-gray-600 text-center lg:text-left text-[15px] md:text-[17px] lg:text-[18px] mt-5 dark:text-white ">
          RPL adalah pengakuan atas Capaian Pembelajaran seseorang yang diperoleh dari pendidikan
          formal, nonformal, informal, dan/atau pengalaman kerja, sebagai dasar untuk melanjutkan
          pendidikan formal, dan untuk melakukan penyetaraan akademik atas pengalaman kerja atau
          pelatihan bersertifikasi, untuk memperoleh kualifikasi ijazah pendidikan tinggi.
        </p>
        <Image src={RedSekilasInfo} width={450} alt={"picture-sekilas-landing"} className="m-20" />
      </div>
      <div className="w-[100%]">
        <Image
          src={pictureSekilasInfo}
          alt={"picture-sekilas-landing"}
          className="lg:mx-10 w-[600] px-8 my-6 lg:my-0"
        />
        <p className="px-14 py-8 text-gray-600 lg:text-start text-center text-[15px] md:text-[17px] lg:text-[18px] mt-5 dark:text-white">
          KG bekerjasama dengan perguruan tinggi yang berkualitas, dimana seluruh pembelajaran di
          KG, baik berupa (1) Perkuliahan, (2) Pelatihan, (3) Magang maupun (4) Pengalaman kerja
          dari siswa akan dikonversi menjadi SKS untuk memperoleh ijazah Pendidikan tinggi setara S1
          dan S2.
        </p>
        <p className="text-gray-600 lg:text-start text-center text-[15px] md:text-[17px] lg:text-[18px] mt-5 dark:text-white px-4">
          Team KG didukung sepenuhnya oleh M-Knows Consulting, konsultan manajemen nasional yang
          berumur lebih dari 20 tahun, dengan kekuatan dibidang solusi manajemen dan edukasi,
          meliputi Pelatihan, LMS & LXP, Solusi Artificial Intelligence bagi bisnis dan pendidikan,
          pengembangan Photorealistic VR
        </p>
      </div>
    </div>
  );
};

export default SekilasSection;
