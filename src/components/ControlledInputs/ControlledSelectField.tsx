/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from "react";
import { Control, Controller } from "react-hook-form";
import SelectField from "../Common/SelectField";
import { SelectFieldProps } from "../Common/types";

type ControlledSelectFieldProps<T> = SelectFieldProps & {
  control: Control<any, T>;
};

const ControlledSelectField = <T,>({
  control,
  name,
  ...rest
}: ControlledSelectFieldProps<T>): ReactElement => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <SelectField
          {...field}
          {...rest}
          error={error?.message}
          value={(field.value as unknown as never) || undefined}
        />
      )}
    />
  );
};

export default ControlledSelectField;
