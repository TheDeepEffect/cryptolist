import { useHistory } from "react-router";
import { Button } from "../components/Button";
import { WalletList } from "../components/WalletList";
import "./WalletPage.scss";
export const WalletPage = () => {
  const history = useHistory();
  return (
    <div className='wallet-page'>
      <Button onClick={() => history.push("/")}>Go To Home</Button>
      <WalletList />
    </div>
  );
};
