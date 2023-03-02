import { FC, ReactElement } from "react";
import { CardLayoutTypes } from "./types";
import Image, { StaticImageData } from "next/image";

const Card: FC<CardLayoutTypes> = ({
  children,
  className,
  img,
  imgWidth,
  imgHeight,
}): ReactElement => {
  return (
    <section
      className={`grid grid-col-1 lg:grid-cols-1 md:grid-cols-1 px- py-4 lg:px-20 md:px-10 place-content-center ${className}`}
    >
      <div className="grid lg:grid-cols-3 bg-[#106FA4] rounded-lg lg:h-[438px] w-[376px] lg:w-[1300px] content-center">
        <div className="grid lg:col-span-2">{children}</div>
        <Image
          className={`${imgWidth} ${imgHeight} col-span-1 justify-self-start object-cover object-center overflow-hidden hidden lg:block`}
          src={img as StaticImageData}
          alt="Image"
        />
      </div>
    </section>
  );
};

export default Card;
