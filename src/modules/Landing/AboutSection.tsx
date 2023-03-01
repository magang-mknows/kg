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
      <div className="grid lg:grid-cols-2 gap-40">
        <div className="grid place-content-center ">
          <div className="w-[500px] h-[382px] relative col-span-1">
            <Image src={RectangleUp} alt={"rectangle-up"} className="relative " />
            <Image
              src={RectangleDown}
              alt={"rectangle-down"}
              className="relative lg:left-96 md:left-72 left-40 "
            />
            <Image
              src={AboutCard2}
              alt={"About-Landing"}
              className={"lg:w-[500px] object-cover rounded-xl absolute top-5 left-5"}
            />
            <Card
              hasImage={true}
              className={
                "grid items-center rounded-2xl w-max absolute lg:-right-36 -top-24 md:-right-7 -right-1"
              }
              src={AboutVideo}
              imgwidth={261}
              imgheight={173}
            >
              <button>
                <Image
                  src={PlayButton}
                  alt={"Play-video"}
                  className="text-[#CDF5FA] hover:text-[#fff] hover:bg-[#0cbc87] bg-[#ffffff] rounded-full p-3 w-12 h-12 absolute top-20 left-32"
                />
              </button>
            </Card>

            <Card
              hasImage={false}
              className={
                "grid items-center bg-[rgb(255,255,255)] rounded-2xl w-max px-6 py-4 drop-shadow-xl shadow-lg absolute lg:-right-24 top-96 md:-right-10 right-20"
              }
            >
              <Image
                src={PhoneLaptopAbout}
                alt={"phone-laptop-about"}
                className="text-[#000000] inline-block bg-[#CDF5FA] rounded-full p-3 w-14 h-14 "
              />
              <div className="px-2">
                <h6 className="text-[#0B568D] font-medium text-2xl">75+</h6>
                <p className="text-[#808080] font-medium tracking-tight text-md">Pelatihan Aktif</p>
              </div>
            </Card>
          </div>
        </div>
        <div className="col-span-1 w-full">
          <h1 className="dark:text-[#ffff] text-[#000000] text-[44px] font-bold tracking-wide leading-tight">
            Mengapa <span className="text-[#0B568D]">Kampus Gratis?</span>
          </h1>
          <h6 className="text-[#8e8e8e] text-[24px] leading-normal mt-[46px]">
            Ada banyak kategori pelatihan terlaris yang ada <br /> di Kampus Gratis
          </h6>
          <div>
            <ul className="mt-[46px]">
              <div className="checklist flex gap-2 mb-3">
                <Image src={Checklist} alt={"checklist"} />
                <li className="-mt-1 text-[24px]">Belajar semua materi GRATIS</li>
              </div>
              <div className="checklist flex gap-2 mb-3">
                <Image src={Checklist} alt={"checklist"} />
                <li className="-mt-1 text-[24px]">Dibimbing oleh mentor yang profesional</li>
              </div>
              <div className="checklist flex gap-2 mb-3">
                <Image src={Checklist} alt={"checklist"} />
                <li className="-mt-1 text-[24px]">Dukungan untuk karir masa depan</li>
              </div>
              <div className="checklist flex gap-2 mb-3">
                <Image src={Checklist} alt={"checklist"} />
                <li className="-mt-1 text-[24px]">Pembelajaran yang fleksibel</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
