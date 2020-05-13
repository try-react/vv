import React, { FC, useState, useCallback } from "react";

export const EasyCounter: FC = () => {
  const [count, setCount] = useState(0);
  const countUp = useCallback(() => setCount(count + 1), [count]);

  return (
    <>
      <h2>簡単なコンポーネント</h2>
      <ul>
        <li>useStateを、内包しているComponent</li>
        <li>pages/index.tsxから、propsで何も貰わない</li>
      </ul>

      <div className="count-area">
        <p>カウント: {count}</p>
        <button type="button" onClick={countUp}>
          カウントアップ
        </button>
      </div>
    </>
  );
};
