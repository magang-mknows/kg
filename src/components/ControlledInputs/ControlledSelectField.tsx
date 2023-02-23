import { Control, Controller } from "react-hook-form";
import SelectField from "../Common/SelectField";
import { SelectFieldProps } from "../Common/types";

type ControlledSelectFieldProps<T> = SelectFieldProps & {
  label: string;
  control: Control<any, T>;
  options?: { label: string; value: string | number | boolean }[];
  name: string;
  mode?: "multiple" | "tags";
  required?: boolean;
  hasDelete?: boolean;
  onDelete?(): void;
};

const ControlledSelectField = <T,>({
  label,
  control,
  name,
  options,
  hasDelete,
  onDelete,
  ...rest
}: ControlledSelectFieldProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <SelectField
          {...field}
          {...rest}
          label={label}
          error={error?.message}
          value={(field.value as unknown as never) || undefined}
          options={options}
        />
      )}
    />
  );
};

export default ControlledSelectField;
