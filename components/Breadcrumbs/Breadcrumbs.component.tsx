// libs
import { ElementType } from "react";
import cn from "classnames";

// types
import { BreadcrumbsProps } from "./Breadcrumbs.types";

// styles
import styles from "./Breadcrumbs.module.css";

//fonts
import { helvetica } from "@/fonts";

export function Breadcrumbs({ breadcrumbs, ...otherProps }: BreadcrumbsProps) {
  return (
    <ul className={styles.list} {...otherProps}>
      {breadcrumbs.map(({ label }, index) => (
        <li className={cn(styles.item, helvetica.className)} key={index}>
          {label}
        </li>
      ))}
    </ul>
  );
}
