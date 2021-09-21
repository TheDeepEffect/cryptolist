import { useContext } from "react";
import { ListContext } from "../../components/List";

export const useList = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error(
      `List compound components cannot be rendered outside the List component`
    );
  }
  return context;
};
