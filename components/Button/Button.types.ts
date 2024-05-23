import { ComponentProps, ElementType, ReactElement, ReactNode } from "react";

export type VariantTypes = "primary" | "secondary";

export type ButtonOwnProps<E extends ElementType = ElementType> = {
  children?: ReactNode;
  as?: E;
  variant?: VariantTypes;
  className?: string;
  Icon?: ReactElement;
};

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;
