// libs
import React from "react";
import cn from "classnames";

//types
import { ThematicCodifierProps } from "./ThematicCodifier.types";

//styles
import styles from "./ThematicCodifier.module.css";

//organisms
import { Panel } from "@/organisms";
export function ThematicCodifier({ className, children, ...otherProps }: ThematicCodifierProps) {
  return (
    <div className={cn([className, styles.thematicCodifier])} {...otherProps}>
      <Panel />
    </div>
  );
}
