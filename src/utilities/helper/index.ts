import LogoDark from "@/assets/logokg-dark.png";
import LogoNormal from "@/assets/logokg.png";
import { useTheme } from "next-themes";
import { StaticImageData } from "next/image";
import { ErrorComplete } from "../types/Error";

export const LoadConditionalLogo = (): StaticImageData => {
  const { theme } = useTheme();
  return theme?.toLocaleLowerCase() === "dark" ? LogoDark : LogoNormal;
};

export const handleError = (error: unknown): string | string[] => {
  const err = error as ErrorComplete;
  return err.response.data.message;
};
