import "./Icon.scss";
type IIconProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;
export const Icon = (props: IIconProps) => {
  return <img {...props} className='crypto-icon' />;
};
