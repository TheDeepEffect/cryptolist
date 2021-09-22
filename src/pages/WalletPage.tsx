import { useHistory } from "react-router";
import { Button } from "../components/Button";

export const WalletPage = () => {
  const history = useHistory();
  return (
    <div className='wallet-page'>
      Wallet Page
      <Button onClick={() => history.push("/")}>Go To Home</Button>
    </div>
  );
};
