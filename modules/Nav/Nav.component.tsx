"use client";
// libs
import React from "react";
import cn from "classnames";
import Link from "next/link";

//types
import { NavProps } from "./Nav.types";

//styles
import styles from "./Nav.module.css";

//components
import { Typography } from "@/components";
import { usePathname } from "next/navigation";

export function Nav({ className, menu, ...otherProps }: NavProps) {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className={cn([className, styles.nav])} {...otherProps}>
      <ul className={styles.list}>
        {menu.map(({ label, href }, index) => {
          return (
            <li className={styles.item} key={index}>
              <Link href={href} passHref legacyBehavior>
                <Typography
                  className={cn([
                    styles.link,
                    {
                      [styles.active]: pathname.includes(href),
                    },
                  ])}
                  as="a"
                  variant="text4"
                >
                  {label}
                </Typography>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
