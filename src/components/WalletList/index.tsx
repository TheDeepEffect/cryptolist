import { Link } from "react-router-dom";
import { useWalletList } from "../../utils/hooks/useWalletList";
import List from "../List";
import { Quantity } from "../Quantity";
import { TrendingListItem } from "../TrendingListItem";

export const WalletList = () => {
  const { wallet, increaseQuantity, decreaseQuantity, removeFromWallet } =
    useWalletList();

  return (
    <div className='wallet-list'>
      <List header='Your Wallet' selectable={false}>
        {wallet.length ? (
          wallet.map((item) => {
            const { currency } = item;
            return (
              <List.Item key={item.currency.id}>
                <TrendingListItem
                  symbol={currency.symbol}
                  title={currency.name}
                  icon={currency.icon}
                  price={`${currency.price}`}
                  percentage={`${currency.percent_change_24h}`}
                >
                  <Quantity
                    item={item}
                    onIncrease={increaseQuantity}
                    onDecrease={decreaseQuantity}
                    onRemove={removeFromWallet}
                  />
                </TrendingListItem>
              </List.Item>
            );
          })
        ) : (
          <List.Item>
            Wallet Empty, Add from &nbsp; <Link to='/'> here</Link>
          </List.Item>
        )}
      </List>
    </div>
  );
};
