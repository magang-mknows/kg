import { FC, ReactElement } from "react";
import { OptionFieldProps } from "./types";

const OptionField: FC<OptionFieldProps> = ({ className, value, title }): ReactElement => {
  return (
    <option value={value} className={className}>
      {title}
    </option>
  );
};

export default OptionField;
