import { FC, ReactElement, Fragment, useState, useEffect, Suspense } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { useTheme } from "next-themes";

import { startTransition } from "react";

import { ErrorBoundary } from "react-error-boundary";
import dynamic from "next/dynamic";

const Icon = dynamic(() => import("./icon"), {
  ssr: false,
});

const ThemeToggle: FC = (): ReactElement => {
  const option = [
    {
      text: "Dark",
      value: "dark",
      icon: <BsFillMoonStarsFill />,
    },
    {
      text: "Light",
      value: "light",
      icon: <BsSunFill />,
    },
    {
      text: "Auto",
      value: "system",
      icon: <RiComputerLine />,
    },
  ];

  startTransition(() => {
    // Transition: Show the results
  });
  const { setTheme } = useTheme();

  const changeTheme = (val: string): void => {
    startTransition(() => {
      // Transition: Show the results
      setTheme(val);
    });
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <div className="bg-[#F8F6F2] dark:bg-gray-800 mt-2 group p-3 rounded-md shadow-sm ">
          <ErrorBoundary fallback={<>gaje</>}>
            <Suspense fallback="loading...">
              <Icon />
            </Suspense>
          </ErrorBoundary>
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
                    onClick={() =>
                      startTransition(() => {
                        // Transition: Show the results
                        changeTheme(x.value);
                      })
                    }
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
