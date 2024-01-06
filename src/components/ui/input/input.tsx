import React, { ChangeEvent, ComponentProps } from "react";

import s from "./input.module.scss";

export type UIInputPropsType = {
  errorMessage?: string;
  label?: string;
  fullWidth?: boolean;
  className?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  isRequired?: boolean;
} & ComponentProps<"input">;

export const Input: React.FC<UIInputPropsType> = (props) => {
  const {
    type = "text",
    disabled,
    onChangeText,
    errorMessage,
    label,
    placeholder,
    value,
    isRequired,
    className,
    ...rest
  } = props;

  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeText && onChangeText(e.currentTarget.value);
  };

  const showErrorMess = errorMessage && errorMessage.length > 0;

  return (
    <div className={`${s.textFieldWrap} ${className}`}>
      <label className={`${s.label} ${disabled && s.disabledLabel}`}>
        {label}
        {isRequired && <span className={s.star}>*</span>}
      </label>
      <input
        type={"text"}
        value={value}
        onChange={onchangeHandler}
        placeholder={placeholder && placeholder}
        disabled={disabled}
        {...rest}
        className={`${s.textField} ${errorMessage && s.errorInput} ${
          disabled && s.disabledInput
        }`}
      />
      {showErrorMess && <span className={s.errorWrap}>{errorMessage}</span>}
    </div>
  );
};
