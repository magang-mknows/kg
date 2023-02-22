import { useState, useEffect } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState("light");
  const colorTheme = theme === "light" ? "dark" : "light";

  // const [isDark, setDark] = useState(false);
  const handleChange = () => {
    const fetchedTheme = localStorage.getItem("theme") || "light";
    setTheme(fetchedTheme);
    // setDark(fetchedTheme === "dark" ? true : false);
  };

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  useEffect(() => {
    handleChange();
  }, [setTheme]);

  useEffect(() => {
    handleChange();
  }, []);

  return { setTheme, colorTheme, theme, handleChange };
}
