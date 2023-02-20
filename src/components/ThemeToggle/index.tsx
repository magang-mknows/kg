import { FC, ReactElement, useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeToggle: FC = (): ReactElement => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);
  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div
      className={` w-14 rounded-full bg-gray-400 flex  items-center shadow "
      } `}
      onClick={toggleDarkMode}
    >
      <div
        id="switch-toggle"
        className="transform translate-x-0 dark:translate-x-7 rotate-180 dark:rotate-0 transition-all duration-300 ease-linear rounded-full bg-yellow-500 dark:bg-gray-300 p-1 text-white focus:rotate-180 justify-center"
      >
        {theme === "light" ? <BsSun size={20} /> : <BsMoon size={20} />}
      </div>
    </div>
  );
};

export default ThemeToggle;

{
  /* <div className="inline-flex items-center p-[1px] rounded-3xl bg-amber-300 dark:bg-zinc-600">
      <button
        className={`
            checked ? "bg-white" : ""
          } cursor-pointer  md:rounded-2xl rounded-xl md:p-2 p-1`}
        onClick={togleDarkMod}
      >
        {theme === "light" ? <BsMoon /> : <BsSun />}
      </button>
    </div> */
}
