import { HTMLAttributes } from "react";

export interface PanelProps extends HTMLAttributes<HTMLElement> {
  counter: number;
  onReset: () => void;
  onSubmit: () => void;
}
