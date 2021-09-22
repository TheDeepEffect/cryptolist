import { useStore } from "../../utils/hooks/useStore";
import { TrendingListItem } from "../TrendingListItem";
import "./CurrentCoinInfo.scss";
export const CurrentCoinInfo = () => {
  const {
    state: { currentCoin },
  } = useStore();
  return (
    <div className='current-coin-info'>
      <TrendingListItem
        title={currentCoin?.name || "Select an Asset"}
        symbol={currentCoin?.symbol || ""}
        icon={currentCoin?.icon}
        price={`${currentCoin?.price ? currentCoin?.price : ""}`}
        percentage={`${
          currentCoin?.percent_change_24h ? currentCoin?.percent_change_24h : ""
        }`}
      />
    </div>
  );
};
