import React, { ChangeEvent, useState } from "react";
import s from "./paymentsForm.module.scss";
import { Button } from "src/components/ui/button";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { Input } from "src/components/ui/input";
import { CardInput } from "src/components/ui/inputCard";
import { Snackbar } from "src/components/ui/snackbar ";
import { ApplePay } from "src/components/pays/applePay";

type PaymentsFormType = {
  buttonText: string;
  price: string;
};
export const PaymentsForm = ({ buttonText, price }: PaymentsFormType) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleSubmitPay = async () => {
    if (!stripe || !elements) {
      return;
    }

    if (email.length < 5) {
      setIsOpen(true);
      setStatus("Введите почту");
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } else {
      const res = await axios.post("https://983z5d-4242.csb.app/pay", {
        email,
        price,
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
    }
  };

  return (
    <div className={s.container}>
      {isOpen && <Snackbar message={status} />}
      <div className={s.pay_block}>
        <ApplePay />
      </div>
      <Input
        required
        placeholder={"Введите почту"}
        type={"email"}
        onChange={handleChange}
      />
      <CardInput />
      <Button onClick={handleSubmitPay}>
        <span>{buttonText}</span>
      </Button>
    </div>
  );
};
