import React from "react";
import { Button } from "src/components/ui/button";
import s from "./mainPage.module.scss";
export const MainPage = () => {
  return (
    <div className={s.container}>
      <span className={s.title}>Оформление подписки</span>
      <div className={s.container_button}>
        <div className={s.info_block}>
          <span>Одноразовая покупка $0.99</span>
          <Button>
            <span className={s.text}>Подписаться</span>
          </Button>
        </div>
        <div className={s.info_block}>
          <span>Месячная подписка $4.99</span>
          <Button>
            <span className={s.text}>Подписаться</span>
          </Button>
        </div>
        <div className={s.info_block}>
          <span>Триальный период $6</span>
          <Button>
            <span className={s.text}>Подписаться</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
