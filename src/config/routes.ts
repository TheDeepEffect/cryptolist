import { HomePage } from "../pages/HomePage";
import { WalletPage } from "../pages/WalletPage";
import { IRoutesConfig } from "../types";
import { routesConfig } from "./routesConfig";

export const routes: IRoutesConfig = {
  [routesConfig.home.id]: {
    ...routesConfig.home,
    component: HomePage,
  },
  [routesConfig.wallet.id]: {
    ...routesConfig.wallet,
    component: WalletPage,
  },
};
