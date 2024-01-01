import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageName: "Dash",
};

const functionSlice = createSlice({
  name: "fun",
  initialState,
  reducers: {
    changePageName: (state, action) => {
      state.pageName = action.payload;
    },
  },
});

export default functionSlice.reducer;

export const { changePageName } = functionSlice.actions;
