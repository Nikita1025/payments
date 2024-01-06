import React from "react";
import s from "./paymentsForm.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";

import { ControlledInput } from "src/common/controlled";
import { Button } from "src/components/ui/button";
import { useForm } from "react-hook-form";
import { paymentsSchema } from "src/common/schemas";
import { ApplePayIcon } from "src/assets/icons/applePayIcon";
import { PayPalIcon } from "src/assets/icons/payPalIcon";

type PaymentsFormType = {
  buttonText: string;
};
export const PaymentsForm = ({ buttonText }: PaymentsFormType) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: zodResolver(paymentsSchema()),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitData = (data: any) => {
    console.log(data);
  };
  return (
    <div className={s.container}>
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

      <form onSubmit={handleSubmit(submitData)}>
        <ControlledInput
          control={control}
          label={"Card Number"}
          name={"cardNumber"}
          placeholder={"1234 1234 1234 1234"}
          maxLength={16}
          className={s.input}
        />
        <div className={s.input_block}>
          <ControlledInput
            control={control}
            label={"Expiration Date"}
            name={"expirationDate"}
            placeholder={"ММ / ГГ"}
            maxLength={5}
          />
          <ControlledInput
            label={"CVC Code"}
            control={control}
            name={"CVC"}
            placeholder={"CVC"}
            maxLength={3}
          />
        </div>

        <Button type={"submit"}>
          <span>{buttonText}</span>
        </Button>
      </form>
    </div>
  );
};
