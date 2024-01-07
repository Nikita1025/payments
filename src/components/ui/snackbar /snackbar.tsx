import React, { ReactNode } from "react";
import s from "./snackbar.module.scss";

type SnackbarType = {
  message: string;
};
export const Snackbar = ({ message }: SnackbarType) => {
  return (
    <div className={s.modal}>
      <div className={s.modal_content}>
        <span className={s.message}>{message}</span>
      </div>
    </div>
  );
};
