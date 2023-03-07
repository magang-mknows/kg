import { ReactElement, FC, forwardRef, Ref } from "react";
import { RiErrorWarningFill, RiCheckFill } from "react-icons/ri";
import { UploadFieldProps } from "./types";

const UploadField: FC<UploadFieldProps> = forwardRef(
  (props, ref: Ref<HTMLInputElement>): ReactElement => {
    return (
      <section className="flex flex-col gap-y-4">
        {props.hasLabel && (
          <label htmlFor={props.name} className={"font-medium text-neutral-800 text-1xl"}>
            {props.label} {props.required && <span className="text-red-700 font-bold">*</span>}
          </label>
        )}
        <input
          {...props}
          ref={ref}
          type="file"
          className={`${
            props.error &&
            !props.warning &&
            !props.success &&
            "focus:outline-1 focus:ring-red-600 focus:border-1 bg-red-50 border-2 border-red-600"
          }

          ${
            props.success &&
            !props.warning &&
            !props.error &&
            "focus:outline-1 focus:ring-green-600 focus:border-1 bg-green-50 border-2 border-green-600"
          }
          
          ${
            props.warning &&
            !props.success &&
            !props.error &&
            "focus:outline-1 focus:ring-yellow-600 focus:border-1 bg-yellow-50 border-2 border-yellow-600"
          }
          
          ${
            !props.warning &&
            !props.error &&
            !props.success &&
            "focus:outline-1 focus:ring-primary-600 focus:border-1 border-2 border-neutral-300"
          }

             rounded-lg p-4 outline-none focus:outline-none
          `}
        />

        {props.error && (
          <div className="flex items-center w-full gap-x-1">
            <RiErrorWarningFill className="text-secondary-red-700" />
            <span className="text-warning-700">{props.error}</span>
          </div>
        )}

        {props.warning && (
          <div className="flex items-center w-full gap-x-1">
            <RiErrorWarningFill className="text-secondary-yellow-600" />
            <span className="text-secondary-yellow-600">{props.warning}</span>
          </div>
        )}

        {props.success && (
          <div className="flex items-center w-full gap-x-1">
            <RiCheckFill className="text-secondary-green-500" />
            <span className="text-secondary-green-500">{props.success}</span>
          </div>
        )}
      </section>
    );
  },
);

UploadField.displayName = "UploadField";
export default UploadField;
