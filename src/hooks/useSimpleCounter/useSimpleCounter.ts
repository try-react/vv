import { useState, useCallback } from "react";

export const useSimpleCounter = () => {
  const [count, setCount] = useState(0);
  const countUp = useCallback(() => setCount(count + 1), [count]);

  return {
    count,
    countUp,
  };
};

export type Props = ReturnType<typeof useSimpleCounter>;
