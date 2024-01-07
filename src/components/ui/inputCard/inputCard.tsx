import React from "react";
// stripe
import { CardElement } from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: "rubik, sans-serif",
      fontWeight: "700",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export const CardInput = () => {
  return <CardElement options={CARD_ELEMENT_OPTIONS} />;
};
