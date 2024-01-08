import React, { useEffect, useState } from "react";
import {
  PaymentRequestButtonElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export const ApplePay = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }

    const pr = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: "Demo total",
        amount: 1999,
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result) {
        // @ts-ignore
        setPaymentRequest(pr);
      }
    });

    pr.on("paymentmethod", async (e) => {
      const { error: backendError, clientSecret } = await fetch(
        "/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentMethodType: "card",
            currency: "usd",
          }),
        },
      ).then((r) => r.json());

      if (backendError) {
        console.log(backendError.message);
        return;
      }

      console.log("Client secret returned");

      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: e.paymentMethod.id,
          },
          { handleActions: false },
        );

      if (stripeError) {
        console.log(stripeError.message);
        return;
      }
      console.log(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);
    });
  }, [stripe, elements]);

  return (
    <>
      {paymentRequest && (
        <PaymentRequestButtonElement options={{ paymentRequest }} />
      )}
    </>
  );
};
