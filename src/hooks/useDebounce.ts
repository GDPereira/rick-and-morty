import { useEffect, useState } from "react";

export const useDebounce = (
  setDebouncedInputValue: (text: string) => void,
  timer: number = 500
) => {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, timer);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  return {
    inputValue,
    setInputValue,
  };
};
