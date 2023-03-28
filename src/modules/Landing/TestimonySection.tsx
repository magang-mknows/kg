import { FC, ReactElement } from "react";
import GlobalButton from "@/components/Common/GlobalButton";
import Image from "next/image";
import testimoniImg1 from "@/assets/landing/testimonial-01.svg";
import testimoniImg4 from "@/assets/landing/testimonial-04.svg";

const alumniDatas = [
  {
    name: "Robert Tapp",
    job: "UI Designer",
    imgSrc: testimoniImg1,
    text: "Aku berterima kasih banget adanya program pelatihan gratis dari Kampus Gratis. Kalo Ga ada program ini, saya sulit untuk melanjutkan studi saya karena finansial.",
  },
  {
    name: "Ray Sanchez",
    job: "Student",
    imgSrc: testimoniImg4,
    text: "Pelatihannya seru, mentornya asik juga, materinya pun berbobot dan juga menyenangkan BGT dah!!!",
  },
];

const TestimonySection: FC = (): ReactElement => {
  return (
    <div className="flex lg:flex-row flex-col w-screen h-auto py-16 lg:px-16 bg-gray-100">
      <div className="flex flex-col lg:w-[100%] lg:justify-center justify-start py-10 lg:pl-24 px-6">
        <h1 className=" text-2xl text-[#808080]">TESTIMONI</h1>
        <div className="flex flex-col items-center md:items-start gap-y-5">
          <h2 className="text-3xl lg:text-4xl text-[#181818] dark:text-black py-4 font-bold">
            Apa kata mahasiswa Kampus Gratis?
          </h2>
          <p className="text-lg dark:text-gray-400 text-[#808080] w-full pb-4">
            Kampus Gratis telah mencetak talenta hebat yang berkontribusi untuk negeri. Mari kita
            simak pendapat mereka terhadap kami
          </p>
        </div>
        <GlobalButton
          text="Lihat Semua"
          hasImg={false}
          size="regular"
          className="bg-[#3EB449] leading-6 font-semibold px-0 lg:px-28 py-6"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-x-[30px] gap-y-[10px] px-10  ">
        {alumniDatas.map((alumni, i) => (
          <div key={i} className="w-full h-full bg-white snap-x shadow-lg p-[30px] rounded-lg">
            <div className="flex flex-col justify-between h-full py-[30px]">
              <div className="">
                <div className="relative w-fit">
                  <Image src={alumni.imgSrc} alt={alumni.name} width="70" height="70" />
                  <span className="absolute -right-2 -bottom-2 w-[34px] h-[34px] border-[#fff] border-4 bg-[#106FA4] rounded-full" />
                </div>
                <p className="text-[#808080] text-base py-7">{alumni.text}</p>
              </div>
              <div className="flex flex-col gap-y-[7px]">
                <p className="text-lg text-[#181818] dark:text-gray-600 font-semibold">
                  {alumni.name}
                </p>
                <p className="text-base text-[#808080] font-medium">{alumni.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonySection;
