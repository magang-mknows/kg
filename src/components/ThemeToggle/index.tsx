import { FC, ReactElement, Fragment, useState, useEffect } from "react";
import useDarkMode from "@/hooks/Theme/useDarkMode";
import { Menu, Transition } from "@headlessui/react";
import { BsSun, BsMoon } from "react-icons/bs";
import { BiAdjust } from "react-icons/bi";

const ThemeToggle: FC = (): ReactElement => {
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

  const { setTheme, colorTheme } = useDarkMode();
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
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex text-sm bg-gray-600 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ">
        <div className="text-3xl">
          <BiAdjust size={20} />
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
        <Menu.Items className="absolute right-0  mt-2 w-30 px-4 origin-top-right  divide-gray-100 rounded-md bg-white dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
