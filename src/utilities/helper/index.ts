import LogoDark from "@/assets/logokg-dark.png";
import LogoNormal from "@/assets/logokg.png";
import useDarkMode from "@/hooks/Theme/useDarkMode";
import { ErrorComplete } from "../types/Error";

export const LoadConditionalLogo = () => {
  const { theme } = useDarkMode();
  return theme.toLocaleLowerCase() === "dark" ? LogoDark : LogoNormal;
};

export const handleError = (error: any): ErrorComplete => {
  return error.response.data.message;
};
