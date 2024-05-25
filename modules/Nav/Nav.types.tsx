import { HTMLAttributes } from "react";

export interface ItemMenu {
  href: string;
  label: string;
}

export interface NavProps extends HTMLAttributes<HTMLElement> {
  menu: ItemMenu[];
}
