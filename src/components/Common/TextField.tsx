import { FC, forwardRef, ReactElement, Ref } from "react";
import { TextFieldProps } from "./types";
import { RiErrorWarningFill } from "react-icons/ri";

const TextField: FC<TextFieldProps> = forwardRef(
  (
    { type, placeholder, error, label, name, value, onChange, disabled = false }: TextFieldProps,
    ref: Ref<HTMLInputElement>,
  ): ReactElement => {
    return (
      <section className="flex flex-col gap-y-2">
        <label htmlFor={name} className={"font-medium text-neutral-800 text-1xl"}>
          {label}
        </label>
        <input
          value={value}
          type={type}
          name={name}
          disabled={disabled}
          className={`${
            error
              ? "focus:outline-1 focus:ring-red-600 focus:border-1 bg-red-50 border-2 border-red-600"
              : "focus:outline-1 focus:outline-primary-600 border-2 border-primary-300"
          } rounded-lg p-4 outline-none focus:outline-none`}
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
        />
        {error && (
          <div className="flex items-center w-full gap-x-1">
            <RiErrorWarningFill className="text-secondary-red-700" />
            <span className="text-warning-700">{error}</span>
          </div>
        )}
      </section>
    );
  },
);
TextField.displayName = "TextField";
export default TextField;
