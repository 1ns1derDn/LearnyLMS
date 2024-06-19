"use client";
// libs
import React, { useState } from "react";
import cn from "classnames";

//types
import { IFromThematicCodifierData, ThematicCodifierProps } from "./ThematicCodifier.types";

//styles
import styles from "./ThematicCodifier.module.css";
//organisms
import { Panel } from "@/organisms";
import { Divided, Paper, Typography } from "@/components";
import { Row } from "./Row.component";
import { http } from "@/core/axios";
import { useAnswer } from "@/context/userAnswer.context";
import { useRouter } from "next/navigation";

export function ThematicCodifier({
  className,
  children,
  data,
  ...otherProps
}: ThematicCodifierProps) {
  const { setAnswer } = useAnswer();
  const { push } = useRouter();

  const [formData, setFormData] = useState<IFromThematicCodifierData[]>(
    data.map((item) => ({ section_id: item.section_id, amount: 0, included_topics: [] }))
  );

  const checkDisabled = () => {
    return !formData.some(
      ({ amount, included_topics }) => amount > 0 && included_topics.length > 0
    );
  };

  const onReset = () => {
    setFormData(
      data.map((item) => ({ section_id: item.section_id, amount: 0, included_topics: [] }))
    );
  };

  const sumAmoun = (array: IFromThematicCodifierData[]) => {
    return array.reduce((sum, elem) => {
      return (sum += elem.amount);
    }, 0);
  };

  const changeAmount = (section_id: number, amount: number) => {
    setFormData((prev) =>
      prev.map((item) => {
        if (item.section_id === section_id) {
          return {
            ...item,
            amount,
          };
        }
        return item;
      })
    );
  };

  const changeTopics = (section_id: number, id: number) => {
    setFormData((prev) =>
      prev.map((item) => {
        if (item.section_id === section_id) {
          let included_topics = [...item.included_topics];

          if (included_topics.includes(id)) {
            included_topics = included_topics.filter((item) => item !== id);
            return {
              ...item,
              included_topics,
            };
          } else {
            included_topics.push(id);
            return {
              ...item,
              included_topics,
            };
          }
        }
        return item;
      })
    );
  };

  const onSubmit = async () => {
    try {
      const response = await http.post("/api/v1/codifier/create-test/", formData);
      setAnswer({ tasks: response.data?.tasks, test_id: response.data?.test_id } as any);
      push("/generated-answers");
    } catch (error) {
      console.log(error);
    }
  };

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
          {data.map((row, index) => (
            <Row
              changeTopics={changeTopics}
              changeAmount={changeAmount}
              {...formData[index]}
              key={index}
              {...row}
              index={index}
            />
          ))}
        </div>
      </Paper>
      <Panel
        onSubmit={onSubmit}
        onReset={onReset}
        counter={sumAmoun(formData)}
        isDisabled={checkDisabled()}
      />
    </div>
  );
}
