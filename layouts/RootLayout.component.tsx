//Organisms
import { Aside } from "@/organisms/Aside";

import "../styles/global.css";
import styles from "./RootLayout.module.css";
export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.wrapper}>
          <div className={styles.background}>
            <Aside className={styles.aside} />
            <div className={styles.main}>
              <div className={styles.breadcrums} />
              <div className={styles.content}>{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
