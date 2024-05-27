import { HTMLAttributes } from "react";

type DividedVariant = "primary" | "secondary";

export interface DividedProps extends HTMLAttributes<HTMLElement> {
  variant?: DividedVariant;
}
