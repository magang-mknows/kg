import { FC, forwardRef, Fragment, ReactElement, Ref } from "react";
import { SelectFieldProps } from "./types";
import OptionField from "./OptionField";

const SelectField: FC<SelectFieldProps> = forwardRef(
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
      defaultValue,
      options,
      className,
    }: SelectFieldProps,
    ref: Ref<HTMLSelectElement>,
  ): ReactElement => {
    return (
      <Fragment>
        <label htmlFor={name} className={labelClassName}>
          {label}
        </label>
        <select
          required={required}
          className={className}
          onChange={onChange}
          value={value}
          name={name}
          defaultValue={defaultValue}
          disabled={disabled}
          ref={ref}
        >
          {options.map((option, index) => (
            <OptionField
              key={index}
              value={option.value}
              label={option.label}
              className={option.className}
            />
          ))}
        </select>
        <span className="text-red-400">{error}</span>
      </Fragment>
    );
  },
);

SelectField.displayName = "SelectField";
export default SelectField;
