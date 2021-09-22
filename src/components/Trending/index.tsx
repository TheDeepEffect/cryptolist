import { useStore } from "../../utils/hooks/useStore";
import { useTrending } from "../../utils/hooks/useTrending";
import { Button } from "../Button";
import List from "../List";
import { TrendingListItem } from "../TrendingListItem";
import "./Trending.scss";
export const Trending = () => {
  const {
    currencies,
    isLoadMore,
    loading,
    fetchMore,
    setCurrentCoin,
    handleAddToWallet,
    checkIsInWallet,
  } = useTrending();

  return (
    <div className='trending-list-wrapper'>
      <List header='Trending Coins'>
        {currencies.map((item) => (
          <List.Item
            key={item.id}
            id={`${item.id}`}
            onClick={() => setCurrentCoin(item)}
          >
            <TrendingListItem
              symbol={item.symbol}
              title={item.name}
              icon={item.icon}
              price={`${item.price}`}
              percentage={`${item.percent_change_24h}`}
            >
              <Button
                onClick={() => handleAddToWallet(item)}
                disabled={checkIsInWallet(item.symbol)}
              >
                {checkIsInWallet(item.symbol)
                  ? "Already in wallet"
                  : "Add to Wallet"}
              </Button>
            </TrendingListItem>
          </List.Item>
        ))}
        {isLoadMore ? (
          <List.Item>
            <Button onClick={fetchMore} disabled={loading}>
              Load More
            </Button>
          </List.Item>
        ) : null}
      </List>
    </div>
  );
};
