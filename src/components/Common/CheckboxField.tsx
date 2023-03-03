import { FC, forwardRef, ReactElement, Ref } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { CheckboxFieldProps } from "./types";

const CheckboxField: FC<CheckboxFieldProps> = forwardRef(
  (
    {
      error,
      required,
      label,
      name,
      value,
      onChange,
      disabled = false,
      className,
      checked,
    }: CheckboxFieldProps,
    ref: Ref<HTMLInputElement>,
  ): ReactElement => {
    return (
      <section className="flex flex-col">
        <div className="flex justify-start gap-x-4">
          <input
            type="checkbox"
            name={name}
            value={value}
            className={className}
            required={required}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            ref={ref}
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
