import React from "react";
import { PaymentsForm } from "src/components/paymentsForm";
import { BackBlock } from "src/components/ui/backBlock";
export const CheckoutTrialSubPage = () => {
  return (
    <div>
      <BackBlock />
      <PaymentsForm buttonText={"Попробуйте сейчас за $6.99"} />
    </div>
  );
};
