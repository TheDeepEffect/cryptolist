import { createContext, ReactNode, useReducer } from "react";

type ITimeSeries = {
  asset_id: number;
  time: number;
  open: number;
  close: number;
};
type ICurrency = {
  id: number;
  name: string;
  symbol: string;
  icon: string;
  price: number;
  percent_change_24h: number;
  timeSeries: ITimeSeries[];
};
type IState = {
  currencies: ICurrency[];
};
type IAction = { type: "SET_CURRENCIES"; payload: ICurrency[] };
type IStoreContext = {
  state: IState;
  dispatch: (action: IAction) => void;
};
type IStoreProps = {
  children: ReactNode;
};
const initialState: IState = {
  currencies: [],
};

const reducers = (state: IState, action: IAction) => {
  switch (action.type) {
    case "SET_CURRENCIES":
      return {
        ...state,
        currencies: [...state.currencies, ...action.payload],
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
