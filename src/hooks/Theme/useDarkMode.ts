import { useState, useEffect } from "react";
import { DarkModeReturnTypes } from "./types";

export default function useDarkMode(): DarkModeReturnTypes {
  const [theme, setTheme] = useState("light");
  const colorTheme = theme === "light" ? "dark" : "light";

  const handleThemeChange = (): void => {
    const fetchedTheme = localStorage.getItem("theme") || "light";
    setTheme(fetchedTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  useEffect(() => {
    handleThemeChange();
  }, [setTheme]);

  return { setTheme, colorTheme, theme, handleThemeChange };
}
