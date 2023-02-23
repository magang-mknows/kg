import { FormEvent, ReactNode } from "react";

export interface FormProps {
  className?: string;
  children: ReactNode;
  onSubmit?: FormEvent<HTMLFormElement>;
}
