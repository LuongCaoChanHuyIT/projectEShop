import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    user: (state, data) => {
      state.user = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { user } = authSlice.actions;

export default authSlice.reducer;
