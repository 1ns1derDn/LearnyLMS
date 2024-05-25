// libs
import React from "react";
import cn from "classnames";

//types
import { LogoProps } from "./Logo.types";

//svg
import LogoIcon from "./icons/logo.svg";

//styles
import styles from "./Logo.module.css";

export function Logo({ className, ...otherProps }: LogoProps) {
  return (
    <div className={cn([className, styles.logo])} {...otherProps}>
      <LogoIcon className={styles.logoIcon} />
    </div>
  );
}
