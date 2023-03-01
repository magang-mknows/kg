import { FC, ReactElement } from "react";
import { CardLayoutTypes } from "./types";
import Image, { StaticImageData } from "next/image";

const Card: FC<CardLayoutTypes> = ({ children, className, img }): ReactElement => {
  return (
    <section
      className={`grid grid-col-1 lg:grid-cols-1 md:grid-cols-1 px-5 py-4 lg:px-20 md:px-10  ${className}`}
    >
      <div className="grid grid-cols-3 bg-[#106FA4] rounded-lg h-[438px]">
        {children}
        <Image
          className="object-cover object-center w-full h-full overflow-hidden"
          src={img as StaticImageData}
          alt="Image"
        />
      </div>
    </section>
  );
};

export default Card;
