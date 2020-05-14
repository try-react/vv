import React from "react";
import { NextPage } from "next";
import Link from "next/link";

const Component: NextPage = () => (
  <ul>
    <li>
      <Link href="/easy">
        <a>簡単なカウンター</a>
      </Link>
    </li>
    <li>
      <Link href="/simple">
        <a>シンプルなカウンター</a>
      </Link>
    </li>
  </ul>
);

export default Component;
