import {
  ChangeEventHandler,
  ForwardedRef,
  HTMLInputTypeAttribute,
  ReactNode,
  RefObject,
} from "react";

export interface TextFieldProps {
  type: HTMLInputTypeAttribute;
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  value?: string;
  className?: string;
  labelClassName?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  ref?: RefObject;
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
  error?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  value: string;
  name: string;
  label: string | ReactNode;
  defaultValue: string;
  required?: boolean;
  disabled?: boolean;
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
  htmlFor: string;
  classNameLabel?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
}

export interface CheckboxFieldProps {
  className?: string;
  labelClassName?: string;
  name: string;
  value?: string;
  placeholder?: string;
  required: boolean;
  label?: string;
  checked?: boolean;
  error?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface CardProps {
  className?: string;
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
  titleStyle?: string;
  imgwidth?: number;
  imgheight?: number;
  src?: StaticImport;
  topText?: string;
  hasImage: boolean;
}
