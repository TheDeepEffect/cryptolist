import { IItemProps } from "../../types";
import { useList } from "../../utils/hooks/useList";
import "./Item.scss";

export const Item = ({ children, onClick = () => {}, id }: IItemProps) => {
  const handleOnClick = () => {
    if (id && selectable) {
      onClick();
      setSelected(id);
    }
  };
  const { selected, setSelected, selectable } = useList();
  return (
    <div
      className={`item ${id === selected ? "selected" : ""}`}
      onClick={handleOnClick}
    >
      {children}
    </div>
  );
};
