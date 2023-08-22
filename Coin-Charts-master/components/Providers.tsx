"use client";

import React from "react";

export interface CoinData {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
  sparkline: { [index: number]: string };
  coinrankingUrl: string;
  "24hVolume": string;
  btcPrice: string;
}

interface MainContextTypes {
  coins: CoinData[];
  setCoins: React.Dispatch<React.SetStateAction<CoinData[]>>;
}

const defaultState = {
  coins: [],
  setCoins: (coinsArray: CoinData[]) => {},
} as MainContextTypes;

export const MainContext = React.createContext<MainContextTypes>(defaultState);

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [coins, setCoins] = React.useState<CoinData[]>([]);

  return (
    <MainContext.Provider value={{ coins, setCoins }}>
      {children}
    </MainContext.Provider>
  );
};

export default Providers;
