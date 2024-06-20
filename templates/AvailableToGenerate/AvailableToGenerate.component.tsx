"use client";
// libs
import React, { useState } from "react";
import cn from "classnames";

//types
import {
  IFromAvailableToGenerateData,
  TAvailableToGenerateProps,
} from "./AvailableToGenerate.types";

//styles
import styles from "./AvailableToGenerate.module.css";
//organisms
import { Panel } from "@/organisms";
import { Divided, Paper, Typography } from "@/components";

import { Row } from "./Row.component";
import { useAnswer } from "@/context/userAnswer.context";
import { http } from "@/core/axios";
import { useRouter } from "next/navigation";

export function AvailableToGenerate({
  className,
  children,
  data,
  ...otherProps
}: TAvailableToGenerateProps) {
  const { setAnswer } = useAnswer();
  const { push } = useRouter();

  const filterData = () => {
    //@ts-ignore
    return data.reduce((acc, item) => {
      const topics = item.topics.map(({ key, available_for_generation }) => ({
        task_type: key,
        amount: 0,
        available_for_generation,
      }));

      const newTopics = topics
        .filter(({ available_for_generation }) => available_for_generation)
        .map(({ available_for_generation, ...other }) => ({ ...other }));

      return [...acc, ...newTopics];
    }, []);
  };

  const [formData, setFormData] = useState<IFromAvailableToGenerateData[]>(
    filterData() as unknown as IFromAvailableToGenerateData[]
  );

  const isDisabled = () => !formData.some(({ amount }) => amount > 0);

  const onReset = () => {
    setFormData(filterData() as unknown as IFromAvailableToGenerateData[]);
  };

  const sumAmoun = (array: IFromAvailableToGenerateData[]) => {
    return array.reduce((sum, elem) => {
      return (sum += elem.amount);
    }, 0);
  };

  const changeAmount = (key: string, count: number) => {
    setFormData((prev) => {
      const copy = [...prev].map(({ amount, task_type }) => {
        if (task_type === key) {
          return {
            amount: count,
            task_type: task_type,
          };
        }

        return { amount, task_type };
      });

      return [...copy];
    });
  };

  const onSubmit = async () => {
    try {
      const response = await http.post("/api/v1/exercise/", formData);
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
          {data.map(({ topics, display_name }, index) => (
            <Row
              key={display_name}
              topics={topics}
              index={index}
              display_name={display_name}
              amount={formData}
              task_type={formData[index].task_type}
              changeAmount={changeAmount}
            />
          ))}
        </div>
      </Paper>
      <Panel
        counter={sumAmoun(formData)}
        onReset={onReset}
        isDisabled={isDisabled()}
        onSubmit={onSubmit}
      />
    </div>
  );
}
