import { IRoutesConfig } from "../types";

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
