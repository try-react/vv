import React, { FC } from "react";
import { Props } from "~/hooks/useSimpleCounter";

export const SimpleCounter: FC<Props> = (props) => (
  <>
    <h2>シンプルなコンポーネント</h2>
    <ul>
      <li>pages/index.tsxから、propsを貰う</li>
    </ul>
    <div className="counter">
      <p>
        カウント:
        <span data-testid="label">{props.count}</span>
      </p>
      <button
        type="button"
        onClick={props.countUp}
        data-testid="button"
        className="count-button"
      >
        カウントアップ
      </button>
    </div>
  </>
);
