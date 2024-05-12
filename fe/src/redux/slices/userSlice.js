import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../../apis/users";

const initialState = {
  list: [],
  isErr: false,
  isLoad: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchAllUsers.pending, (state, action) => {
        // Add user to the state array
        state.isLoad = true;
        state.isErr = false;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        // Add user to the state array
        state.list = action.payload;
        state.isLoad = false;
        state.isErr = false;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        // Add user to the state array
        state.isLoad = false;
        state.isErr = true;
      });
  },
});

export const fetchAllUsers = createAsyncThunk("users/fetchAllUsers", async () => {
  const response = await getUser();
  return response.data;
});

export default userSlice.reducer;
