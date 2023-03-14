import { createSlice } from "@reduxjs/toolkit";

export const foodTypeSlice = createSlice({
  name: "foodType",
  initialState: {
    foodType: "pasta",
  },
  reducers: {
    setFoodType: (state, action) => {
      state.foodType = action.payload;
    },
  },
});

export const { setFoodType } = foodTypeSlice.actions;
export default foodTypeSlice.reducer;
