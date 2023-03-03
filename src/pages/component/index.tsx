import CheckboxField from "@/components/Common/CheckboxField";
import GlobalButton from "@/components/Common/GlobalButton";
import TextField from "@/components/Common/TextField";
import { ReactElement } from "react";

const Test = (): ReactElement => {
  return (
    <>
      <GlobalButton>Versi 1</GlobalButton>
      <GlobalButton>Versi 2</GlobalButton>

      <>
        <TextField type={"number"} label={""} name={""} placeholder={""} />
        <TextField type={"number"} label={""} name={""} placeholder={""} />
        <TextField type={"number"} label={""} name={""} placeholder={""} />
        <TextField type={"number"} label={""} name={""} placeholder={""} />
      </>

      <>
        <CheckboxField name={""} required={false} />
      </>
    </>
  );
};

export default Test;
