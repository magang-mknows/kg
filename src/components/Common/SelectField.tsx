import { FC, Fragment, ReactElement } from "react";
import { SelectFieldProps } from "./types";
import OptionField from "./OptionField";

const SelectField: FC<SelectFieldProps> = ({
  className,
  children,
  onChange,
  value,
  name,
  label,
  defaultValue,
  options,
  labelClassName,
}): ReactElement => {
  return (
    <Fragment>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <select
        className={className}
        onChange={onChange}
        value={value}
        name={name}
        defaultValue={defaultValue}
      >
        {children}
        {options.map((option, index) => (
          <OptionField
            key={index}
            value={option.value}
            label={option.label}
            className={option.className}
          />
        ))}
      </select>
    </Fragment>
  );
};

export default SelectField;
