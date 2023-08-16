import { ReactNode } from "react";

export interface IFormGroup {
  type: string;
  id: string;
  name?: string;
  label?: string;
  prependIcon?: ReactNode;
  prependIconContainerClass?: string;
  onPrependClicked?: (ev: any) => void;
  appendIcon?: ReactNode;
  appendIconContainerClass?: string;
  onAppendClicked?: (ev: any) => void;
  placeholder?: string;
  value?: string | number;
  disabled?: boolean;
  readOnly?: boolean;
  passValidation?: boolean;
  failedValidation?: boolean;
  className?: string;
  onValueChanged: Function;
  onFocusOut: Function;
  autofocus?: boolean;
  min?: number | string;
  max?: number | string;
  editable?: boolean;
  isRequired?: boolean;
}
