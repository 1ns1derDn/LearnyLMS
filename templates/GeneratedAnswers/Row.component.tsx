"use client";

import styles from "./GeneratedAnswers.module.css";
import { useState } from "react";
import cn from "classnames";

interface RowTypes {
  task: string;
  answer: string;
  index: number;
}

export const Row = ({ answer, task, index }: RowTypes) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.task}>{`Задача ${index + 1}`}</div>
      <div
        className={cn(styles.content, { [styles.mb]: visible })}
        dangerouslySetInnerHTML={{
          __html: task,
        }}
      />
      {visible && <div className={styles.answer}> {`Ответ: ${answer}`}</div>}
      <button className={styles.button} onClick={() => setVisible((prev) => !prev)}>
        {!visible ? "Посмотреть ответ" : "Скрыть ответ"}
      </button>
    </div>
  );
};
