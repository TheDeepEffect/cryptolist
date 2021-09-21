type IGET = { url: string };

export const GET = async (props: IGET) => {
  try {
    const { url } = props;
    const response = await fetch(url);
    return response;
  } catch (error: any) {
    const message = error || "Something Went Wrong";
    throw new Error(message);
  }
};
