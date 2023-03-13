/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ReactElement } from "react";
import { useController } from "react-hook-form";
import SelectField from "../Common/SelectField";
import { SelectFieldProps } from "../Common/types";

const ControlledSelectField: FC<SelectFieldProps> = (props): ReactElement => {
  const {
    field,
    fieldState: { error },
  } = useController(props);
  return <SelectField {...props} {...field} error={error?.message} />;
};

export default ControlledSelectField;
