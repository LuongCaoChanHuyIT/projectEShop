import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isLogin: (state) => {
      state.isLogin = !state.isLogin;
    },
  },
});

export const { isLogin } = authSlice.actions;
export default authSlice.reducer;
