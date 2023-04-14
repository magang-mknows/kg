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
      required,
      className,
    }: TextFieldProps,
    ref: Ref<HTMLInputElement>,
  ): ReactElement => {
    return (
      <section className="flex flex-col my-2 gap-y-1">
        {label && (
          <label htmlFor={name} className={"font-medium text-neutral-800 text-left text-1xl "}>
            {label} {required && <span className="font-bold text-red-700">*</span>}
          </label>
        )}
        <input
          value={value}
          type={type}
          name={name}
          disabled={disabled}
          className={`
          ${
            error &&
            !warning &&
            !success &&
            "focus:border-[1px] focus:border-red-600 border-red-600  bg-red-50 border-[1px]"
          }

          ${
            error &&
            !warning &&
            success &&
            "focus:border-[1px] focus:border-red-600 border-red-600  bg-red-50 border-1"
          }

          ${
            success &&
            !warning &&
            !error &&
            "focus:border-[1px] focus:border-green-400 border-green-400  bg-green-50 border-[1px]"
          }
          
          ${
            warning &&
            !success &&
            !error &&
            "focus:border-[1px] focus:border-yellow-600 border-yellow-600 bg-yellow-50 border-[1px]"
          }
          
          ${
            !warning &&
            !error &&
            !success &&
            "focus:border-2 focus:border-neutral-300 bg-neutral-100"
          }
          ${className}
            rounded-lg p-3 outline-none focus:outline-none
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
