import React from "react";
import { PaymentsForm } from "src/components/paymentsForm";
import { BackBlock } from "src/components/ui/backBlock";
import s from "./checkoutPurchPage.module.scss";
export const CheckoutPurchPage = () => {
  return (
    <div className={s.container}>
      <BackBlock />
      <PaymentsForm price={"99"} buttonText={"Попробуйте сейчас за $0.99"} />
    </div>
  );
};
