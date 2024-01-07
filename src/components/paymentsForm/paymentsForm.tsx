import React, { useState } from "react";
import s from "./paymentsForm.module.scss";
import { Button } from "src/components/ui/button";
import { ApplePayIcon } from "src/assets/icons/applePayIcon";
import { PayPalIcon } from "src/assets/icons/payPalIcon";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { Input } from "src/components/ui/input";
import { CardInput } from "src/components/ui/inputCard";
import { Snackbar } from "src/components/ui/snackbar ";

type PaymentsFormType = {
  buttonText: string;
};
export const PaymentsForm = ({ buttonText }: PaymentsFormType) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const handleSubmitPay = async () => {
    if (!stripe || !elements) {
      return;
    }

    const res = await axios.post("https://983z5d-5000.csb.app/pay", {
      email,
    });

    const clientSecret = res.data["client_secret"];

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          email,
        },
      },
    });

    if (result.error) {
      setIsOpen(true);
      setStatus(result.error.message!);
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        setIsOpen(true);
        setStatus("Оплачено");
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      }
    }
  };

  return (
    <div className={s.container}>
      {isOpen && <Snackbar message={status} />}
      <div className={s.pay_block}>
        <Button className={s.apple_pay}>
          <ApplePayIcon />
          <span className={s.pay}>Pay</span>
        </Button>
        <Button className={s.pay_pal}>
          <PayPalIcon />
          <span className={s.pay}>Pay Pal</span>
        </Button>
      </div>
      <Input
        required
        placeholder={"Введите почту"}
        type={"email"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CardInput />
      <Button onClick={handleSubmitPay}>
        <span>{buttonText}</span>
      </Button>
    </div>
  );
};
