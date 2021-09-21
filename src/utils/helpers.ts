import { BASE_URL, ICON_API_URL } from "./constants";
import { GET } from "./httpServices";

export const fetchMeta = async () => {
  try {
    const url = BASE_URL("meta");
    const response = await GET({ url });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const fetchIcon = async (symbol: string) => {
  try {
    const url = ICON_API_URL({ symbol });
    const response = await GET({ url });
    const blobData = response.blob();
    const icon = URL.createObjectURL(blobData);
    return icon;
  } catch (error: any) {
    throw new Error(error);
  }
};
