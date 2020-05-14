import React, { FC, useState, useCallback } from "react";

export const EasyCounter: FC = () => {
  const [count, setCount] = useState(0);
  const countUp = useCallback(() => setCount(count + 1), [count]);

  return (
    <>
      <h2>簡単なコンポーネント</h2>
      <ul>
        <li>useStateを、内包しているComponent</li>
      </ul>
      <div className="counter">
        <button
          type="button"
          onClick={countUp}
          data-testid="button"
          className="count-button"
        >
          カウントアップ
        </button>
        <p>
          カウント: <span data-testid="label">{count}</span>
        </p>
      </div>
    </>
  );
};
