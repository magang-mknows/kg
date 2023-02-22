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
  className?: string;
  labelClassName?: string;
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
  label: string;
  className?: string;
}

export type DropdownProps = {
  children: ReactNode;
  list: Array<{
    icon: ReactNode;
    text: string;
  }>;
};

export interface RadioButtonsProps {
  id?: string;
  value: string;
  name?: string;
  classNameInput?: string;
  htmlFor: string
  classNameLabel?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}
