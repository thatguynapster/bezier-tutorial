import { useEffect, useState } from "react";
import router from "next/router";

export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

export function useDebouncer(value: string, time = 250) {
  const [debounceValue, setDebounceValue] = useState<string>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, time]);

  return debounceValue;
}
