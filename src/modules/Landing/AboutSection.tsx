import { FC, ReactElement } from "react";
import Image from "next/image";
import AboutVideo from "@/assets/landing/aboutVideo.svg";
import PlayButton from "@/assets/landing/playButton.svg";
import AboutCard2 from "@/assets/landing/aboutCard.svg";
import RectangleUp from "@/assets/landing/rectangleUp.svg";
import RectangleDown from "@/assets/landing/rectangleDown.svg";
import PhoneLaptopAbout from "@/assets/landing/phoneLaptopAbout.svg";
import Checklist from "@/assets/landing/checklist.svg";
import Card from "@/components/Common/Card";

const AboutSection: FC = (): ReactElement => {
  return (
    <section className="mt-[-100px] lg:mt-[140px] md:mt-0 mb-0 md:mb-[350px] lg:mx-10 md:mx-8 mx-6 w-full">
      <div className="flex flex-col lg:flex-row lg:gap-20 md:gap-14 gap-0 ">
        <div className="flex justify-center">
          <div className="w-full md:w-[500px] lg:w-[500px] h-[382px] relative col-span-1 md:px-0 md:ml-0 mx-4">
            <Image
              src={RectangleUp}
              alt={"rectangle-up"}
              className="relative md:w-5/12 w-3/12  lg:visible invisible"
            />
            <Image
              src={RectangleDown}
              alt={"rectangle-down"}
              className="relative lg:left-96 md:left-72 left-52 md:-top-14 top-6 md:w-5/12 w-3/12 lg:visible invisible"
            />
            <Image
              src={AboutCard2}
              alt={"About-Landing"}
              className={
                "lg:w-[500px] md:w-[80%] w-[90%] object-cover rounded-xl absolute top-5 left-5"
              }
            />
            <Card
              hasImage={true}
              className={
                "grid items-center rounded-2xl md:w-max absolute lg:-right-36 md:-top-24 md:-right-7 right-24 w-5/12 -top-10 "
              }
              src={AboutVideo}
              imgwidth={261}
              imgheight={173}
            >
              <button>
                <Image
                  src={PlayButton}
                  alt={"Play-video"}
                  className="text-[#CDF5FA] hover:text-[#fff] hover:bg-[#0cbc87] bg-[#ffffff] rounded-full md:p-3 md:w-12 md:h-12 w-10 p-2 absolute md:top-20 md:left-32 top-14 left-20 justify-start"
                />
              </button>
            </Card>

            <Card
              hasImage={false}
              className={
                "flex justify-center bg-[rgb(255,255,255)] rounded-2xl md:w-max w-[70%] md:px-6 md:py-4 drop-shadow-xl shadow-lg absolute lg:-right-24 lg:top-96 md:-right-5 md:top-80 top-60"
              }
            >
              <Image
                src={PhoneLaptopAbout}
                alt={"phone-laptop-about"}
                className="text-[#000000] inline-block bg-[#CDF5FA] rounded-full md:p-3 md:w-14 md:h-14 w-10 p-2 h-10 "
              />
              <div className="px-2">
                <h6 className="text-[#0B568D] font-medium md:text-2xl text-base">75+</h6>
                <p className="text-[#808080] font-medium tracking-tight md:text-md lg:text-[18px] text-[12px]">
                  Pelatihan Aktif
                </p>
              </div>
            </Card>
          </div>
        </div>
        <div className="relative mt-12 lg:mt-[30px] lg:pl-20 px-10">
          <h1 className="dark:text-[#ffff] text-[#262626] w-full flex flex-col lg:flex-row md:flex-row justify-center gap-x-3 md:text-[44px] text-[30px] font-bold leading-tight">
            Kelebihan <span className="text-[#0B568D]">Kampus Gratis</span>
          </h1>
          <p className="pt-[50px] align-center text-left lg:text-left text-[#262626] text-[15px] md:text-[17px] lg:text-[18px] dark:text-white">
            Ada banyak kategori pelatihan terlaris yang ada di Kampus Gratis
          </p>
          <div className="">
            <ul className="pt-[20px] space-y-[20px] lg:text-base text-sm ">
              <div className="checklist flex gap-2 mt-1 justfiy-start items-center ">
                <Image src={Checklist} alt={"checklist"} />
                <li>Kuliah & Belajar semua materi GRATIS</li>
              </div>
              <div className="checklist flex gap-2 mt-1 justfiy-start items-center">
                <Image src={Checklist} alt={"checklist"} />
                <li>Dibimbing oleh mentor yang profesional</li>
              </div>
              <div className="checklist flex gap-2 mt-1 justfiy-start items-center">
                <Image src={Checklist} alt={"checklist"} />
                <li>Dukungan untuk karir masa depan</li>
              </div>
              <div className="checklist flex gap-2 mt-1 justfiy-start items-center">
                <Image src={Checklist} alt={"checklist"} />
                <li>Pembelajaran yang fleksibel</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
