import { StaticImageData } from "next/image";

export type OptionFaculty = {
  src: StaticImageData;
  deskripsi: string;
  jumlahstudi: number;
  slug: string;
};

export type OptionSubject = {
  src: StaticImageData;
  deskripsi: string;
  jumlahmatkul: number;
  sks: number;
  slug: string;
};
