import { FC, ReactElement, Fragment, useState, useEffect } from "react";
import useDarkMode from "@/hooks/Theme/useDarkMode";
import { Menu, Transition } from "@headlessui/react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";

const ThemeToggle: FC = (): ReactElement => {
  const option = [
    {
      text: "Dark",
      icon: <BsFillMoonStarsFill />,
    },
    {
      text: "Light",
      icon: <BsSunFill />,
    },
    {
      text: "Auto",
      icon: <RiComputerLine />,
    },
  ];

  const { setTheme, colorTheme } = useDarkMode();
  const [darkSide, setDarkSide] = useState<boolean>(false);

  const toggleDarkMode = (): void => {
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
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <div className="bg-[#F8F6F2] dark:bg-gray-800 mt-2 group p-3 rounded-md shadow-sm ">
          <BsFillMoonStarsFill className="h-4 w-4 text-[#968E7E] group-hover:text-[#5dc6d4] transition-colors ease-in-out duration-300" />
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-30 px-4 origin-top-right  divide-gray-100 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {option.map((x, i) => (
            <div key={i} className=" py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={toggleDarkMode}
                    className={`${
                      active ? " bg-blue-200 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md text-sm gap-x-2 px-1 text-gray-400 dark:text-white`}
                  >
                    {x.icon}
                    <span className="text-base px-1 text-gray-400 dark:text-white">{x.text}</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ThemeToggle;
