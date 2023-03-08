/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, Controller } from "react-hook-form";
import { UploadFieldProps } from "../Common/types";
import { ReactElement, useState } from "react";
import UploadField from "../Common/UploadField";

type ControlledUploadInputProps<T> = UploadFieldProps & {
  control: Control<any, T>;
};

const ControlledUploadField = <T,>({ ...rest }: ControlledUploadInputProps<T>): ReactElement => {
  const [get, set] = useState("");
  return (
    <Controller
      control={rest.control}
      name={rest.name}
      rules={{ required: rest.required }}
      render={({ field, fieldState: { error } }) => (
        <UploadField
          {...rest}
          fileName={get}
          onChange={(event) => {
            field.onChange(event.target.files);
            // set(event.target.value.replace('"\\"'));
            set(event.target?.files?.[0].name as string);
          }}
          error={error?.message}
        />
      )}
    />
  );
};

export default ControlledUploadField;
