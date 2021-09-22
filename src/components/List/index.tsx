import { createContext, useState } from "react";
import { IListContext, IListProps } from "../../types";

import { Item } from "./Item";
import "./List.scss";

export const ListContext = createContext<IListContext | null>(null);

const List = (props: IListProps) => {
  const { children, header = "", selectable = true } = props;
  const [selected, setSelected] = useState("");
  return (
    <ListContext.Provider value={{ selected, setSelected, selectable }}>
      <div className='list-wrapper'>
        <h2>{header}</h2>

        <div className='list'>{children}</div>
      </div>
    </ListContext.Provider>
  );
};

List.Item = Item;

export default List;
