import { HTMLInputTypeAttribute, ReactNode } from "react";

export interface TextFieldProps {
  type: HTMLInputTypeAttribute;
  label: string;
  name: string;
  placeholder: string;
  required: boolean;
}

export interface MobileMenuProps {
  list: {
    name: string;
    link: string;
  }[];
}
