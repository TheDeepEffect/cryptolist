import { useContext } from "react";
import { Context } from "../../Store";
import { ICurrency, IMeta } from "../../types";

export const useStore = () => {
  const context = useContext(Context);
  if (context) {
    const { state, dispatch } = context;
    const setMeta = (data: IMeta[]) => {
      dispatch({ type: "SET_META", payload: data });
    };
    const setCurrencies = (data: ICurrency[]) => {
      dispatch({ type: "SET_CURRENCIES", payload: data });
    };
    const setCurrentCoin = (data: ICurrency) => {
      dispatch({ type: "SET_CURRENT_COIN", payload: data });
    };
    return { state, setMeta, setCurrencies, setCurrentCoin };
  } else {
    throw new Error("useStore must be used within store provider");
  }
};
