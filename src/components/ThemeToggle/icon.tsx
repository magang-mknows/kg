import { FC, ReactElement, Suspense, useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
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
