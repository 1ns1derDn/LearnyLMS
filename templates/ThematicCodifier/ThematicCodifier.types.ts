import { HTMLAttributes } from "react";

export interface RowTypes {
  section_name: string;
  overall_task_amount: number;
  index: number;
  section_id: number;
  amount: number;
  included_topics: number[];
  changeAmount: (section_id: number, amount: number) => void;
  changeTopics: (section_id: number, value: number) => void;
  topics: [
    {
      topic_id: number;
      topic_name: string;
      task_amount: number;
    }
  ];
}

export interface IFromThematicCodifierData {
  section_id: number;
  amount: number;
  included_topics: number[];
}

export interface ThematicCodifierProps extends HTMLAttributes<HTMLElement> {
  data: [
    {
      section_id: number;
      section_name: string;
      overall_task_amount: number;
      topics: [
        {
          topic_id: number;
          topic_name: string;
          task_amount: number;
        }
      ];
    }
  ];
}
