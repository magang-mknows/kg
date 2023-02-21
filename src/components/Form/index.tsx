import { FC, ReactElement } from "react";
import { FormProps } from "./types";

const Form: FC<FormProps> = ({ className, children, onSubmit }): ReactElement => {
  return (
    <form className={className} onSubmit={() => onSubmit}>
      {children}
    </form>
  );
};

export default Form;
