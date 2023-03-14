import { StaticImageData } from "next/image";

export interface CardListProps {
  slug?: string;
  title?: string;
  image?: StaticImageData;
  price?: Gratis | number;
  status?: Terdaftar | Selesai;
  day?: string;
  date?: Date | string;
}
