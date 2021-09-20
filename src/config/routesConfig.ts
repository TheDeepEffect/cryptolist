import { RouteComponentProps } from "react-router-dom";

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

export const routesConfig: IRoutesConfig = {
  home: {
    id: "home",
    name: "Home",
    description: "Home page",
    path: "/",
    path_string: () => {
      return `/`;
    },
    exact: true,
    isPrivate: false,
    component: undefined,
  },
  wallet: {
    id: "wallet",
    name: "Wallet",
    description: "Wallet page",
    path: "/wallet",
    path_string: () => {
      return `/wallet`;
    },
    exact: true,
    isPrivate: false,
    component: undefined,
  },
};
