import { IQuantityProps } from "../../types";
import { Button } from "../Button";
import "./Quantity.scss";
export const Quantity = (props: IQuantityProps) => {
  const { item, onDecrease, onIncrease, onRemove } = props;
  const {
    quantity,
    currency: { symbol },
  } = item;
  return (
    <div className='quantity-wrapper'>
      <div className='quantity-change'>
        <Button onClick={() => onDecrease(symbol)} disabled={quantity <= 1}>
          -
        </Button>
        <span>{quantity}</span>
        <Button onClick={() => onIncrease(symbol)}>+</Button>
      </div>
      <Button onClick={() => onRemove(symbol)}>Remove</Button>
    </div>
  );
};
