// libs
import React from "react";
import cn from "classnames";

//types
import { PanelProps } from "./Panel.types";

//styles
import styles from "./Panel.module.css";

//component
import { Button, Typography } from "@/components";

//svg
import DeleteIcon from "@/public/icons/delete.svg";

export function Panel({ className, children, ...otherProps }: PanelProps) {
  return (
    <div className={cn([className, styles.panel])} {...otherProps}>
      <Button className={styles.create} variant="primary">
        Составить вариант
      </Button>
      <Typography variant="text2">Включить в вариант 10 заданий </Typography>
      <Button className={styles.delete} Icon={<DeleteIcon />} variant="secondary">
        Удалить все
      </Button>
    </div>
  );
}
