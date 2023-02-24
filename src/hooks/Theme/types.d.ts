import { Dispatch, SetStateAction } from "react";

export type DarkModeReturnTypes = {
  setTheme: (theme: string) => void;
  colorTheme: string;
  theme?: string;
  handleThemeChange: VoidFunction;
};
