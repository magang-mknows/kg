import { StaticImageData } from "next/image";

export interface AssigmentProps {
  titleAssigment: string;
  category: string;
  date?: String;
  time?: string;
  titleCourse: string;
  bgLine?: string;
  classNameCategory?: string;
  imgAssigment?: StaticImageData;
  alt?: string;
}

export interface BreadCrumbProps {}
