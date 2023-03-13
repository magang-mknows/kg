import { useController } from "react-hook-form";
import { UploadFieldProps } from "../Common/types";
import { FC, ReactElement, useState } from "react";
import UploadField from "../Common/UploadField";

const ControlledUploadField: FC<UploadFieldProps> = (props): ReactElement => {
  const [get, set] = useState("");
  const {
    field,
    fieldState: { error },
  } = useController(props);
  return (
    <UploadField
      {...props}
      fileName={get}
      onChange={(event) => {
        field.onChange(event.target.files);
        set(event.target?.files?.[0]?.name as string);
      }}
      files={props.files || field.value}
      error={error?.message}
    />
  );
};

export default ControlledUploadField;
