import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import groupReducer from "./slices/groupSlice";
import togetherReducer from "./slices/togetherSlice";
import authSlice from "./slices/authSlice";
export const store = configureStore({
  reducer: {
    together: togetherReducer,
    user: userReducer,
    group: groupReducer,
    auth: authSlice,
  },
});
