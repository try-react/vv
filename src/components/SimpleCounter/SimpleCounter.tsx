import React, { FC } from "react";
import { Props } from "~/hooks/useSimpleCounter";

export const SimpleCounter: FC<Props> = (props) => (
  <>
    <h2>シンプルなコンポーネント</h2>
    <ul>
      <li>useStateを、内包していないComponent</li>
      <li>pages/index.tsxから、propsを貰う</li>
    </ul>

    <div className="count-area">
      <p>カウント: {props.count}</p>
      <button type="button" onClick={props.countUp}>
        カウントアップ
      </button>
    </div>
  </>
);
