import { FC, forwardRef, ReactElement, Ref } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { CheckboxFieldProps } from "./types";

const CheckboxField: FC<CheckboxFieldProps> = forwardRef(
  (
    { error, required, label, name, value, onChange, disabled, checked }: CheckboxFieldProps,
    ref: Ref<HTMLInputElement>,
  ): ReactElement => {
    return (
      <section className="flex flex-col">
        <div className="flex justify-start gap-x-4 items-center">
          <input
            type="checkbox"
            name={name}
            value={value}
            className={
              "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            }
            required={required}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            ref={ref}
            id={name}
          />
          <label htmlFor={name} className={"font-medium text-neutral-800 text-1xl"}>
            {label}
          </label>
        </div>
        {error && (
          <div className="flex items-center w-full gap-x-1">
            <RiErrorWarningFill className="text-red-600" />
            <span className="text-red-600">{error}</span>
          </div>
        )}
      </section>
    );
  },
);

CheckboxField.displayName = "CheckboxField";
export default CheckboxField;
