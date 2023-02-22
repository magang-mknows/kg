import { FC, ReactElement, useState, useEffect } from "react";
import useDarkSide from "@/hooks/Theme/useDarkSide";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeToggle: FC = (): ReactElement => {
  const { setTheme, colorTheme } = useDarkSide();
  const [darkSide, setDarkSide] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkSide(!darkSide);
    setTheme(colorTheme);
    localStorage.setItem("theme", colorTheme);
  };

  useEffect(() => {
    const fetchedTheme = localStorage.getItem("theme") || "light";
    setTheme(fetchedTheme);
    setDarkSide(fetchedTheme === "dark" ? true : false);
  }, [setTheme, colorTheme]);

  return (
    <div
      className={`cursor-pointer w-12 h-4 rounded-full bg-gray-400 flex  items-center shadow "
    } `}
      onClick={toggleDarkMode}
    >
      <div
        id="switch-toggle"
        className="cursor-pointer transform translate-x-0 dark:translate-x-7 rotate-180 dark:rotate-0 transition-all duration-300 ease-linear rounded-full bg-yellow-500 dark:bg-[#0f0f10] border-2 border-gray-50/60 p-1 text-white focus:rotate-180 justify-center"
      >
        {colorTheme === "light" ? <BsMoon size={20} /> : <BsSun size={18} />}
      </div>
    </div>
  );
};

export default ThemeToggle;
