import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import s from "./button.module.scss";

export type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = "button">(
  props: ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
) => {
  const { className, children, as: Component = "button", ...rest } = props;

  return (
    <Component className={`${s.default} ${className}`} {...rest}>
      {children}
    </Component>
  );
};
