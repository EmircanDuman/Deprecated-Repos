"use server";

export async function GetCoins() {
  const url = process.env.XRapidAPIUrl;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.XRapidAPIKey,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url as string, options as object);
    const result = await response.json();
    return result.data.coins;
  } catch (error) {
    console.error(error);
  }
}
