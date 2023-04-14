import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  icon?: ReactNode;
  text: string | number;
  className?: string;
  to?: string;
  page?: string;
  target?: string;
}
