import { ChangeEvent, FC } from "react";

import { IFormGroup } from "../types";

export const FormGroup: FC<IFormGroup> = ({
  type,
  className,
  value,
  id,
  name,
  prependIcon,
  prependIconContainerClass,
  onPrependClicked,
  appendIcon,
  appendIconContainerClass,
  onAppendClicked,
  label,
  placeholder,
  disabled,
  readOnly,
  passValidation,
  failedValidation,
  onValueChanged,
  onFocusOut,
}) => {
  return (
    <div className="flex flex-col box-border w-full p-0 font-medium text-xs">
      {label && (
        <label htmlFor={id} className="w-full text-gray-caption p-0 mb-1">
          {label}
        </label>
      )}

      <div
        className={`flex flex-row items-center justify-center ${
          disabled && "bg-gray-background"
        } rounded-lg relative`}
      >
        {prependIcon && (
          <span
            className={`absolute left-0 rounded-l-lg flex items-center justify-center w-12 h-full p-4 ${prependIconContainerClass}`}
            onClick={onPrependClicked}
          >
            {prependIcon}
          </span>
        )}
        <input
          id={id}
          className={`border outline-none text-sm w-full focus:ring-2 ${className} ${
            prependIcon ? "pl-14" : ""
          } ${appendIcon ? "pr-14" : ""} ${
            disabled ? "border-none text-gray-caption" : ""
          }  ${passValidation ? "border-success-main" : ""} ${
            failedValidation ? "border-danger-main" : ""
          }`}
          value={value}
          type={type}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          onChange={(ev: ChangeEvent<HTMLInputElement>) => {
            onValueChanged(ev);
          }}
          onBlur={(ev: ChangeEvent<HTMLInputElement>) => {
            onFocusOut(ev);
          }}
        />

        {appendIcon && (
          <span
            className={`absolute right-0 rounded-r-lg flex items-center justify-center w-12 h-full p-4 group ${appendIconContainerClass}`}
            onClick={onAppendClicked}
          >
            {appendIcon}
          </span>
        )}
      </div>
    </div>
  );
};

export default FormGroup;
