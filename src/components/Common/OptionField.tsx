import { FC, ReactElement } from "react";
import { OptionFieldProps } from "./types";

const OptionField: FC<OptionFieldProps> = ({ className, value, label }): ReactElement => {
  return (
    <option value={value} className={className}>
      {label}
    </option>
  );
};

export default OptionField;
