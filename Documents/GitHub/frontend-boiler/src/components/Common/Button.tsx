import { FC, Fragment, ReactElement } from "react";
import Link from "next/link";
import type { ButtonProps } from "@/utilities/interfaces/index";

const Button: FC<ButtonProps> = ({
  text,
  className,
  page,
  icon,
  disabled,
  onClick,
  type,
}): ReactElement => {
  return (
    <Fragment>
      {page === undefined ? (
        <button type={type} onClick={onClick} disabled={disabled} className={className}>
          {icon}
          <p>{text}</p>
        </button>
      ) : (
        <Link href={`${page}`}>
          <button type={type} onClick={onClick} disabled={disabled} className={className}>
            {icon}
            <p>{text}</p>
          </button>
        </Link>
      )}
    </Fragment>
  );
};

export default Button;
