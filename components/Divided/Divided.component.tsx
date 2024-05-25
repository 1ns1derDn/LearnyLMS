// libs
import React from "react";
import cn from "classnames";

//types
import { DividedProps } from "./Divided.types";

//styles
import styles from "./Divided.module.css";

export function Divided({ className, ...otherProps }: DividedProps) {
  return <div className={cn([className, styles.divided])} {...otherProps}></div>;
}
