import React, { ComponentProps } from "react";
import { InputMain } from "src/components/ui/text-field/input-main";

import s from "./text-field.module.scss";

export type TextFieldPropsType = {
  errorMessage?: string;
  label?: string;
  fullWidth?: boolean;
  className?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  isRequired?: boolean;
} & ComponentProps<"input">;

export const TexField = ({
  value,
  errorMessage,
  className,
  fullWidth,
  isRequired,
  ...restProps
}: TextFieldPropsType) => {
  return (
    <div className={`${className} ${fullWidth ? s.fullWidth : ""}`}>
      <InputMain
        errorMessage={errorMessage}
        {...restProps}
        value={value ?? ""}
        isRequired={isRequired}
      />
    </div>
  );
};
