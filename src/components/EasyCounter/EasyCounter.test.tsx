import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { EasyCounter } from ".";

const initState = {
  count: 0,
};

const getTarget = () => {
  const { getByTestId } = render(<EasyCounter />);

  return {
    label: getByTestId("label"),
    button: getByTestId("button"),
  };
};

beforeEach(cleanup);

it("初期状態", () => {
  const expected = `カウント: ${initState.count}`;
  const el = getTarget();

  expect(el.label.innerHTML).toEqual(expected);
});

it("カウントアップ操作", () => {
  const clickCnt = 3;
  const expected = `カウント: ${clickCnt}`;
  const el = getTarget();

  [...Array(clickCnt)].forEach(() => fireEvent.click(el.button));
  expect(el.label.innerHTML).toEqual(expected);
});
