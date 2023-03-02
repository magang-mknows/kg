import { FC, forwardRef, ReactElement, Ref } from "react";
import { TextFieldProps } from "./types";
import { RiErrorWarningFill, RiCheckFill } from "react-icons/ri";

const TextField: FC<TextFieldProps> = forwardRef(
  (
    {
      type,
      placeholder,
      error,
      label,
      name,
      value,
      onChange,
      disabled = false,
      success,
      warning,
      hasLabel,
    }: TextFieldProps,
    ref: Ref<HTMLInputElement>,
  ): ReactElement => {
    return (
      <section className="flex flex-col gap-y-1 my-2">
        {hasLabel && (
          <label htmlFor={name} className={"font-medium text-neutral-800 text-1xl"}>
            {label}
          </label>
        )}
        <input
          value={value}
          type={type}
          name={name}
          disabled={disabled}
          className={`${
            error &&
            !warning &&
            !success &&
            "focus:outline-1 focus:ring-red-600 focus:border-1 bg-red-50 border-2 border-red-600"
          }

          ${
            success &&
            !warning &&
            !error &&
            "focus:outline-1 focus:ring-red-600 focus:border-1 bg-red-50 border-2 border-red-600"
          }
          
          ${
            warning &&
            !success &&
            !error &&
            "focus:outline-1 focus:ring-red-600 focus:border-1 bg-red-50 border-2 border-red-600"
          }
          
          ${
            !warning &&
            !error &&
            !success &&
            "focus:outline-1 focus:ring-primary-600 focus:border-1 border-2 border-neutral-300"
          }

             rounded-lg p-4 outline-none focus:outline-none
          `}
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

        {warning && (
          <div className="flex items-center w-full gap-x-1">
            <RiErrorWarningFill className="text-secondary-yellow-600" />
            <span className="text-secondary-yellow-600">{error}</span>
          </div>
        )}

        {success && (
          <div className="flex items-center w-full gap-x-1">
            <RiCheckFill className="text-secondary-green-500" />
            <span className="text-secondary-green-500">{error}</span>
          </div>
        )}
      </section>
    );
  },
);
TextField.displayName = "TextField";
export default TextField;
