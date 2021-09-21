import { ReactNode } from "react";
import { useList } from "../../utils/hooks/useList";
import "./Item.scss";
type IItemProps = {
  children: ReactNode;
};

export const Item = ({ children }: IItemProps) => {
  const { selected, setSelected } = useList();

  return <div className={`item`}>{children}</div>;
};
