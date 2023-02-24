import { FC, forwardRef, ReactElement, Ref } from "react";
import { CheckboxFieldProps } from "./types";

const CheckboxField: FC<CheckboxFieldProps> = forwardRef(
  (
    {
      error,
      required,
      label,
      name,
      value,
      onChange,
      disabled = false,
      labelClassName,
      className,
      checked,
    }: CheckboxFieldProps,
    ref: Ref<HTMLInputElement>,
  ): ReactElement => {
    return (
      <section className="flex flex-col">
        <div className="flex justify-center gap-x-4">
          <input
            type="checkbox"
            name={name}
            value={value}
            className={className}
            required={required}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            ref={ref}
          />
          <label htmlFor={name} className={labelClassName}>
            {label}
          </label>
        </div>
        <span className="text-red-400">{error}</span>
      </section>
    );
  },
);

CheckboxField.displayName = "CheckboxField";
export default CheckboxField;
