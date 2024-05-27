// libs
import React from "react";
import cn from "classnames";
import Image from "next/image";

//types
import { ThematicCodifierProps } from "./ThematicCodifier.types";

//styles
import styles from "./ThematicCodifier.module.css";
//organisms
import { Panel } from "@/organisms";
import { Checkbox, Divided, Paper, Typography } from "@/components";
export function ThematicCodifier({ className, children, ...otherProps }: ThematicCodifierProps) {
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
            <Typography className={styles.title} variant="text1">
              Количество заданий
            </Typography>
          </div>
          <div className={styles.col}>
            <Typography className={styles.title} variant="text1">
              Выбрать
            </Typography>
          </div>
        </div>
        <Divided />
        <div className={styles.body}>
          <div className={styles.row}>
            <div className={styles.col}>
              <Image src="/icons/arrrow.png" width={25} height={25} alt="arrow" />
              <div>
                <Typography className={cn(styles.color, styles.topic)} variant="text3">
                  Тема 1. Количественные параметры информационных объектов
                </Typography>
                <Typography className={cn(styles.color, styles.subtopic)} variant="text3">
                  <span>
                    Подтема 1. Кодировка, в которой каждый символ кодируется 8/16/32 битами
                  </span>
                  <Checkbox className={styles.checkbox} />
                </Typography>
              </div>
            </div>
            <div className={styles.col}>
              <Typography className={styles.topicCount} variant="text3">
                8 шт.
              </Typography>
              <Typography className={styles.subtopicCount} variant="text3">
                8 шт.
              </Typography>
            </div>
            <div className={styles.col}>
              <input type="number" />
            </div>
          </div>
        </div>
      </Paper>
      <Panel />
    </div>
  );
}
