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

export interface SelectFieldProps {
  className: string;
  children: ReactNode;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  name: string;
  label: string;
  defaultValue: string;
  // options: [];
  options: OptionFieldProps[];
}

export interface OptionFieldProps {
  value: string;
  title: string;
  className: string;
  
}
