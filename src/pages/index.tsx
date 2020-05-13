import React from "react";
import { NextPage } from "next";
import { EasyCounter } from "~/components/EasyCounter";
import { SimpleCounter } from "~/components/SimpleCounter";
import { useSimpleCounter } from "~/hooks/useSimpleCounter";

const Component: NextPage = () => {
  const { count, countUp } = useSimpleCounter();

  return (
    <>
      <h1>簡単なコンポーネントとシンプルなコンポーネント</h1>
      <hr />
      <EasyCounter />
      <hr />
      <SimpleCounter count={count} countUp={countUp} />
      <hr />
      ああああああ いいいいいいい うううう
    </>
  );
};
export default Component;
