import "./TrendingListItem.scss";
import { useMemo } from "react";
import { Icon } from "../Icon";
import { ITrendingListItem } from "../../types";

export const TrendingListItem = (props: ITrendingListItem) => {
  const { children, price, symbol, title, percentage, icon } = props;
  const isDown = useMemo(() => {
    return percentage?.startsWith("-");
  }, [percentage]);
  return (
    <div className='trending-list-item-wrapper'>
      <div className='trending-list-item-subject'>
        {icon ? <Icon src={icon} alt={symbol} /> : ""}
        <div className='trending-list-item-info'>
          <span className='trending-list-item-name'>{title}</span>
          <span className='trending-list-item-symbol'>{symbol}</span>
        </div>
      </div>
      {price ? (
        <div className='trending-list-item-price'>
          <span className='price'>{price}</span>
          <span className={`percenage ${isDown ? "down" : "up"}`}>
            {percentage}
          </span>
        </div>
      ) : (
        ""
      )}
      {children ? (
        <div className='trending-list-item-children'>{children}</div>
      ) : (
        ""
      )}
    </div>
  );
};
