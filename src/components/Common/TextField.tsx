import { FC, forwardRef, ReactElement, Ref } from "react";
import { TextFieldProps } from "./types";

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
      labelClassName,
    }: TextFieldProps,
    ref: Ref<HTMLInputElement>,
  ): ReactElement => {
    return (
      <section className="flex flex-col gap-y-2">
        <label htmlFor={name} className={labelClassName}>
          {label}
        </label>
        <input
          value={value}
          type={type}
          name={name}
          disabled={disabled}
          className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
            error !== undefined && "ring-2 ring-red-600"
          }`}
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
        />
        <span className="text-red-400">{error}</span>
      </section>
    );
  },
);
TextField.displayName = "TextField";
export default TextField;
