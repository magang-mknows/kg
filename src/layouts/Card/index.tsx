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
      className={`grid grid-col-1 lg:grid-cols-1 md:grid-cols-1 px-4 py-4 lg:px-20 md:px-10 place-content-center ${className}`}
    >
      <div className="flex flex-row lg:grid-cols-3 bg-[#106FA4] rounded-lg lg:h-[438px] content-center">
        <div className="flex lg:basis-2/3">{children}</div>
        <Image
          className={`${imgWidth} ${imgHeight} lg:basis-1/3 justify-self-start object-cover object-center overflow-hidden hidden lg:block`}
          src={img as StaticImageData}
          alt="Image"
        />
      </div>
    </section>
  );
};

export default Card;
