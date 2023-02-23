import { ReactNode, FormEventHandler } from "react";

export interface FormProps {
  className?: string;
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}
