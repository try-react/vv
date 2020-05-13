import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { SimpleCounter } from ".";
import { Props } from "~/hooks/useSimpleCounter";

const props: Props = {
  count: 0,
  countUp: jest.fn,
};

const getTarget = () => {
  const { getByTestId } = render(<SimpleCounter {...props} />);

  return {
    label: getByTestId("label"),
    button: getByTestId("button"),
  };
};

beforeEach(cleanup);

it("初期状態", () => {
  const expected = `カウント: ${props.count}`;
  const el = getTarget();
  expect(el.label.innerHTML).toEqual(expected);
});

it("カウントアップ操作", () => {
  const clickCnt = 3;
  const spy = jest.spyOn(props, "countUp");
  const el = getTarget();

  [...Array(clickCnt)].forEach(() => fireEvent.click(el.button));
  expect(spy).toHaveBeenCalledTimes(clickCnt);
});
