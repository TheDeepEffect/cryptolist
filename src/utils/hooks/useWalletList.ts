import { useStore } from "./useStore";

export const useWalletList = () => {
  const { state, increaseQuantity, decreaseQuantity, removeFromWallet } =
    useStore();
  const { wallet } = state;
  return { wallet, increaseQuantity, decreaseQuantity, removeFromWallet };
};
