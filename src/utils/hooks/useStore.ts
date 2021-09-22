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
    const addToWallet = (data: ICurrency) => {
      dispatch({ type: "ADD_TO_WALLET", payload: data });
    };
    const removeFromWallet = (symbol: string) => {
      dispatch({ type: "REMOVE_FROM_WALLET", payload: symbol });
    };
    const increaseQuantity = (symbol: string) => {
      const currentItem = state.wallet.find(
        (item) => item.currency.symbol === symbol
      );
      const quantity = currentItem?.quantity || 0;
      dispatch({
        type: "SET_WALLET_QUANTITY",
        payload: { symbol, quantity: quantity + 1 },
      });
    };
    const decreaseQuantity = (symbol: string) => {
      const currentItem = state.wallet.find(
        (item) => item.currency.symbol === symbol
      );
      const quantity = currentItem?.quantity || 0;
      dispatch({
        type: "SET_WALLET_QUANTITY",
        payload: { symbol, quantity: quantity - 1 },
      });
    };

    return {
      state,
      setMeta,
      setCurrencies,
      setCurrentCoin,
      addToWallet,
      removeFromWallet,
      increaseQuantity,
      decreaseQuantity,
    };
  } else {
    throw new Error("useStore must be used within store provider");
  }
};
