//Organisms
import { Aside } from "@/organisms/Aside";

//Components
import { Breadcrumbs } from "@/components";

import "../styles/global.css";

import styles from "./RootLayout.module.css";

import { helvetica } from "@/fonts/fonts";

import { AnswerProvider } from "@/context/userAnswer.context";

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={helvetica.className}>
        <AnswerProvider>
          <div className={styles.wrapper}>
            <div className={styles.background}>
              <Aside className={styles.aside} />
              <div className={styles.main}>
                <Breadcrumbs
                  breadcrumbs={[{ label: "Главная " }, { label: "Тематический кодификатор" }]}
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
