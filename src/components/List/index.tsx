import { createContext, ReactNode, useState } from "react";

import { Item } from "./Item";
import "./List.scss";

type IListProps = {
  children: ReactNode;
  header?: string;
};
type IListContext = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

export const ListContext = createContext<IListContext | null>(null);

const List = (props: IListProps) => {
  const { children, header = "" } = props;
  const [selected, setSelected] = useState("");
  return (
    <ListContext.Provider value={{ selected, setSelected }}>
      <div className='list-wrapper'>
        <h2>{header}</h2>

        <div className='list'>{children}</div>
      </div>
    </ListContext.Provider>
  );
};

List.Item = Item;

export default List;
