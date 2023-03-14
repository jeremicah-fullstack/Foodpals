import { createSlice } from "@reduxjs/toolkit";

const recipeData = createSlice({
  name: "recipeInfo",
  initialState: {
    recipeData: [],
    selectedRecipeId: null,
    loading: false,
    error: null,
  },
  reducers: {
    setRecipeData: (state, action) => {
      state.recipeData = action.payload;
    },
    setSelectedRecipeId: (state, action) => {
      state.selectedRecipeId = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setRecipeData, setSelectedRecipeId, setLoading, setError } =
  recipeData.actions;
export default recipeData.reducer;
