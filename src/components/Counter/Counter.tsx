import React, { FC, useState, useCallback } from "react";

export const Counter: FC = () => {
  const [count, setCount] = useState(0);
  const countUp = useCallback(() => setCount(count + 1), [count]);

  return (
    <>
      <h2>Counter</h2>
      <ul>
        <li>useStateを、内包しているComponent</li>
        <li>pagesから、propsで何も貰わない</li>
      </ul>

      <div>
        <p>カウント: {count}</p>
        <button type="button" onClick={countUp}>
          カウントアップ
        </button>
      </div>
    </>
  );
};

// 簡単とシンプルは違うよ
