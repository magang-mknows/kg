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
  size = "small", // regular
  color = "black",
  icon,
  hasImg,
  ...props
}): ReactElement => {
  const typeClass = {
    cta: "",
    auth: "", // !px-8
    scroll: "",
  };

  const sizesClass = {
    large: "px-24 py-12 text-base",
    regular: "px-16 py-8 text-base",
    base: "px-4 py-2 text-sm",
    small: "w-8 h-8 px-2 text-sm",
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
    "flex rounded items-center ",
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
          <div className="btn-icon">
            <Image src={icon as StaticImageData} className="text-black" alt="Icon" />
          </div>
        ) : (
          <div className="btn-icon">{icon as ReactNode}</div>
        )}
        <p>{text}</p>
      </button>
    </Link>
  );
};

GlobalButton.displayName = "Button";
export default GlobalButton;
