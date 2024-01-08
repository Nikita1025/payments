import React from "react";
import { PaymentsForm } from "src/components/paymentsForm";
import { BackBlock } from "src/components/ui/backBlock";
import s from "./checkoutSubPage.module.scss";
export const CheckoutSubPage = () => {
  return (
    <div className={s.container}>
      <BackBlock />
      <PaymentsForm price={"499"} buttonText={"Попробуйте сейчас за $4.99"} />
    </div>
  );
};
