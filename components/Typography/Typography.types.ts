import { ComponentProps, ElementType, ReactNode } from "react";

type VariantTypes = "Headline1" | "Headline2" | "Text1" | "Text2" | "Text3" | "Text4";

export type TypographyOwnProps<E extends ElementType = ElementType> = {
  children?: ReactNode;
  as?: E;
  variant: VariantTypes;
  className?: string;
};

export type TypographyProps<E extends ElementType> = TypographyOwnProps<E> &
  Omit<ComponentProps<E>, keyof TypographyOwnProps>;
