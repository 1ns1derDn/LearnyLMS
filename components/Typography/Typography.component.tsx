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
  headline1: consolas.className,
  headline2: helvetica.className,
  text1: helvetica.className,
  text2: helvetica.className,
  text3: helvetica.className,
  text4: helvetica.className,
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
