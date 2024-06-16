"use client";

import { RowTypes } from "./AvailableToGenerate.types";
import styles from "./ThematicCodifier.module.css";
import { Typography, Checkbox, InputNumber } from "@/components";
import Image from "next/image";
import cn from "classnames";
import { useState } from "react";

export const Row = ({ display_name, topics, number }: RowTypes) => {
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
              {`Тема ${number + 1}. ${display_name}`}
            </Typography>
          </div>
        </div>
        <div className={styles.col}>
          <Typography className={styles.topicCount} variant="text3"></Typography>
        </div>
        <div className={styles.col}>
          <InputNumber />
        </div>
      </div>
      <div>
        {visible && (
          <>
            {topics.map(({ available_for_generation, display_name, key }, index) => (
              <Typography className={cn(styles.color, styles.subtopic)} variant="text3" key={index}>
                <div
                  className={cn(styles.col, styles.pl, {
                    [styles.disabled]: available_for_generation,
                  })}
                >
                  <span>{`Подтема ${index + 1}. ${display_name}`}</span>{" "}
                  <Checkbox
                    name={key}
                    className={styles.checkbox}
                    disabled={available_for_generation}
                  />
                </div>
                <Typography
                  className={cn(styles.col, styles.subtopicCount)}
                  variant="text3"
                ></Typography>
              </Typography>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
