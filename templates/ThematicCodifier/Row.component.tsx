"use client";

import { RowTypes } from "./ThematicCodifier.types";
import styles from "./ThematicCodifier.module.css";
import { Typography, Checkbox, InputNumber } from "@/components";
import Image from "next/image";
import cn from "classnames";
import { useState } from "react";

export const Row = ({
  overall_task_amount,
  section_name,
  topics,
  index,
  changeAmount,
  changeTopics,
  amount,
  included_topics,
  section_id,
}: RowTypes) => {
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
              {`Тема ${index + 1}. ${section_name}`}
            </Typography>
          </div>
        </div>
        <div className={styles.col}>
          <Typography className={styles.topicCount} variant="text3">
            {overall_task_amount} шт.
          </Typography>
        </div>
        <div className={styles.col}>
          <InputNumber
            value={amount}
            getAmount={(amount) => {
              changeAmount(section_id, amount);
            }}
          />
        </div>
      </div>
      <div>
        {visible && (
          <>
            {topics.map(({ task_amount, topic_name, topic_id }, index) => (
              <Typography
                className={cn(styles.color, styles.subtopic)}
                variant="text3"
                key={topic_id}
              >
                <div className={cn(styles.col, styles.pl)}>
                  <span>{`Подтема ${index + 1}. ${topic_name}`}</span>
                  <Checkbox
                    className={styles.checkbox}
                    value={topic_id}
                    checked={included_topics.includes(topic_id)}
                    onChange={(e) => {
                      changeTopics(section_id, Number(e.currentTarget.value));
                    }}
                  />
                </div>
                <Typography className={cn(styles.col, styles.subtopicCount)} variant="text3">
                  {task_amount} шт.
                </Typography>
              </Typography>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
