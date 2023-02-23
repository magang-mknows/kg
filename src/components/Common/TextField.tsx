import { FC, forwardRef, ReactElement, Ref } from "react";
import { TextFieldProps } from "./types";

const TextField: FC<TextFieldProps> = forwardRef(
  (
    {
      type,
      placeholder,
      error,
      required,
      label,
      name,
      value,
      onChange,
      disabled = false,
      labelClassName,
      className,
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
          className={className}
          placeholder={placeholder}
          required={required}
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
