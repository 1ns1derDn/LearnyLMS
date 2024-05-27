// libs
import React from "react";
import cn from "classnames";

//types
import { PaperProps } from "./Paper.types";

//styles
import styles from "./Paper.module.css";

export function Paper({ className, children, ...otherProps }: PaperProps) {
  return (
    <div className={cn([styles.paper, className])} {...otherProps}>
      {children}
    </div>
  );
}
