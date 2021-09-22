import { ReactNode } from "react";
import { RouteComponentProps } from "react-router";

export type ITimeSeries = {
  asset_id: number;
  time: number;
  open: number;
  close: number;
};

export type ICurrency = {
  id: number;
  name: string;
  symbol: string;
  icon: string;
  price: number;
  percent_change_24h: number;
  timeSeries: ITimeSeries[];
};

export type IMeta = {
  id: number;
  name: string;
  symbol: string;
};

export type IWallet = {
  quantity: number;
  currency: ICurrency;
};

export type IState = {
  currencies: ICurrency[];
  meta: IMeta[];
  currentCoin: ICurrency | null;
  wallet: IWallet[];
};

export type IAction =
  | { type: "SET_CURRENCIES"; payload: ICurrency[] }
  | { type: "SET_META"; payload: IMeta[] }
  | { type: "SET_CURRENT_COIN"; payload: ICurrency | null }
  | {
      type: "SET_WALLET_QUANTITY";
      payload: { symbol: string; quantity: number };
    }
  | { type: "ADD_TO_WALLET"; payload: ICurrency }
  | { type: "REMOVE_FROM_WALLET"; payload: string };

export type IStoreContext = {
  state: IState;
  dispatch: (action: IAction) => void;
};
export type IStoreProps = {
  children: ReactNode;
};
export type IButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { inverse?: boolean };

export type IHeaderProps = {
  username?: string;
  message?: string;
};

export type IListProps = {
  children: ReactNode;
  header?: string;
  selectable?: boolean;
};
export type IListContext = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  selectable: boolean;
};
export type IItemProps = {
  children: ReactNode;
  onClick?: () => void;
  id?: string;
};
export type ITrendingListItem = {
  children?: ReactNode;
  title: string;
  symbol: string;
  icon?: string;
  price?: string;
  percentage?: string;
};
export type IRoutesConfig = {
  [key: string]: {
    id: string;
    name: string;
    description?: string;
    path: string;
    path_string: (params: any) => string;
    exact: boolean;
    isPrivate: boolean;
    isStatic?: boolean;
    component?:
      | React.ComponentType<RouteComponentProps<any>>
      | React.ComponentType<any>;
  };
};

export type IGET = { url: string; headers?: HeadersInit };
