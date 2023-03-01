import { FC, forwardRef, ReactElement, Ref } from "react";
import { TextFieldProps } from "./types";
import { RiErrorWarningFill } from "react-icons/ri";

const TextField: FC<TextFieldProps> = forwardRef(
  (
    { type, placeholder, error, label, name, value, onChange, disabled = false }: TextFieldProps,
    ref: Ref<HTMLInputElement>,
  ): ReactElement => {
    return (
      <section className="flex flex-col gap-y-2">
        <label htmlFor={name} className={"font-[500] text-neutral-900 text-1xl"}>
          {label}
        </label>
        <input
          value={value}
          type={type}
          name={name}
          disabled={disabled}
          className={""}
          placeholder={placeholder}
          onChange={onChange}
          ref={ref}
        />
        {error && (
          <div className="flex items-center w-full gap-x-1">
            <RiErrorWarningFill className="text-secondary-red-700" />
            <span className="text-warning-700">{error}</span>
          </div>
        )}
      </section>
    );
  },
);
TextField.displayName = "TextField";
export default TextField;
