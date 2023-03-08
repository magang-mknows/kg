import { FC, Fragment, ReactElement } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ArticleSlide from "@/assets/article-slide.svg";
import Image from "next/image";
import Link from "next/link";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

const ArticleSection: FC = (): ReactElement => {
  const Mitra = [
    { image: ArticleSlide, text: "Apa itu Cyber Attack?" },
    { image: ArticleSlide, text: "Apa itu Cyber Defense?" },
  ];
  return (
    <Fragment>
      <div className={`${montserrat.className} md:max-w-[370px]w`}>
        <div className="flex flex-row items-center justify-between py-2">
          <h1 className="text-[20px]">Artikel</h1>
          <Link className="text-[14px] text-[#106FA4]" href={"/"}>
            Lihat Detail
          </Link>
        </div>
        <Carousel
          className="md:max-w-[370px]"
          showIndicators={true}
          showStatus={false}
          showArrows={false}
        >
          {Mitra.map((x, i) => (
            <div key={i} className="flex flex-col justify-center shadow-md">
              <div className="block max-w-sm rounded-lg bg-neutral-100 dark:bg-neutral-700">
                <Image src={x.image} className="w-full rounded-t-lg" alt="Image" />
              </div>
              <div className="bg-white text-start md:max-w-[370px] p-2 mb-10 rounded-lg">
                <h1 className="font-[16px] medium  text-black dark:text-neutral-50">{x.text}</h1>
                <div className="flex flex-row items-center gap-x-2 font-normal text-[12px] text-[#A3A3A3] dark:text-neutral-200">
                  <p className="">Artikel Teknologi</p>
                  <svg
                    width="3"
                    height="2"
                    viewBox="0 0 3 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="1.5" cy="1" r="1" fill="#A3A3A3" />
                  </svg>

                  <p className="">Artikel Teknologi</p>
                </div>
                <p className="font-normal text-end text-[12px] text-[#A3A3A3] dark:text-neutral-200">
                  Februari 2023
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Fragment>
  );
};

export default ArticleSection;
