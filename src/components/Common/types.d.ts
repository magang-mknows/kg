import { HTMLInputTypeAttribute, ReactNode } from "react";

export interface TextFieldProps {
  type: HTMLInputTypeAttribute;
  label: string;
  name: string;
  placeholder: string
  required: boolean
}

export interface SelectFieldProps {
  className: string;
  children: ReactNode;
}

export interface OptionFieldProps {
  value: string;
  title: string;
  className: string;
}
