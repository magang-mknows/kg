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
  value?: string;
};

const ControlledTextField = <T,>({
  label,
  type = "text",
  control,
  placeholder,
  name,
  disabled,
  required,
  value,
  ...rest
}: ControlledTextInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...rest}
          ref={field.ref}
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

export default ControlledTextField;
