import { FC, Fragment, ReactElement } from "react";
import { TextFieldProps } from "./types";

const TextField: FC<TextFieldProps> = ({
  label,
  disabled,
  required,
  type,
  value,
  error,
  name,
  placeholder,
  className,
  labelClassName,
}): ReactElement => {
  return (
    <Fragment>
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
      />
      <span className="text-red-400">{error}</span>
    </Fragment>
  );
};

export default TextField;
