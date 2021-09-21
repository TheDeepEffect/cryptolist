import "./Button.scss";

type IButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { inverse?: boolean };
export const Button = (props: IButtonProps) => {
  const { children, inverse, ...rest } = props;
  return (
    <button className={inverse ? "btn-inverse" : "btn"} {...rest}>
      {children}
    </button>
  );
};
