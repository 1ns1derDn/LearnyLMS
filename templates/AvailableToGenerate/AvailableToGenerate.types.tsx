import { HTMLAttributes } from "react";

export interface RowTypes {
  keyCheck: string;
  display_name: string;
  number: number;
  topics: [
    {
      key: string;
      display_name: string;
      available_for_generation: boolean;
    }
  ];
}

export interface TAvailableToGenerateProps extends HTMLAttributes<HTMLElement> {
  data: RowTypes[];
}
