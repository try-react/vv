import React from "react";
import { NextPage } from "next";
import "~/styles.css";

const App: NextPage<any> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
