import { ReactElement } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import CheckboxField from "../Common/CheckboxField";
import { CheckboxFieldProps } from "../Common/types";

type ControlledCheckboxFieldProps<T> = CheckboxFieldProps & {
  control: Control<FieldValues, T>;
  options?: { label: string; value: string | number | boolean }[];
  name: string;
  required?: boolean;
};

const ControlledCheckboxField = <T,>({
  label,
  control,
  name,
  ...rest
}: ControlledCheckboxFieldProps<T>): ReactElement => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <CheckboxField
          {...field}
          {...rest}
          label={label}
          error={error?.message}
          value={(field.value as unknown as never) || undefined}
        />
      )}
    />
  );
};

export default ControlledCheckboxField;
