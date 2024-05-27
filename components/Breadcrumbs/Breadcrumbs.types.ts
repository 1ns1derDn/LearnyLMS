import { HTMLAttributes } from "react";

export interface BreadcrumbItemProps extends HTMLAttributes<HTMLElement> {
  label: string;
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  breadcrumbs: BreadcrumbItemProps[];
}
