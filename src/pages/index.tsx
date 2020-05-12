import React from "react";
import { NextPage } from "next";
import { Counter } from "~/components/Counter";
import { Counter2 } from "~/components/Counter2";
import { useCounter2 } from "~/hooks/useCounter2";

const Component: NextPage = () => {
  const { count, countUp } = useCounter2();

  return (
    <>
      <Counter />
      <hr />
      <Counter2 count={count} countUp={countUp} />
    </>
  );
};
export default Component;
