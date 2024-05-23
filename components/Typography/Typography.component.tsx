import { ElementType } from "react";
import { TypographyProps } from "./Typography.types";
import styles from "./Typography.module.css";

import cn from "classnames";

const defaultElement = "div";

const fonts = {
  Headline1: font.className,
  Headline2: font.className,
  Text1: font.className,
  Text2:font.className,
  Text3: font.className,
  Text4: font.className,
};

export function Typography<E extends ElementType = typeof defaultElement>({
  children,
  as,
  variant,
  className,
  ...otherProps
}: TypographyProps<E>) {
  const TagName = as || defaultElement;

  return (
    <TagName
      className={cn(fonts[variant], styles[variant], styles.Shared, className)}
      {...otherProps}
    >
      {children}
    </TagName>
  );
}
