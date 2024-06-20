"use client";

import { RowTypes } from "./AvailableToGenerate.types";
import styles from "./AvailableToGenerate.module.css";
import { Typography, Checkbox, InputNumber } from "@/components";
import Image from "next/image";
import cn from "classnames";
import { useState } from "react";

export const Row = ({ display_name, topics, amount, changeAmount, index }: RowTypes) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Image
            className={styles.arrow}
            onClick={() => setVisible((prev) => !prev)}
            src="/icons/arrrow.png"
            width={25}
            height={25}
            alt="arrow"
          />
          <div>
            <Typography className={cn(styles.color, styles.topic)} variant="text3">
              {`Тема ${index + 1}. ${display_name}`}
            </Typography>
          </div>
        </div>
        <div className={styles.col}>
          <Typography className={styles.topicCount} variant="text3"></Typography>
        </div>
        <div className={styles.col}></div>
      </div>
      <div>
        {visible && (
          <>
            {topics.map(({ available_for_generation, display_name, key }) => {
              return (
                <Typography className={cn(styles.color, styles.subtopic)} variant="text3" key={key}>
                  <div
                    className={cn(styles.col, styles.pl, {
                      [styles.disabled]: !available_for_generation,
                    })}
                  >
                    <span>{`Подтема ${index + 1}. ${display_name}`}</span>
                  </div>
                  <div className={styles.col} />
                  <Typography className={cn(styles.col, styles.subtopicCount)} variant="text3">
                    {available_for_generation && (
                      <InputNumber
                        getAmount={(val) => changeAmount(key, val)}
                        value={amount.filter(({ task_type }) => task_type === key)[0].amount}
                      />
                    )}
                  </Typography>
                </Typography>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
