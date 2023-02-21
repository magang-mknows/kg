import { FC, ReactElement } from "react";
import { SelectFieldProps } from "./types";

const SelectField: FC<SelectFieldProps> = ({ className, children }): ReactElement => {
  return <select className={className}>{children}</select>;
};

export default SelectField;
