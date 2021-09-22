import { useMemo, useState } from "react";
import { ICurrency } from "../../types";
import { fetchCurrencies } from "../helpers";
import { useStore } from "./useStore";

export const useTrending = () => {
  const [loading, setLoading] = useState(false);

  const { state, setCurrencies, setCurrentCoin, addToWallet } = useStore();
  const { currencies, meta, wallet } = state;

  const isLoadMore = useMemo(() => {
    return currencies.length !== meta.length;
  }, [currencies]);

  const fetchMore = async () => {
    try {
      setLoading(true);
      const limit = currencies.length + 10;
      const newSymbols = meta
        .filter((_item, i) => i >= currencies.length && i < limit)
        .map((item) => item.symbol);
      const newCurrencyData = await fetchCurrencies(newSymbols);
      const newCurrency = newCurrencyData.data.sort((a, b) => a.id - b.id);
      setCurrencies([...newCurrency]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToWallet = (currency: ICurrency) => {
    addToWallet(currency);
  };
  const checkIsInWallet = (symbol: string) => {
    return wallet.some((item) => item.currency.symbol === symbol);
  };
  return {
    wallet,
    currencies,
    handleAddToWallet,
    isLoadMore,
    fetchMore,
    loading,
    setCurrentCoin,
    checkIsInWallet,
  };
};
