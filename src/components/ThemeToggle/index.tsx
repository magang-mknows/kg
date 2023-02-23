import { FC, ReactElement, useState, useEffect } from "react";
import useDarkMode from "@/hooks/Theme/useDarkMode";
import DropdownMenu from "../Common/DropdownMenu";
import { Menu } from "@headlessui/react";
import { BsSun, BsMoon } from "react-icons/bs";
import { BiAdjust } from "react-icons/bi";

const ThemeToggle: FC = (): ReactElement => {
  const { setTheme, colorTheme } = useDarkMode();
  const [darkSide, setDarkSide] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkSide(!darkSide);
    setTheme(colorTheme);
    localStorage.setItem("theme", colorTheme);
  };

  const option = [
    {
      text: "Dark",
      icon: <BsMoon />,
    },
    {
      text: "Light",
      icon: <BsSun />,
    },
    {
      text: "Auto",
      icon: <BiAdjust />,
    },
  ];

  useEffect(() => {
    const fetchedTheme = localStorage.getItem("theme") || "light";
    setTheme(fetchedTheme);
    setDarkSide(fetchedTheme === "dark" ? true : false);
  }, [setTheme, colorTheme]);

  return (
    <DropdownMenu list={option}>
      <Menu.Button className="flex p-4 text-sm bg-gray-600 z-20 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:p-2">
        <span className="sr-only">Open user menu</span>
        <div className="text-3xl">
          <BiAdjust />
        </div>
      </Menu.Button>
    </DropdownMenu>
  );
};

export default ThemeToggle;
