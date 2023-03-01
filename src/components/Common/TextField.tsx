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
        <label htmlFor={name} className={"font-[500] text-neutral-900"}>
          {label}
        </label>
        <input
          value={value}
          type={type}
          name={name}
          disabled={disabled}
          className={
            error
              ? "rounded-lg block w-full p-2.5 bg-red-50 border border-red-600 outline-none focus:ring-2 focus:ring-red-600"
              : "rounded-lg block w-full p-2.5 bg-gray-50 border border-blue-300 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
          }
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
        />
        {error && (
          <div className="flex items-center w-full gap-x-1">
            <RiErrorWarningFill className="text-red-600" />
            <span className="text-red-600">{error}</span>
          </div>
        )}
      </section>
    );
  },
);
TextField.displayName = "TextField";
export default TextField;
