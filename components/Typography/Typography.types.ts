import { ComponentProps, ElementType, ReactNode } from "react";

export type VariantTypes = "headline1" | "headline2" | "text1" | "text2" | "text3" | "text4";

export type TypographyOwnProps<E extends ElementType = ElementType> = {
  children?: ReactNode;
  as?: E;
  variant?: VariantTypes;
  className?: string;
};

export type TypographyProps<E extends ElementType> = TypographyOwnProps<E> &
  Omit<ComponentProps<E>, keyof TypographyOwnProps>;
