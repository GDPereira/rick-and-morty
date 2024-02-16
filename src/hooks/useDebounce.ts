import { useEffect, useState } from "react";

export const useDebounce = (callback: (text: string) => void) => {
  const [debouncedInputValue, setDebouncedInputValue] = useState<string>("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      callback(debouncedInputValue);
    }, 800);
    return () => clearTimeout(timeoutId);
  }, [debouncedInputValue]);

  return {
    debouncedInputValue,
    setDebouncedInputValue,
  };
};
