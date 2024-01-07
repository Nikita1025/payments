import React from "react";
import { PaymentsForm } from "src/components/paymentsForm";
import { BackBlock } from "src/components/ui/backBlock";
import s from "./checkoutTrialSubPage.module.scss";
export const CheckoutTrialSubPage = () => {
  return (
    <div className={s.container}>
      <BackBlock />
      <PaymentsForm buttonText={"Попробуйте сейчас за $6.99"} />
    </div>
  );
};
