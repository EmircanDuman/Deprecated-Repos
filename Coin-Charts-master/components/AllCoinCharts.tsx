"use client";

import React from "react";
import { MainContext } from "./Providers";
import CoinChart from "./CoinChart";

const AllCoinCharts = () => {
  const { coins } = React.useContext(MainContext);

  return (
    <ul className="w-3/4 grid xl:grid-cols-2 grid-cols-1 items-center justify-center gap-3">
      {coins.map((coin, i) => (
        <li key={i}>
          <CoinChart coin={coin} />
        </li>
      ))}
    </ul>
  );
};

export default AllCoinCharts;
