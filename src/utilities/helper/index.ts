import LogoDark from "@/assets/logokg-dark.png";
import LogoNormal from "@/assets/logokg.png";
import useDarkMode from "@/hooks/Theme/useDarkMode";

export const LoadConditionalLogo = () => {
  const { theme } = useDarkMode();
  return theme.toLocaleLowerCase() === "dark" ? LogoDark : LogoNormal;
};
