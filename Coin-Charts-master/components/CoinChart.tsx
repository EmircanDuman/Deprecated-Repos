"use client";

import React from "react";
import { CoinData } from "./Providers";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import Image from "next/image";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { green, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: green,
    secondary: red,
  },
});

const CoinChart = ({ coin }: { coin: CoinData }) => {
  const sparklineArray = Object.entries(coin.sparkline);

  const coinTimeData = sparklineArray.map(([name, value]) => ({
    name: Number(name),
    value: Number(value),
  }));
  const valuesArray: number[] = Object.values(sparklineArray).map(Number);

  const lowestValue: number = Math.min(...valuesArray);
  const isFirstValueLower: boolean =
    sparklineArray[0][1] < sparklineArray[sparklineArray.length - 1][1];

  return (
    <ThemeProvider theme={theme}>
      <div className="flex lg:flex-row flex-col justify-around items-center p-4 border-2 rounded-lg">
        <LineChart
          width={
            window.innerWidth < 500
              ? window.innerWidth < 450
                ? 300
                : 350
              : 400
          }
          height={200}
          data={coinTimeData}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className="select-none"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[(lowestValue * 9) / 10, "auto"]} />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke={isFirstValueLower ? "#82ca9d" : "#fa382a"}
            dot={false}
            strokeWidth={4}
          />
        </LineChart>
        <div className="flex flex-col gap-2 p-2 items-center text-center">
          <div className="flex flex-row gap-2 items-center border-b-2 pb-3">
            <Image
              src={coin.iconUrl as string}
              alt="coin icon"
              width={40}
              height={40}
              className="w-[40px] h-[40px] object-contain"
            />
            <h2>{coin.name}</h2>
            {isFirstValueLower ? (
              <ArrowDropDownCircleIcon
                color="primary"
                fontSize="large"
                style={{ transform: "rotate(180deg)" }}
              />
            ) : (
              <ArrowDropDownCircleIcon color="secondary" fontSize="large" />
            )}
          </div>
          <h3>
            Latest price: &nbsp;
            <span
              className={`font-semibold ${
                isFirstValueLower ? "text-green-500" : "text-red-500"
              }`}
            >
              ${sparklineArray[sparklineArray.length - 1][1].slice(0, 10)}
            </span>
          </h3>
          <h4>
            Market cap: &nbsp;
            <span className="font-bold">${coin.marketCap}</span>
          </h4>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CoinChart;
