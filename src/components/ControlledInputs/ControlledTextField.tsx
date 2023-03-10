/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, Controller } from "react-hook-form";
import TextField from "@/components/Common/TextField";
import { TextFieldProps } from "../Common/types";
import { ReactElement } from "react";

type ControlledTextInputProps<T> = TextFieldProps & {
  control: Control<any, T>;
};

const ControlledTextField = <T,>({
  control,
  name,
  required,
  value,
  ...rest
}: ControlledTextInputProps<T>): ReactElement => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...rest}
          error={error?.message}
          value={value || (field.value as unknown as never)}
        />
      )}
    />
  );
};

export default ControlledTextField;
