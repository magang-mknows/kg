import { FC, forwardRef, Fragment, ReactElement, Ref } from "react";
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
      <Fragment>
        <label htmlFor={name} className={labelClassName}>
          {label}
        </label>
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
        <span className="text-red-400">{error}</span>
      </Fragment>
    );
  },
);

CheckboxField.displayName = "CheckboxField";
export default CheckboxField;
