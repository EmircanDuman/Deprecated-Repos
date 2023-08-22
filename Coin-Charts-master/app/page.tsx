import AllCoinCharts from "@/components/AllCoinCharts";
import CoinChart from "@/components/CoinChart";
import CoinSelector from "@/components/CoinSelector";
import { GetCoins } from "@/lib/actions";
import React from "react";

export default async function Home() {
  const allCoins = await GetCoins();
  return (
    <main className="flex flex-col justify-start gap-10 items-center">
      <CoinSelector allCoins={allCoins} />
      <AllCoinCharts />
    </main>
  );
}
