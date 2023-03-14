export const getRecipes = async (query) => {
  const response = await fetch(
    `${process.env.NEXT_APP_SEARCH_QUERY}?apiKey=${process.env.NEXT_APP_API_KEY}&query`
  );
  const data = await response.json();
  return data;
};
