import clsx from "clsx";
import { forwardRef } from "react";

type ButtonVariant = "outline" | "solid" | "ghost";

interface ButtonOptions {
  /**
   * Button display variants
   * @default "solid"
   * @type ButtonVariant
   */
  variant?: ButtonVariant;
}

type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;

const getVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case "outline":
      return "btn-outline";
    case "ghost":
      return "btn-ghost";
    default:
      return undefined;
  }
};

const GlobalButton = forwardRef<Ref, ButtonProps>((props, ref) => {
  const { type = "button", variant = "solid", className, children, ...rest } = props;

  const merged = clsx(
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    getVariant(variant),
    className,
  );
  return (
    <button ref={ref} className={merged} {...rest}>
      {children}
    </button>
  );
});

GlobalButton.displayName = "Button";
export default GlobalButton;
