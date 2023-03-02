import { StaticImageData } from "next/image";

export type CardLayoutTypes = {
  children: ReactNode;
  className?: string;
  imgWidth?: string;
  imgHeight?: string;
  img?: StaticImageData;
};
