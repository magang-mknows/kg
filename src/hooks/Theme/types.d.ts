import { Dispatch, SetStateAction } from "react";

export type DarkModeReturnTypes = {
  setTheme: Dispatch<SetStateAction<string>>;
  colorTheme: string;
  theme: string;
  handleThemeChange: VoidFunction;
};
