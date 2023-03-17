import { FC, ReactElement, useCallback, useState } from "react";
import { useController } from "react-hook-form";
import { UploadFieldProps } from "../Common/types";
import UploadDragbleField from "../Common/UploadDragbleField";

const ControlledUploadDragbleField: FC<UploadFieldProps> = (props): ReactElement => {
  const { field } = useController({ ...props, rules: { required: props.required } });
  const [type, setType] = useState("");
  const onDrop = useCallback(
    (acceptedFiles: Array<File>) => {
      field.onChange(acceptedFiles[0]);
      setType(acceptedFiles[0]?.type);
    },
    [field],
  );
  return <UploadDragbleField {...props} type={type} path={field.value} onDrop={onDrop} />;
};

export default ControlledUploadDragbleField;
