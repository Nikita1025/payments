import React from "react";
import s from "./mainPage.module.scss";
import { useNavigate } from "react-router-dom";
import { PATH } from "src/app/routes";
import { ButtonBlock } from "src/components/ui/buttonBlock";
export const MainPage = () => {
  const navigate = useNavigate();
  const onClickCheckoutPurch = () => {
    navigate(PATH.CHECKOUT_PURCH);
  };
  const onClickCheckoutSub1 = () => {
    navigate(PATH.CHECKOUT_SUB1);
  };
  const onClickCheckoutTrialSub = () => {
    navigate(PATH.CHECKOUT_TRAIL_SUB);
  };
  return (
    <div className={s.container}>
      <span className={s.title}>Оформление подписки</span>
      <div className={s.container_button}>
        <ButtonBlock
          onClick={onClickCheckoutPurch}
          buttonText={"Подписаться"}
          subscription={"Одноразовая покупка $0.99"}
        />
        <ButtonBlock
          onClick={onClickCheckoutSub1}
          buttonText={"Подписаться"}
          subscription={"Месячная подписка $4.99"}
        />
        <ButtonBlock
          onClick={onClickCheckoutTrialSub}
          buttonText={"Подписаться"}
          subscription={"Триальный период $6"}
        />
      </div>
    </div>
  );
};
