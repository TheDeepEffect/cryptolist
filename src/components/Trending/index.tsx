import { Button } from "../Button";
import List from "../List";
import { TrendingListItem } from "../TrendingListItem";
import "./Trending.scss";
export const Trending = () => {
  return (
    <div className='trending-list-wrapper'>
      <List header='Trending Coins'>
        <List.Item>
          <TrendingListItem symbol='BTC' title='Bitcooin'>
            <Button>Add to Wallet</Button>
          </TrendingListItem>
        </List.Item>
      </List>
    </div>
  );
};
