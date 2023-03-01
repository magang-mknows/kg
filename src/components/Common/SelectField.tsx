import { FC, forwardRef, Fragment, ReactElement, Ref } from "react";
import { SelectFieldProps } from "./types";
import OptionField from "./OptionField";
import { RiErrorWarningFill } from "react-icons/ri";

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
        {error && (
          <div className="flex items-center w-full gap-x-1">
            <RiErrorWarningFill className="text-red-600" />
            <span className="text-red-600">{error}</span>
          </div>
        )}
      </Fragment>
    );
  },
);

SelectField.displayName = "SelectField";
export default SelectField;
