import type { ButtonHTMLAttributes, FC, ReactElement, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "cta" | "auth" | "scroll";
  text?: string | number;
  className?: string;
  size?: "small" | "base" | "regular" | "large";
  color?: "black" | "white" | "lightBlue" | "red" | "blue" | "green" | "purple";
  to?: string;
  page?: string;
  icon?: ReactNode;
  target?: string;
}

const GlobalButton: FC<ButtonProps> = ({
  buttonType = "auth",
  text,
  className,
  page,
  size = "regular",
  color = "black",
  icon,
  ...props
}): ReactElement => {
  const typeClass = {
    cta: "",
    auth: "!px-8",
    scroll: "",
  };
  const sizesClass = {
    large: "px-24 py-12 text-base",
    regular: "px-16 py-8 text-base",
    base: "px-4 py-2 text-sm",
    small: "px-3 py-1.5 text-sm",
  };

  const colorClass = {
    black: "bg-[#24292D] text-white hover:bg-[#45494d] ",
    white: "bg-[#ffffff] text-[#24292D] hover:bg-[#eff1f2] ",
    lightBlue: "bg-[#066ac91a] text-[#066ac9] hover:bg-[#066ac9] hover:text-white",
    red: "bg-[#d6293e1a] text-[#d6293e] hover:bg-[#d6293e] hover:text-white ",
    blue: "bg-[#066ac9] text-white",
    green: "bg-[#c1f931] text-black",
    purple: "bg-[#5143d9] text-white",
  };
  const merged = clsx(
    "flex gap-x-2 rounded shadow-md items-center ",
    colorClass[color],
    sizesClass[size],
    typeClass[buttonType],
    className,
  );

  return (
    <Link href={`${page}`}>
      <button className={merged} {...props}>
        {icon}
        <p>{text}</p>
      </button>
    </Link>
  );
};

GlobalButton.displayName = "Button";
export default GlobalButton;
