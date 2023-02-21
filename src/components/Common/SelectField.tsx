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
}): ReactElement => {
  return (
    <Fragment>
      <label>{label}</label>
      <select
        className={className}
        onChange={onChange}
        value={value}
        name={name}
        defaultValue={defaultValue}
      >
        {children}
        <OptionField value="" title="" className="" />
      </select>
    </Fragment>
  );
};

export default SelectField;
