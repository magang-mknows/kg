import { Control, Controller } from "react-hook-form";
import CheckboxField from "../Common/CheckboxField";
import { CheckboxFieldProps } from "../Common/types";

type ControlledCheckboxFieldProps<T> = CheckboxFieldProps & {
  control: Control<any, T>;
  options?: { label: string; value: string | number | boolean }[];
  name: string;
  required?: boolean;
  hasDelete?: boolean;
  onDelete?(): void;
};

const ControlledCheckboxField = <T,>({
  label,
  control,
  name,
  options,
  ...rest
}: ControlledCheckboxFieldProps<T>) => {
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
