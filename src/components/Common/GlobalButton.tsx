import { ButtonHTMLAttributes, FC, ReactElement, ReactNode, useMemo } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import Image, { StaticImageData } from "next/image";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "cta" | "auth" | "scroll";
  text?: string | number;
  className?: string;
  size?: "small" | "base" | "regular" | "large";
  color?: "black" | "white" | "lightBlue" | "red" | "blue" | "green" | "purple";
  to?: string;
  page?: string;
  icon?: ReactNode | StaticImageData;
  target?: string;
  hasImg?: boolean;
}

const GlobalButton: FC<ButtonProps> = ({
  buttonType = "auth",
  text,
  className,
  to,
  page,
  size = "small",
  color = "black",
  icon,
  hasImg,
  ...props
}): ReactElement => {
  const typeClass = {
    cta: "",
    auth: "",
    scroll: "",
  };

  const sizesClass = {
    large: "w-full h-[56px] lg:w-[786px] lg:h-[75px] text-lg font-semibold", // px-24 py-12
    regular: "w-full h-[56px] lg:w-[328px] lg:h-[56px] text-base font-medium", // px-16 py-8
    base: "w-full h-[36px] lg:w-[174px] lg:h-[36px] text-base font-medium", // px-4 py-2
    small: "w-full h-[16px] lg:w-[16px] lg:h-[16px] text-sm font-normal", //px-2 py-2
  };

  const colorClass = {
    black: "bg-[#24292D] text-white hover:bg-[#45494d] ",
    white: "bg-[#ffffff] text-[#24292D] hover:bg-[#eff1f2] ",
    lightBlue: "bg-[#066ac91a] text-[#066ac9] hover:bg-[#066ac9] hover:text-white",
    red: "bg-[#d6293e1a] text-[#d6293e] hover:bg-[#d6293e] hover:text-white ",
    blue: "bg-[#066ac9] text-white",
    green: "bg-[#2D9A41] text-white",
    purple: "bg-[#5143d9] text-white",
  };

  const merged = clsx(
    "rounded-[8px] grid place-content-center",
    colorClass[color],
    sizesClass[size],
    typeClass[buttonType],
    className,
  );

  const href = useMemo(() => {
    if (page) return { pathname: page };
    else return to || "/";
  }, [to, page]);

  console.log(typeof icon);

  return (
    <Link href={href} passHref={Boolean(to?.includes("https://") ? page : "https://" + page)}>
      <button className={merged} {...props}>
        {hasImg ? (
          <Image src={icon as StaticImageData} className="text-black" alt="Icon" />
        ) : (
          <>{icon as ReactNode}</>
        )}
        <p>{text}</p>
      </button>
    </Link>
  );
};

GlobalButton.displayName = "Button";
export default GlobalButton;
