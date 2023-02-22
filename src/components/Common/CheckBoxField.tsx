import React, { FC, Fragment, ReactElement } from "react";
import { CheckBoxFieldProps } from "./types";

const CheckBoxField: FC<CheckBoxFieldProps> = ({
  name,
  labelClassName,
  value,
  checkboxClassName,
  placeholder,
  required,
  label,
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
      />
    </Fragment>
  );
};

export default CheckBoxField;
