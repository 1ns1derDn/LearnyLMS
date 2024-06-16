"use client";
// react
import React, { createContext, useState, useContext, Dispatch } from "react";

export interface ITask {
  description: string;
  answer: string;
}

export interface IUseAnswer {
  test_id: string;
  tasks: ITask[];
  setAnswer: Dispatch<React.SetStateAction<IUseAnswer | undefined>>;
}

const AnswerContext = createContext<IUseAnswer>({} as IUseAnswer);

export const AnswerProvider = ({ children }: React.PropsWithChildren) => {
  const [asnwer, setAnswer] = useState<IUseAnswer>();

  return (
    <AnswerContext.Provider value={{ ...asnwer, setAnswer } as IUseAnswer}>
      {children}
    </AnswerContext.Provider>
  );
};

export const useAnswer = () => useContext(AnswerContext);
