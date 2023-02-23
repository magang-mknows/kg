import type { ButtonHTMLAttributes, FC, ReactElement, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit";
  text?: string | number;
  className?: string;
  size?: "small" | "regular" | "large";
  color?: "blue" | "lightBlue" | "green" | "black";
  to?: string;
  page?: string;
  icon?: ReactNode;
  target?: string;
}

const GlobalButton: FC<ButtonProps> = ({
  type = "button",
  text,
  className,
  page,
  size = "regular",
  color = "black",
  icon,
  ...props
}): ReactElement => {
  const typeClass = {
    button: {},
    submit: {},
  };
  const sizesClass = {
    large: "px-12 py-24 text-base",
    regular: "px-8 py-16 text-base",
    small: "py-2 px-4 text-sm",
  };

  const colorClass = {
    blue: "bg-[#066ac9] text-white hover:opacity-75 ",
    lightBlue: "bg-[#066ac91a] text-blue-600 hover:opacity-75 ",
    green: "bg-[#c1f931] text-black hover:opacity-75 ",
    black: "bg-[#24292D] text-white hover:opacity-75 ",
  };
  const merged = clsx(
    "flex gap-x-2 rounded-md shadow-md items-center",
    colorClass[color],
    sizesClass[size],
    typeClass[type],
    className,
  );

  return (
    <Link href={`${page}`}>
      <button type={type} className={merged} {...props}>
        {icon}
        <p>{text}</p>
      </button>
    </Link>
  );
};

GlobalButton.displayName = "Button";
export default GlobalButton;
