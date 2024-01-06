import React from "react";
import { PaymentsForm } from "src/components/paymentsForm";
import { BackBlock } from "src/components/ui/backBlock";
export const CheckoutSubPage = () => {
  return (
    <div>
      <BackBlock />
      <PaymentsForm buttonText={"Попробуйте сейчас за $4.99"} />
    </div>
  );
};
