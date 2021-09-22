import { ICurrency, IMeta } from "../types";
import { BASE_URL, ICON_API_URL } from "./constants";
import { GET } from "./httpServices";

export const fetchMeta = async (): Promise<{ data: IMeta[] }> => {
  try {
    const url = BASE_URL("meta");
    const response = await GET({ url });
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

const priceFormat = new Intl.NumberFormat("en-IN", {
  maximumSignificantDigits: 3,
  minimumSignificantDigits: 3,
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});
export const fetchCurrencies = async (
  symbols: string[]
): Promise<{ data: ICurrency[] }> => {
  try {
    const assetUrl = BASE_URL("assets");
    const symbolsString = symbols.join(",");
    const days = "15";
    const url = `${assetUrl}&symbol=${symbolsString}&data_points=${days}&interval=day`;
    const response = await GET({ url });
    const data = await response.json();
    const dataWithIcons = await Promise.all<ICurrency>(
      data?.data?.map(async (item: ICurrency) => {
        return {
          ...item,
          price: priceFormat.format(item.price),
          icon: await fetchIcon(item.symbol),
        };
      })
    );
    return { data: dataWithIcons };
  } catch (error: any) {
    throw new Error(error);
  }
};

export const fetchIcon = async (symbolName: string) => {
  try {
    const symbol = symbolName.toLowerCase();
    const url = ICON_API_URL({ symbol });
    const response = await GET({ url });
    const blobData = await response.blob();
    let icon = "";
    if (response.ok) {
      icon = URL.createObjectURL(blobData);
    }
    return icon;
  } catch (error: any) {
    throw new Error(error);
  }
};
