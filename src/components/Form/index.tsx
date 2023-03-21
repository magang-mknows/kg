import { FC, ReactElement } from "react";
import { FormProps } from "./types";

const Form: FC<FormProps> = ({ children, onSubmit, className }): ReactElement => {
  return (
    <form className={"w-full flex flex-col " + className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
