import { FC, ReactElement, Suspense, useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { ErrorBoundary } from "react-error-boundary";
import { useTheme } from "next-themes";
import { BiSun } from "react-icons/bi";

const Icon: FC = (): ReactElement => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return (
    <ErrorBoundary fallback={<>Error</>}>
      <Suspense fallback="loading gays...">
        {theme === "dark" ? (
          <BsFillMoonStarsFill
            size={20}
            className="text-neutral-800 dark:text-white dark:group-hover:text-neutral-200 stroke-neutral-800 group-hover:text-[#106FA4] transition-colors ease-in-out duration-300"
          />
        ) : theme === "light" ? (
          <BiSun
            size={20}
            className="text-neutral-800 dark:text-white dark:group-hover:text-neutral-200 stroke-neutral-800 group-hover:text-[#106FA4] transition-colors ease-in-out duration-300"
          />
        ) : (
          <RiComputerLine
            size={20}
            className="text-neutral- dark:text-white dark:group-hover:text-neutral-200 stroke-neutral-800 group-hover:text-[#106FA4] transition-colors ease-in-out duration-300"
          />
        )}
      </Suspense>
    </ErrorBoundary>
  );
};
export default Icon;
