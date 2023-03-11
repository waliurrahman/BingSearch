export async function getSearchResults(query) {
  const response = await fetch(
    `https://api.bing.microsoft.com/v7.0/search?q=${query}&count=10`,
    {
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.BING_API_KEY,
      },
    }
  );
  const data = await response.json();
  console.log(data)
  // return data;
  return data.webPages.value;
}
