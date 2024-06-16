"use client";

// libs
import React, { LegacyRef, forwardRef, useEffect, useState } from "react";
import cn from "classnames";

//types
import { InputNumberProps } from "./InputNumber.types";

//styles
import styles from "./InputNumber.module.css";
import Image from "next/image";

export const InputNumber = forwardRef(function (
  { className, children, value: valueForm, getAmount, ...otherProps }: InputNumberProps,
  ref: LegacyRef<HTMLInputElement>
) {
  const [value, setValue] = useState<number>(Number(valueForm));

  const increment = () => {
    if (value + 1 > 50) return;
    setValue((prev) => prev + 1);
  };

  const discrement = () => {
    if (value - 1 < 0) return;
    setValue((prev) => prev - 1);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    if (Number(val) > 50) return;
    if (!Number(val) && val !== "") return;
    if (val === "") return setValue(0);
    if (Number(val) < 0) return;
    setValue(Number(val));
  };

  useEffect(() => {
    getAmount(value);
  }, [value]);

  return (
    <div className={cn([className, styles.wrapper])} {...otherProps}>
      <input ref={ref} className={styles.input} onChange={onChange} value={value} />
      <button className={styles.increment} onClick={increment}>
        <Image src="/icons/arrow-top.png" height={7} width={11} alt="arrow" />
      </button>
      <button className={styles.discrement} onClick={discrement}>
        <Image src="/icons/arrow-bottom.png" height={7} width={11} alt="arrow" />
      </button>
    </div>
  );
});

InputNumber.displayName = "InputNumber";
