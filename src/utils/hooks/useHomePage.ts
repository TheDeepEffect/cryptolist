import { useEffect, useState } from "react";
import { fetchCurrencies, fetchMeta } from "../helpers";
import { useStore } from "./useStore";

export const useHomePage = () => {
  const [loading, setLoading] = useState(false);
  const { state, setMeta, setCurrencies } = useStore();
  const { meta } = state;
  const setInitialCurrency = async (symbols: string[]) => {
    try {
      const initialCurrenctData = await fetchCurrencies(symbols);
      const initialCurrencies = initialCurrenctData.data.sort((a, b) => {
        return a.id - b.id;
      });
      setCurrencies([...initialCurrencies]);
    } catch (err) {
      console.log(err);
    }
  };

  const setInitialData = async () => {
    try {
      setLoading(true);
      const data = await fetchMeta();
      const metadata = data.data;
      const initialSymbols = metadata
        .filter((_, i) => {
          if (i < 10) {
            return true;
          }
          return false;
        })
        .map((item) => item.symbol);
      await setInitialCurrency(initialSymbols);
      setMeta([...metadata]);
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!meta.length) setInitialData();
  }, []);
  return { loading };
};
