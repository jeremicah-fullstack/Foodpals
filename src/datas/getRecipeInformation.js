import axios from "axios";
import { useDispatch } from "react-redux";

const getRecipeInformation = async (recipeId) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.NEXT_PUBLIC_APP_API_KEY}`
    );
    const recipeInfo = response.data;
    // console.log(recipeInfo, "pp");
  } catch (error) {
    console.error(error);
  }
};

export default getRecipeInformation;
