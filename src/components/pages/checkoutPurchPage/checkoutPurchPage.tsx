import React from "react";
import { PaymentsForm } from "src/components/paymentsForm";
import { BackBlock } from "src/components/ui/backBlock";
export const CheckoutPurchPage = () => {
  return (
    <div>
      <BackBlock />
      <PaymentsForm buttonText={"Попробуйте сейчас за $0.99"} />
    </div>
  );
};
