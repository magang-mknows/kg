/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from "react";
import { Control, Controller } from "react-hook-form";
import SelectField from "../Common/SelectField";
import { SelectFieldProps } from "../Common/types";

type ControlledSelectFieldProps<T> = SelectFieldProps & {
  control: Control<any, T>;

  options?: { label: string; value: string | number | boolean }[];
  name: string;
  mode?: "multiple" | "tags";
  value?: string;
  required?: boolean;

};

const ControlledSelectField = <T,>({
  label,
  control,
  name,
  hasLabel,
  options,
  value,
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
          onChange={(event) => {
            field.onChange(event.target.value);
          }}
          label={label}
          hasLabel={hasLabel}
          error={error?.message}
          value={value || (field.value as unknown as never)}
          options={options}
        />
      )}
    />
  );
};

export default ControlledSelectField;
