import { ChangeEventHandler, FC, Fragment, ReactElement } from "react";

interface RadioButtonProps {
  id: string;
  value: string;
  name: string;
  classNameInput?: string;
  htmlFor: string;
  classNameLabel?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label: string;
}

const RadioButton: FC<RadioButtonProps> = ({
  id,
  value,
  name,
  classNameInput = "",
  htmlFor,
  classNameLabel = "",
  onChange,
  label,
}): ReactElement => {
  return (
    <Fragment>
      <input
        role="radio"
        id={id}
        type="radio"
        value={value}
        name={name}
        className={`appearance-none h-4 w-4 border border-gray-300 rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${classNameInput}`}
        onChange={onChange}
      />
      <label htmlFor={htmlFor} className={`ml-2 text-sm text-gray-700 ${classNameLabel}`}>
        {label}
      </label>
    </Fragment>
  );
};

export default RadioButton;
