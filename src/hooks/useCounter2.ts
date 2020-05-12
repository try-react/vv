import { useState, useCallback } from "react";

export const useCounter2 = () => {
  const [count, setCount] = useState(0);
  const countUp = useCallback(() => setCount(count + 1), [count]);

  return {
    count,
    countUp,
  };
};

export type Props = ReturnType<typeof useCounter2>;
