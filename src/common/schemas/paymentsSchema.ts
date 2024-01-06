import { z } from "zod";

export const paymentsSchema = () => {
  return z.object({
    cardNumber: z
      .string({ required_error: "Обязательное поле" })
      .trim()
      .nonempty("Обязательное поле"),
    expirationDate: z
      .string({ required_error: "Обязательное поле" })
      .trim()
      .nonempty("Обязательное поле"),
    CVC: z
      .string({ required_error: "Обязательное поле" })
      .trim()
      .nonempty("Обязательное поле"),
  });
};
