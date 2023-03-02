import { FC, ReactElement, useState, useEffect, Suspense, startTransition } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { useTheme } from "next-themes";

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
    <Menu as="div" className="relative inline-block text z-50 ">
      <Menu.Button>
        <div className="bg-neutral-200 h-9 w-9 flex items-center justify-center  overflow-hidden rounded-md cursor-pointer group">
          <ErrorBoundary fallback={<>gaje</>}>
            <Suspense fallback="loading...">
              <Icon />
            </Suspense>
          </ErrorBoundary>
        </div>
      </Menu.Button>

      <Transition
        enter="transition ease duration-500 transform"
        enterFrom="opacity-0 -translate-y-12"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease duration-300 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-12"
      >
        <Menu.Items className="absolute top-2 right-0 w-30 origin-top-right  overflow-hidden rounded-md bg-white  shadow-lg">
          {option.map((x, i) => (
            <div key={i} className="">
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
                      active ? " bg-[#106FA4] hover:text-white " : ""
                    } flex justify-between gap-2 w-full px-6 py-2 text-neutral-800 transition-all duration-300 ease-in-out`}
                  >
                    {x.icon}
                    <span className="text-xs">{x.text}</span>
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
