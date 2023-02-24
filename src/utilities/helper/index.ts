import LogoDark from "@/assets/logokg-dark.png";
import LogoNormal from "@/assets/logokg.png";
import { useTheme } from "next-themes";
import { StaticImageData } from "next/image";
import { ErrorComplete } from "../types/Error";

export const LoadConditionalLogo = (): StaticImageData => {
  const { theme } = useTheme();
  return theme?.toLocaleLowerCase() === "dark" ? LogoDark : LogoNormal;
};

export const handleError = (error: any): ErrorComplete => {
  return error.response.data.message;
};
