import { createContext, useReducer } from "react";
import { IAction, IState, IStoreContext, IStoreProps } from "../types";

const initialState: IState = {
  currencies: [],
  meta: [],
  currentCoin: null,
  wallet: [],
};

const reducers = (state: IState, action: IAction) => {
  switch (action.type) {
    case "SET_CURRENCIES":
      return {
        ...state,
        currencies: [...state.currencies, ...action.payload],
      };
    case "SET_META":
      return {
        ...state,
        meta: [...action.payload],
      };
    case "SET_CURRENT_COIN":
      return {
        ...state,
        currentCoin: action.payload,
      };
    case "ADD_TO_WALLET":
      return {
        ...state,
        wallet: [
          ...state.wallet,
          { quantity: 1, currency: { ...action.payload } },
        ],
      };
    case "REMOVE_FROM_WALLET":
      return {
        ...state,
        wallet: [
          ...state?.wallet.filter(
            (item) => item.currency.symbol !== action.payload
          ),
        ],
      };
    case "SET_WALLET_QUANTITY":
      return {
        ...state,
        wallet: state?.wallet.map((item) => {
          if (item?.currency?.symbol === action.payload.symbol) {
            return {
              ...item,
              quantity: action.payload.quantity,
            };
          }
          return item;
        }),
      };
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
};

export const Context = createContext<IStoreContext | null>(null);

export const Store = (props: IStoreProps) => {
  const [state, dispatch] = useReducer(reducers, initialState);
  const { children } = props;
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
