import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRole } from "../../apis/roles";

const initialState = {
  list: [],
  isErr: false,
  isLoad: false,
};

export const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchAllRoles.pending, (state, action) => {
        // Add user to the state array
        state.isLoad = true;
        state.isErr = false;
      })
      .addCase(fetchAllRoles.fulfilled, (state, action) => {
        // Add user to the state array
        state.list = action.payload;
        state.isLoad = false;
        state.isErr = false;
      })
      .addCase(fetchAllRoles.rejected, (state, action) => {
        // Add user to the state array
        state.isLoad = false;
        state.isErr = true;
      });
  },
});

export const fetchAllRoles = createAsyncThunk("roles/fetchAllRoles", async () => {
  const response = await getRole();
  return response.data;
});

export default roleSlice.reducer;
