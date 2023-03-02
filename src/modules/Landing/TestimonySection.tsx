import { FC, ReactElement } from "react";
import GlobalButton from "../../components/Common/GlobalButton";
import Image from "next/image";
import testimoniImg1 from "../../assets/testimonial-01.svg";
import testimoniImg4 from "../../assets/testimonial-04.svg";

// test

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
    <section className="h-screen w-full px-8 md:px-[135px] flex place-items-center bg-[#f5f5f5] dark:bg-gray-900 mt-12 mb-28 md:my-0">
      <div className="w-fit grid grid-cols-1 md:grid-cols-[438px_670px] gap-x-[60px] gap-y-12 h-fit">
        <div className="flex flex-col gap-y-9 items-center md:items-start text-center md:text-start">
          <p className="text-base text-[#808080]">TESTIMONI</p>
          <div className="flex flex-col items-center md:items-start gap-y-5">
            <h2 className="text-4xl text-[#181818] dark:text-white font-medium">
              Apa kata mahasiswa Kampus Gratis?
            </h2>
            <p className="text-base text-[#808080] w-[400px]">
              Kampus Gratis telah mencetak talenta hebat yang berkontribusi untuk negeri. Mari kita
              simak pendapat mereka terhadap kami
            </p>
          </div>
          <GlobalButton
            text="Lihat Semua"
            hasImg={false}
            size="small"
            className="w-[328px] h-[56px] bg-[#3EB449] text-[#FFF] text-base leading-6 font-semibold flex place-content-center"
          />
        </div>
        <div className="grid grid-cols-[320px_320px] gap-x-[30px] overflow-x-scroll md:overflow-visible snap-mandatory p-6">
          {alumniDatas.map((alumni, i) => (
            <div
              key={i}
              className="h-[431.66px] shadow-[0_3px_22px_10px_rgba(150,150,150,0.1)] p-[30px] rounded-lg"
            >
              <div className="flex flex-col justify-between h-full py-[30px]">
                <div className="">
                  <div className="relative w-fit">
                    <Image src={alumni.imgSrc} alt={alumni.name} width="70" height="70" />
                    <span className="absolute -right-2 -bottom-2 w-[34px] h-[34px] border-[#fff] border-4 bg-[#106FA4] rounded-full" />
                  </div>
                  <p className="text-[#808080] text-base py-7">{alumni.text}</p>
                </div>
                <div className="flex flex-col gap-y-[7px]">
                  <p className="text-lg text-[#181818] dark:text-white font-semibold">
                    {alumni.name}
                  </p>
                  <p className="text-base text-[#808080] font-medium">{alumni.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
