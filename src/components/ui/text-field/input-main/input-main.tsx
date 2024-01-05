import React, { ChangeEvent, ComponentProps } from "react";

import s from "./input-main.module.scss";

type UIInputPropsType = {
  value?: string;
  label?: string;
  errorMessage?: string;
  onChangeText?: (value: string) => void;
  isRequired?: boolean;
} & ComponentProps<"input">;

export const InputMain: React.FC<UIInputPropsType> = (props) => {
  const {
    type = "text",
    disabled,
    onChangeText,
    errorMessage,
    label,
    placeholder,
    value,
    isRequired,
    ...rest
  } = props;

  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeText && onChangeText(e.currentTarget.value);
  };

  const showErrorMess = errorMessage && errorMessage.length > 0;

  return (
    <div className={s.textFieldWrap}>
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
