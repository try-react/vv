import React from "react";
import { NextPage } from "next";
import { SimpleCounter } from "~/components/SimpleCounter";
import { useSimpleCounter } from "~/hooks/useSimpleCounter";

const Component: NextPage = () => {
  const { count, countUp } = useSimpleCounter();
  return <SimpleCounter count={count} countUp={countUp} />;
};

// これでもいいよ
// const Component: NextPage = () => {
//   const props = useSimpleCounter();
//   return <SimpleCounter {...props} />;
// };

// これでもいいよ
// const Component: NextPage = () => <SimpleCounter {...useSimpleCounter()} />;

export default Component;
