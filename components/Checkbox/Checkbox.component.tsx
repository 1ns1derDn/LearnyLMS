// libs
import cn from "classnames";

// types
import { LabelProps } from "./Checkbox.types";

// styles
import styles from "./Checkbox.module.css";

export function Checkbox({ children, className, ...otherProps }: LabelProps) {
  return (
    <label className={cn(className, styles.label)}>
      <input type="checkbox" className={cn(styles.checkBox)} {...otherProps} />
      <span className={cn(styles.checkStyle)}>{children}</span>
    </label>
  );
}
