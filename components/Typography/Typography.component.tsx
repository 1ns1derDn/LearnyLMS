// libs
import { ElementType } from "react";
import cn from "classnames";

// types
import { TypographyProps, VariantTypes } from "./Typography.types";

// styles
import styles from "./Typography.module.css";

//fonts
import { consolas, helvetica } from "@/fonts";

const fontFamily: Record<VariantTypes, string> = {
  headline1: consolas.style.fontFamily,
  headline2: helvetica.style.fontFamily,
  text1: helvetica.style.fontFamily,
  text2: helvetica.style.fontFamily,
  text3: helvetica.style.fontFamily,
  text4: helvetica.style.fontFamily,
};

const defaultElement = "div";

export function Typography<E extends ElementType = typeof defaultElement>({
  children,
  as,
  variant = "headline1",
  className,
  ...otherProps
}: TypographyProps<E>) {
  const TagName = as || defaultElement;

  return (
    <TagName
      className={cn(styles[variant], fontFamily[variant], styles.Shared, className)}
      {...otherProps}
    >
      {children}
    </TagName>
  );
}
