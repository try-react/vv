import React from "react";
import { NextPage } from "next";
import Link from "next/link";

const Component: NextPage = () => (
  <ul>
    <li>
      <Link href="/easy">
        <a>EasyCounter</a>
      </Link>
    </li>
    <li>
      <Link href="/simple">
        <a>SimpleCounter</a>
      </Link>
    </li>
  </ul>
);

export default Component;
