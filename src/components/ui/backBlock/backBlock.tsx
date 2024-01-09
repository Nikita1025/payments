import React from "react";
import s from "./backBlock.module.scss";
import { VectorLeft } from "src/assets/icons/vectorLeft";
import { useNavigate } from "react-router-dom";
import { PATH } from "src/app/routes";
export const BackBlock = () => {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(PATH.MAIN);
  };
  return (
    <div className={s.back_block} onClick={onClickBack}>
      <VectorLeft />
      <span>Назад</span>
    </div>
  );
};
