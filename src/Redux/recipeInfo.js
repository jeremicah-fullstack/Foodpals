import { createSlice } from "@reduxjs/toolkit";

const recipeInfoSlice = createSlice({
  name: "recipeInfo",
  initialState: {
    recipeInfo: "",
  },
  reducers: {
    getRecipeInfo: (state, action) => {
      state.recipeInfo = action.payload;
    },
  },
});

export const { getRecipeInfo } = recipeInfoSlice.actions;
export default recipeInfoSlice.reducer;
