// libs
import React from "react";
import cn from "classnames";

//types
import { AsideProps } from "./Aside.types";

//styles
import styles from "./Aside.module.css";

//component
import { Paper, Logo, Divided, Typography } from "@/components";
import { Nav } from "@/modules";

export function Aside({ className, ...otherProps }: AsideProps) {
  return (
    <Paper className={cn([styles.aside, className])} {...otherProps}>
      <Logo className={styles.logo} />
      <Divided />
      <div className={styles.wrapper}>
        <Typography className={styles.title} variant="headline2">
          РАЗДЕЛЫ
        </Typography>
        <Divided variant="secondary" className={styles.divided} />
        <Nav
          menu={[
            {
              href: "/thematic-codifier",
              label: "Каталог тем",
            },
            {
              href: "/available-to-generate",
              label: "Генератор задач",
            },
          ]}
        />
      </div>
    </Paper>
  );
}
