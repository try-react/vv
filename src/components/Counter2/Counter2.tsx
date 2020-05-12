import React, { FC } from "react";
import { Props } from "~/hooks/useCounter2";

export const Counter2: FC<Props> = ({ count, countUp }) => (
  <>
    <h2>Counter2</h2>
    <ul>
      <li>useStateを、内包していないComponent</li>
      <li>pagesから、propsで貰う</li>
    </ul>

    <div>
      <p>カウント: {count}</p>
      <button type="button" onClick={countUp}>
        カウントアップ
      </button>
    </div>
  </>
);
