import React, { ChangeEvent, useState } from "react";
import s from "./paymentsForm.module.scss";
import { Button } from "src/components/ui/button";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { Input } from "src/components/ui/input";
import { CardInput } from "src/components/ui/inputCard";
import { Snackbar } from "src/components/ui/snackbar ";
import { ApplePay } from "src/components/pays/applePay";
import { ProgressBar } from "src/components/ui/progressBar";

type PaymentsFormType = {
  buttonText: string;
  plan: "day" | "month" | "trialPeriod";
};
export const PaymentsForm = ({ buttonText, plan }: PaymentsFormType) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [statusRes, setStatusRes] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleSubmitSub = async () => {
    if (!stripe || !elements) {
      return;
    }
    if (statusRes !== "") {
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: {
            email: email,
          },
        },
      });
      if (result.error) {
        setIsOpen(true);
        setStatus(result.error.message!);
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      }
    } else if (email.length < 5) {
      setIsOpen(true);
      setStatus("Введите почту");
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } else {
      const result = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)!,
        billing_details: {
          email: email,
        },
      });

      if (result.error) {
        setIsOpen(true);
        setStatus(result.error.message!);
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      } else {
        const payload = {
          email: email,
          payment_method: result.paymentMethod.id,
          plan_id:
            (plan === "day" && "price_1OWXzmCH3dnwWZ7m3ymPe11u") ||
            (plan === "month" && "price_1OWZ3GCH3dnwWZ7mCbHNZyvE") ||
            (plan === "trialPeriod" && "price_1OWZ56CH3dnwWZ7mGG2xODSL"),
        };
        setIsLoading(true);
        const res = await axios.post(
          "https://983z5d-4242.csb.app/sub",
          payload,
        );

        const { client_secret, status } = res.data;

        if (status === "requires_action") {
          setStatusRes(status);
          setClientSecret(client_secret);
          stripe.confirmCardPayment(client_secret);
          setIsLoading(false);
        } else {
          setIsLoading(false);
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
      {isLoading && <ProgressBar />}
      {isOpen && <Snackbar message={status} />}
      <span className={s.title}>Оплата картой</span>
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
      <Button onClick={handleSubmitSub}>
        <span>{buttonText}</span>
      </Button>
    </div>
  );
};
