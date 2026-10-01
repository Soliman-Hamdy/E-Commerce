import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  counter: 0,
  userName: "ahmed",
};
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: initialState,
  //actions func=>state
  reducers: {
    increase: () => {
      console.log("inc ++");
    },
    decrease: () => {
      console.log("dec --");
    },
  },
});
export const { decrease, increase } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
