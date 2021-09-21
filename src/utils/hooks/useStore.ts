import { useContext } from "react";
import { Context } from "../../Store";

export const useStore = () => {
  const context = useContext(Context);
  if (context) {
    return context;
  } else {
    throw new Error("useStore must be used within store provider");
  }
};
