// libs
import React from "react";
import cn from "classnames";
import Image from "next/image";

//types
import { RowTypes, TAvailableToGenerateProps } from "./AvailableToGenerate.types";

//styles
import styles from "./ThematicCodifier.module.css";
//organisms
import { Panel } from "@/organisms";
import { Divided, Paper, Typography } from "@/components";

import { Row } from "./Row.component";
export function AvailableToGenerate({
  className,
  children,
  data,
  ...otherProps
}: TAvailableToGenerateProps) {
  return (
    <div className={cn([className, styles.thematicCodifier])} {...otherProps}>
      <Paper className={styles.tables}>
        <div className={styles.head}>
          <div className={styles.col}>
            <Typography className={styles.title} variant="text1">
              Тема / Подтема
            </Typography>
          </div>
          <div className={styles.col}>
            <Typography className={styles.title} variant="text1"></Typography>
          </div>
          <div className={styles.col}>
            <Typography className={styles.title} variant="text1">
              Выбрать
            </Typography>
          </div>
        </div>
        <Divided />
        <div className={styles.body}>
          {data.map((row, index) => (
            <Row key={index} {...row} number={index + 1} />
          ))}
        </div>
      </Paper>
      <Panel />
    </div>
  );
}
