import { FC, ReactElement } from "react";
import Mitra1 from "@/assets/mitra1.png";
import Mitra2 from "@/assets/mitra2.png";
import Mitra3 from "@/assets/mitra3.png";
import Mitra4 from "@/assets/mitra4.png";
import Mitra5 from "@/assets/mitra5.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const CarouselMenu: FC = (): ReactElement => {
  const Mitra = [
    { icon: Mitra1 },
    { icon: Mitra2 },
    { icon: Mitra3 },
    { icon: Mitra4 },
    { icon: Mitra5 },
  ];

  return (
    <div className="carousel-wrapper w-full items-center flex justify-between">
      <svg
        width="13"
        height="21"
        viewBox="0 0 13 21"
        className="relative z-10 left-28 cursor-pointer"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.2999 0.5L12.6499 2.85L5.01657 10.5L12.6499 18.15L10.2999 20.5L0.2999 10.5L10.2999 0.5Z"
          fill="#106FA4"
        />
      </svg>
      <Carousel
        className="flex items-center justify-center"
        width={"85%"}
        thumbWidth={300}
        centerMode={true}
        stopOnHover={true}
        centerSlidePercentage={20}
        infiniteLoop={true}
        selectedItem={20}
        autoPlay={true}
        showThumbs={false}
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        emulateTouch={true}
      >
        {Mitra.map((x, i) => (
          <div key={i} className={"mx-8"}>
            <Image draggable={false} width={500} key={i} src={x.icon} alt={"Mitra Section"} />
          </div>
        ))}
      </Carousel>
      <svg
        width="13"
        height="21"
        className="relative right-28 zz-18 cursor-pointer"
        viewBox="0 0 13 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.7001 0.5L0.350098 2.85L7.98343 10.5L0.350098 18.15L2.7001 20.5L12.7001 10.5L2.7001 0.5Z"
          fill="#106FA4"
        />
      </svg>
    </div>
  );
};

export default CarouselMenu;
