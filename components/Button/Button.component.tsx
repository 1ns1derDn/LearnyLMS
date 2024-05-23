// libs
import { ElementType } from "react";
import cn from "classnames";

// types
import { ButtonProps } from "./Button.types";

// styles
import styles from "./Button.module.css";

//fonts
import { helvetica } from "../../fonts";

const defaultElement = "button";

export function Button<E extends ElementType = typeof defaultElement>({
  children,
  as,
  variant = "primary",
  className,
  Icon,
  ...otherProps
}: ButtonProps<E>) {
  const TagName = as || defaultElement;

  return (
    <TagName className={cn(styles[variant], helvetica.style.fontStyle, className)} {...otherProps}>
      {Icon}
      <span>{children}</span>
    </TagName>
  );
}
