import "./TrendingListItem.scss";
import { ReactNode } from "react";
import { Icon } from "../Icon";

type ITrendingListItem = {
  children?: ReactNode;
  title: string;
  symbol: string;
  icon?: string;
  price?: string;
  percentage?: string;
};
export const TrendingListItem = (props: ITrendingListItem) => {
  const { children, price, symbol, title, percentage, icon } = props;
  return (
    <div className='trending-list-item-wrapper'>
      <div className='trending-list-item-subject'>
        <Icon />
        <div className='trending-list-item-info'>
          <span className='trending-list-item-name'>{title}</span>
          <span className='trending-list-item-symbol'>{symbol}</span>
        </div>
      </div>
      <div className='trending-list-item-price'>
        <span className='price'>{price}</span>
        <span className='percenage up'>{percentage}</span>
      </div>
      {children}
    </div>
  );
};
