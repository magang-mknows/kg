import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type AuthLayoutTypes = {
  title: string;
  children: ReactNode;
  description?: string;
  linkText?: string;
  to?: string;
  img?: string | StaticImageData;
};
