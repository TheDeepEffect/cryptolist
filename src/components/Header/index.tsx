import { useHistory } from "react-router";
import { IHeaderProps } from "../../types";
import { Button } from "../Button";
import "./Header.scss";

export const Header = (props: IHeaderProps) => {
  const { username = "Alex", message = "Make your first investment today" } =
    props;
  const history = useHistory();
  return (
    <div className='header'>
      <div className='greetings'>
        Welcome,<span>{username}</span>
      </div>
      <div className='message'>{message}</div>
      <div>
        <Button inverse onClick={() => history.push("/wallet")}>
          Go to Wallet
        </Button>
      </div>
    </div>
  );
};
