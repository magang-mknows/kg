import { FC, Fragment, ReactElement } from "react";
import { RadioButtonsProps } from "./types";

const CheckBoxField: FC<RadioButtonsProps> = ({
  id,
  value,
  name,
  classNameInput,
  htmlFor,
  classNameLabel,
  onChange,
  label,
}): ReactElement => {
  return (
    <Fragment>
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        className={classNameInput}
        onChange={onChange}
      />
      <label htmlFor={htmlFor} className={classNameLabel}>
        {label}
      </label>
    </Fragment>
  );
};

export default CheckBoxField;
