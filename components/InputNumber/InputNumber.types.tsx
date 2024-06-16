import { HTMLAttributes, InputHTMLAttributes } from "react";

export interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  getAmount: (amount: number) => void;
}
