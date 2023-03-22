import { FC, ReactElement } from "react";
import Mitra1 from "@/assets/logoPatner/mitra1.png";
import Mitra2 from "@/assets/logoPatner/mitra2.png";
import Mitra3 from "@/assets/logoPatner/mitra3.png";
import Mitra4 from "@/assets/logoPatner/mitra4.png";
import Mitra5 from "@/assets/logoPatner/mitra5.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import useWindowSize from "@/hooks/Common/useWindowSize";
import { Size } from "@/hooks/Common/types";

const CarouselMenu: FC = (): ReactElement => {
  const size: Size = useWindowSize();
  const Mitra = [
    { icon: Mitra1 },
    { icon: Mitra2 },
    { icon: Mitra3 },
    { icon: Mitra4 },
    { icon: Mitra5 },
  ];

  return (
    <div className="carousel-wrapper md:w-[full] w-screen items-center flex justify-center">
      {(size.width as number) < 580 ? (
        <Carousel
          className="flex items-center justify-center w-full md:px-20"
          width={"60%"}
          thumbWidth={40}
          centerMode={false}
          stopOnHover={true}
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
              <Image draggable={false} width={1000} key={i} src={x.icon} alt={"Mitra Section"} />
            </div>
          ))}
        </Carousel>
      ) : (
        <Carousel
          className="flex items-center justify-center"
          width={"100%"}
          thumbWidth={20}
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
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <svg
                  width="13"
                  height="21"
                  viewBox="0 0 13 21"
                  className="md:relative md:flex hidden md:z-8 absolute right:0 cursor-pointer"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* md:right-[70px] ml-16 */}
                  <path
                    d="M10.2999 0.5L12.6499 2.85L5.01657 10.5L12.6499 18.15L10.2999 20.5L0.2999 10.5L10.2999 0.5Z"
                    fill="#106FA4"
                  />
                </svg>
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <svg
                  width="13"
                  height="21"
                  className="md:relative md:flex hidden absolute left:0 md:z-18 cursor-pointer"
                  viewBox="0 0 13 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* md:left-[70px] mr-16 */}
                  <path
                    d="M2.7001 0.5L0.350098 2.85L7.98343 10.5L0.350098 18.15L2.7001 20.5L12.7001 10.5L2.7001 0.5Z"
                    fill="#106FA4"
                  />
                </svg>
              </div>
            );
          }}
        >
          {Mitra.map((x, i) => (
            <div key={i} className={"mx-20 lg:mx-8"}>
              <Image draggable={false} width={80} key={i} src={x.icon} alt={"Mitra Section"} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default CarouselMenu;
