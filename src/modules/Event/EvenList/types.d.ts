import { StaticImageData } from "next/image";

export interface CardListProps {
  slug?: string;
  title?: string;
  image?: StaticImageData;
  price?: number;
  day?: string;
  date?: Date | string;
}
