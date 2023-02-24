import { FC, ReactElement, Suspense, useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { IconsProps } from "./types";
import { ErrorBoundary } from "react-error-boundary";
import { useTheme } from "next-themes";

const Icon: FC = (): ReactElement => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  const classNameIcon =
    "h-4 w-4 text-[#968E7E] group-hover:text-[#5dc6d4] transition-colors ease-in-out duration-300";

  return (
    <ErrorBoundary fallback={<>Error</>}>
      <Suspense fallback="loading gays...">
        {theme === "dark" ? (
          <BsFillMoonStarsFill className="dark:text-[#817d73] text-[#968E7E]" />
        ) : theme === "light" ? (
          <BsSunFill className="dark:text-[#817d73] text-[#968E7E]" />
        ) : (
          <RiComputerLine className="dark:text-[#817d73] text-[#968E7E]" />
        )}
      </Suspense>
    </ErrorBoundary>
  );
};
export default Icon;
