import { FC, ReactElement } from "react";
import { FormProps } from "./types";

const Form: FC<FormProps> = ({ children, onSubmit }): ReactElement => {
  return (
    <form className={"w-full"} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
