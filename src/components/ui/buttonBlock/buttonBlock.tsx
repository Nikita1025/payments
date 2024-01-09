import React from "react";
import s from "./buttonBlock.module.scss";
import { Button } from "src/components/ui/button";
type ButtonBlockType = {
  subscription: string;
  onClick: () => void;
  buttonText: string;
};
export const ButtonBlock = ({
  subscription,
  buttonText,
  onClick,
}: ButtonBlockType) => {
  return (
    <div className={s.info_block}>
      <span className={s.subscription}>{subscription}</span>
      <Button onClick={onClick}>
        <span>{buttonText}</span>
      </Button>
    </div>
  );
};
