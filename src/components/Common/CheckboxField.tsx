import { FC, Fragment, ReactElement } from "react";
import { CheckboxFieldProps } from "./types";

const CheckboxField: FC<CheckboxFieldProps> = ({
  name,
  labelClassName,
  value,
  checkboxClassName,
  placeholder,
  required,
  label,
  checked,
  error,
  onChange,
}): ReactElement => {
  return (
    <Fragment>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <input
        type="checkbox"
        name={name}
        value={value}
        className={checkboxClassName}
        placeholder={placeholder}
        required={required}
        checked={checked}
        onChange={onChange}
      />
      <span>{error}</span>
    </Fragment>
  );
};

export default CheckboxField;
