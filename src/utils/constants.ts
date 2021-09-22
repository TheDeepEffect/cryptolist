export const API_KEY = process.env.REACT_APP_LUNARCRUSH_API_KEY;
export const BASE_URL = (data: string) =>
  `${process.env.REACT_APP_LUNARCRUSH_API_ENDPOINT}?data=${data}&key=${API_KEY}`;
export const ICON_API_URL = ({
  symbol,
  size = "50",
}: {
  symbol: string;
  size?: string;
}) => `${process.env.REACT_APP_ICON_API}${symbol}`;
