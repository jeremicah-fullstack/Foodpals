import { configureStore } from "@reduxjs/toolkit";
import foodTypeReducer from "./foodType";
import menuReducer from "./menu";
import recipeInfoReducer from "./recipeInfo";
import recipeDataReducer from "./recipeData";

export const store = configureStore({
  reducer: {
    foodType: foodTypeReducer,
    foodMenu: menuReducer,
    recipeInfo: recipeInfoReducer,
    recipedata: recipeDataReducer,
  },
});
