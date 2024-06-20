import { HTMLAttributes } from "react";

export interface RowTypes {
  display_name: string;
  changeAmount: (key: string, amount: number) => void;
  amount: IFromAvailableToGenerateData[];
  task_type: string;
  topics: [
    {
      key: string;
      display_name: string;
      available_for_generation: boolean;
    }
  ];
  index: number;
}

export interface IFromAvailableToGenerateData {
  task_type: string;
  amount: number;
}

export interface TAvailableToGenerateProps extends HTMLAttributes<HTMLElement> {
  data: RowTypes[];
}
