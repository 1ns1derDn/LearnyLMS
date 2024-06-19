"use client";
// libs
import React, { useEffect, useRef } from "react";
import cn from "classnames";

//types
import { TAvailableToGenerateProps } from "./GeneratedAnswers.types";

//styles
import styles from "./GeneratedAnswers.module.css";

//organisms
import { Button, Divided, Paper, Typography } from "@/components";
import { Row } from "./Row.component";
import { useAnswer } from "@/context/userAnswer.context";
import { Dialog } from "@/components/Dialog";
import { DialogRef } from "@/components/Dialog/Dialog.types";
import { http } from "@/core/axios";
import SVGIcon from "./icon.svg";
import SVGIconClose from "./icon-close.svg";
import { useRouter } from "next/navigation";

export function GeneratedAnswers({
  className,
  children,
  ...otherProps
}: TAvailableToGenerateProps) {
  const { tasks, test_id } = useAnswer();
  const controller = useRef<DialogRef>(null);
  const router = useRouter();

  const downloadFile = (url: string, name: string) => {
    http(`${url}${test_id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
      responseType: "blob",
    })
      .then((response) => new Blob([response.data]))
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${name}.pdf`);
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
      });
  };

  useEffect(() => {
    if (!test_id) {
      router.back();
    }
  }, [router, test_id]);

  return (
    <div className={cn([className, styles.generatedAnswers])} {...otherProps}>
      <Paper className={styles.tables}>
        <div className={styles.head}>
          <Typography variant="text1">Вариант 1</Typography>
          <Button
            className={styles.donwload}
            variant="primary"
            onClick={() => {
              controller.current?.open();
            }}
          >
            Экспортировать в <strong>PDF</strong>
          </Button>
        </div>
        <Divided />
        <div className={styles.body}>
          {tasks?.map(({ answer, description }, index) => (
            <Row index={index} answer={answer} task={description} key={index} />
          ))}
        </div>
      </Paper>
      <Dialog ref={controller}>
        <Paper className={styles.paper}>
          <SVGIconClose className={styles.close} onClick={() => controller.current?.close()} />
          <div>
            <button
              className={styles.donwloadBtn}
              onClick={() => downloadFile("/api/v1/export/answers/", "Вариант В PDF")}
            >
              <SVGIcon />
              <span>Вариант В PDF</span>
            </button>
            <button
              className={styles.donwloadBtn}
              onClick={() => downloadFile("/api/v1/export/test/", "ключ PDF")}
            >
              <SVGIcon /> <span>ключ PDF</span>
            </button>
          </div>
        </Paper>
      </Dialog>
    </div>
  );
}
