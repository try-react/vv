import React from "react";
import { NextPage } from "next";
import { SimpleCounter } from "~/components/SimpleCounter";
import { useSimpleCounter } from "~/hooks/useSimpleCounter";

const Component: NextPage = () => {
  const { count, countUp } = useSimpleCounter();
  return <SimpleCounter count={count} countUp={countUp} />;
};

export default Component;
