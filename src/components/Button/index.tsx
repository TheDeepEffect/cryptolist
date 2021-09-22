import { IButtonProps } from "../../types";
import "./Button.scss";

export const Button = (props: IButtonProps) => {
  const { children, inverse, ...rest } = props;
  return (
    <button className={inverse ? "btn-inverse" : "btn"} {...rest}>
      {children}
    </button>
  );
};
