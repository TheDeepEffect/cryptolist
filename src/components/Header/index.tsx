import { Button } from "../Button";
import "./Header.scss";

type IHeaderProps = {
  username?: string;
  message?: string;
};
export const Header = (props: IHeaderProps) => {
  const { username = "Alex", message = "Make your first investment today" } =
    props;
  return (
    <div className='header'>
      <div className='greetings'>
        Welcome,<span>{username}</span>
      </div>
      <div className='message'>{message}</div>
      <div>
        <Button inverse>Go to Wallet</Button>
      </div>
    </div>
  );
};
