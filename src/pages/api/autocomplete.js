import axios from "axios";

export default async function handler(req, res) {
  const { query } = req.query;

  const response = await axios.get(
    `https://api.spoonacular.com/recipes/autocomplete?query=${query}&number=5&apiKey=${process.env.NEXT_PUBLIC_APP_API_KEY}`
  );

  const recipeNames = response.data.map((recipe) => ({
    id: recipe.id,
    name: recipe.title,
  }));

  res.status(200).json(recipeNames);
}
