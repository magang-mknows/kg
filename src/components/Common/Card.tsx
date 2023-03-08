import type { FC, ReactElement } from "react";
import { CardProps } from "./types";
import Image from "next/image";

const Card: FC<CardProps> = ({
  className,
  children,
  title,
  icon,
  src,
  imgwidth,
  imgheight,
  titleStyle,
  hasImage,
  imgStyle,
}): ReactElement => {
  return (
    <div className={`${className} flex auto p-4 flex-col`}>
      {hasImage && (
        <Image
          className={`w-full object-cover ${imgStyle}`}
          src={src}
          alt="Picture of the author"
          width={imgwidth}
          height={imgheight}
        />
      )}
      {icon}
      <h1 className={titleStyle}>{title}</h1>
      <section className="flex">{children}</section>
    </div>
  );
};

export default Card;
