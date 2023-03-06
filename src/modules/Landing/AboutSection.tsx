import { FC, ReactElement } from "react";
import Image from "next/image";
import AboutVideo from "@/assets/aboutVideo.svg";
import PlayButton from "@/assets/playButton.svg";
import AboutCard2 from "@/assets/aboutCard.svg";
import RectangleUp from "@/assets/rectangleUp.svg";
import RectangleDown from "@/assets/rectangleDown.svg";
import PhoneLaptopAbout from "@/assets/phoneLaptopAbout.svg";
import Checklist from "@/assets/checklist.svg";
import Card from "@/components/Common/Card";

const AboutSection: FC = (): ReactElement => {
  return (
    <section className="container mx-auto mt-[100px] mb-[250px]">
      <div className="grid lg:grid-cols-2 lg:gap-40 md:gap-14 gap-0 ">
        <div className="grid place-content-center ">
          <div className="w-[500px] h-[382px] relative col-span-1 md:px-0 px-5">
            <Image src={RectangleUp} alt={"rectangle-up"} className="relative md:w-5/12 w-3/12" />
            <Image
              src={RectangleDown}
              alt={"rectangle-down"}
              className="relative lg:left-96 md:left-72 left-52 md:-top-14 top-6 md:w-5/12 w-3/12  "
            />
            <Image
              src={AboutCard2}
              alt={"About-Landing"}
              className={
                "lg:w-[500px] md:w-11/12 w-7/12 object-cover rounded-xl absolute top-5 left-5"
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
                  className="text-[#CDF5FA] hover:text-[#fff] hover:bg-[#0cbc87] bg-[#ffffff] rounded-full md:p-3 md:w-12 md:h-12 w-10 p-2 absolute md:top-20 md:left-32 top-14 left-20"
                />
              </button>
            </Card>

            <Card
              hasImage={false}
              className={
                "grid items-center bg-[rgb(255,255,255)] rounded-2xl md:w-max w-4/12 md:px-6 md:py-4 py-3 drop-shadow-xl shadow-lg absolute lg:-right-24 lg:top-96 md:-right-5 right-32 md:top-80 top-48"
              }
            >
              <Image
                src={PhoneLaptopAbout}
                alt={"phone-laptop-about"}
                className="text-[#000000] inline-block bg-[#CDF5FA] rounded-full md:p-3 md:w-14 md:h-14 w-10 p-2 h-10 "
              />
              <div className="px-2">
                <h6 className="text-[#0B568D] font-medium md:text-2xl text-base">75+</h6>
                <p className="text-[#808080] font-medium tracking-tight md:text-md text-[12px]">
                  Pelatihan Aktif
                </p>
              </div>
            </Card>
          </div>
        </div>
        <div className="col-span-1 px-4 md:px-10">
          <h1 className="dark:text-[#ffff] text-[#000000] md:text-[44px] text-[30px] font-bold tracking-wide leading-tight">
            Mengapa <span className="text-[#0B568D]">Kampus Gratis?</span>
          </h1>
          <p className="text-[#8e8e8e] md:text-[24px] text-[18px] leading-normal md:mt-[46px] mt-[20px]">
            Ada banyak kategori pelatihan terlaris yang ada <br /> di Kampus Gratis
          </p>
          <div className="">
            <ul className="md:mt-[46px] mt-[30px] md:text-[24px] text-[18px] ">
              <div className="checklist flex gap-2 mb-3">
                <Image src={Checklist} alt={"checklist"} />
                <li className="-mt-1 ">Belajar semua materi GRATIS</li>
              </div>
              <div className="checklist flex gap-2 mb-3">
                <Image src={Checklist} alt={"checklist"} />
                <li className="-mt-1 ">Dibimbing oleh mentor yang profesional</li>
              </div>
              <div className="checklist flex gap-2 mb-3">
                <Image src={Checklist} alt={"checklist"} />
                <li className="-mt-1 ">Dukungan untuk karir masa depan</li>
              </div>
              <div className="checklist flex gap-2 mb-3">
                <Image src={Checklist} alt={"checklist"} />
                <li className="-mt-1 ">Pembelajaran yang fleksibel</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
