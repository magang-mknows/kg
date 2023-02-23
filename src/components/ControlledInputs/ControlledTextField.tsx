import { Control, Controller } from "react-hook-form";
import TextField from "@/components/Common/TextField";
import { TextFieldProps } from "../Common/types";

type ControlledTextInputProps<T> = TextFieldProps & {
  type?: string;
  placeholder?: string;
  label: string;
  control: Control<any, T>;
  name: string;
  hasButton?: boolean;
  labelButton?: string;
  onClick?(): void;
  value?: string;
};

const ControlledTextInput = <T,>({
  label,
  type = "text",
  control,
  placeholder,
  name,
  disabled,
  hasButton,
  labelButton,
  onClick,
  value,
  ...rest
}: ControlledTextInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...rest}
          label={label}
          type={type}
          placeholder={placeholder}
          error={error?.message}
          value={value || (field.value as unknown as never)}
          disabled={disabled}
        />
      )}
    />
  );
};

export default ControlledTextInput;
