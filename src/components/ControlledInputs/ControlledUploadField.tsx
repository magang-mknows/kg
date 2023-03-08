/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, Controller } from "react-hook-form";
import { UploadFieldProps } from "../Common/types";
import { ReactElement } from "react";
import UploadField from "../Common/UploadField";

type ControlledUploadInputProps<T> = UploadFieldProps & {
  control: Control<any, T>;
};

const ControlledUploadField = <T,>({ ...rest }: ControlledUploadInputProps<T>): ReactElement => {
  return (
    <Controller
      control={rest.control}
      name={rest.name}
      rules={{ required: rest.required }}
      render={({ field, fieldState: { error } }) => (
        <UploadField
          {...rest}
          onChange={(event) => field.onChange(event.target.files)}
          error={error?.message}
        />
      )}
    />
  );
};

export default ControlledUploadField;
