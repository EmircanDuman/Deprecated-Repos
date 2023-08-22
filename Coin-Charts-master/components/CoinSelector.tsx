"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CoinData, MainContext } from "./Providers";
import Image from "next/image";

export default function CoinSelector({ allCoins }: { allCoins: CoinData[] }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const { coins, setCoins } = React.useContext(MainContext);

  return (
    <div className="mt-14 flex md:flex-row flex-col gap-8 items-center justify-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild aria-controls="radix-:R1mcq:">
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? allCoins.find((coin) => coin.name.toLowerCase() === value)?.name
              : "Select crypto..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 overflow-y-auto max-h-96 bg-white">
          <Command>
            <CommandInput placeholder="Search crypto..." />
            <CommandEmpty>No crypto found.</CommandEmpty>
            <CommandGroup>
              {allCoins.map((coin) => (
                <CommandItem
                  key={coin.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  className="flex flex-row gap-4"
                >
                  <Image
                    src={coin.iconUrl}
                    alt="crypto icon"
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px] object-contain"
                  />
                  {coin.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <button
        className="px-4 py-2 bg-green-500 text-white hover:bg-green-600 rounded-xl text-xl font-bold"
        type="button"
        onClick={() => {
          if (value !== "") {
            const chosenCoin = allCoins.find(
              (coin) => coin.name.toLowerCase() === value
            ) as CoinData;
            const newCoins = [...coins, chosenCoin];
            setCoins(newCoins);
            setValue("");
          }
        }}
      >
        Submit
      </button>
    </div>
  );
}
