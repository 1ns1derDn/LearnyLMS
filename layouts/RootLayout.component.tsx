"use client";
//Organisms
import { Aside } from "@/organisms/Aside";

//Components
import { Breadcrumbs } from "@/components";

import "../styles/global.css";

import styles from "./RootLayout.module.css";

import { helvetica } from "@/fonts/fonts";

import { AnswerProvider } from "@/context/userAnswer.context";

import { usePathname } from "next/navigation";

const path = {
  ["/thematic-codifier"]: "Тематический кодификатор",
  ["/available-to-generate"]: "Генератор задач",
  ["/generated-answers"]: "Вариант 1",
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={helvetica.className}>
        <AnswerProvider>
          <div className={styles.wrapper}>
            <div className={styles.background}>
              <Aside className={styles.aside} />
              <div className={styles.main}>
                <Breadcrumbs
                  breadcrumbs={[
                    { label: "Главная " },
                    // @ts-ignore
                    { label: path[pathname] },
                  ]}
                />
                <div className={styles.content}>{children}</div>
              </div>
            </div>
          </div>
          <div id="dialog" />
        </AnswerProvider>
      </body>
    </html>
  );
}
